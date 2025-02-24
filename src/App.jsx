import React, { useState, useEffect, useCallback, useRef } from 'react';
import RobotViewer from './components/RobotViewer';
import SteamDeckVisual from './components/SteamDeckVisual';
import './App.css';

function App() {
  const [serialPort, setSerialPort] = useState(null);
  const [debugPort, setDebugPort] = useState(null);
  const [debugMessages, setDebugMessages] = useState([]);
  const maxDebugMessages = 100;
  const [sshProcess, setSshProcess] = useState({ ops: false, debug: false });
  const [robotData, setRobotData] = useState(null);
  const [teensyMode, setTeensyMode] = useState('A');  // Start assuming mode A
  const [stickValues, setStickValues] = useState({
    leftX: 0,
    leftY: 0,
    rightX: 0,
    rightY: 0
  });
  const [isTransmitting, setIsTransmitting] = useState(false);
  const transmitQueueRef = useRef([]);
  const lastTransmitTimeRef = useRef(0);
  const lastStatusTimeRef = useRef(Date.now());
  const robotViewerRef = useRef(null);
  const readerRef = useRef(null);
  const writerRef = useRef(null);

  const [gamepadState, setGamepadState] = useState({
    axes: [0, 0, 0, 0],
    buttons: Array(16).fill({ pressed: false, value: 0 })
  });
  const [onScreenButtons, setOnScreenButtons] = useState(Array(10).fill(false));
  const [lastTransmitTime, setLastTransmitTime] = useState(null);
  const [transmitStatus, setTransmitStatus] = useState({ 
    count: 0, 
    rate: 0,
    lastUpdate: Date.now(),
    lastPacketTime: null
  });
  const [lastSentData, setLastSentData] = useState({
    sticks: [0, 0, 0, 0],
    triggers: [0, 0],
    buttons: Array(6).fill(false),
    onScreenButtons: Array(10).fill(false)
  });
  const [writer, setWriter] = useState(null);
  const [robotMode, setRobotMode] = useState('P');  // Default to Perch mode until we hear from robot
  const [requestedMode, setRequestedMode] = useState(null);
  const [showPerchConfirm, setShowPerchConfirm] = useState(false);
  const [showModeTimeout, setShowModeTimeout] = useState(false);
  const [desiredMode, setDesiredMode] = useState(null);
  const [selectedJoint, setSelectedJoint] = useState(0);
  const [sliderValue, setSliderValue] = useState(0);
  const [motorEnabled, setMotorEnabled] = useState(false);

  const modeChangeTimeoutRef = useRef(null);

  const joints = [
    'left_hip_yaw',
    'left_hip_roll',
    'left_hip_pitch',
    'left_knee',
    'left_ankle',
    'right_hip_yaw',
    'right_hip_roll',
    'right_hip_pitch',
    'right_knee',
    'right_ankle',
    'neck_pitch',
    'head_pitch',
    'head_yaw',
    'head_roll',
    'left_antenna',
    'right_antenna'
  ];

  const PACKET_START = 0xAA;
  const PACKET_END = 0x55;
  const PACKET_LENGTH = 19;  // Start + Seq + 15 data bytes + Checksum + End
  const packetSequence = useRef(0);

  const handleModeChange = (newMode) => {
    if (robotMode === 'S' && newMode === 'P') {
      setShowPerchConfirm(true);
    } else {
      setRequestedMode(newMode);
      // Set timeout for mode change
      if (modeChangeTimeoutRef.current) {
        clearTimeout(modeChangeTimeoutRef.current);
      }
      modeChangeTimeoutRef.current = setTimeout(() => {
        setShowModeTimeout(true);
        setRequestedMode(null);
      }, 3000);
    }
  };

  const confirmModeChange = () => {
    setShowPerchConfirm(false);
    setRequestedMode('P');
    // Set timeout for perch mode change too
    if (modeChangeTimeoutRef.current) {
      clearTimeout(modeChangeTimeoutRef.current);
    }
    modeChangeTimeoutRef.current = setTimeout(() => {
      setShowModeTimeout(true);
      setRequestedMode(null);
    }, 3000);
  };

  // Initialize gamepad API
  useEffect(() => {
    console.log('Initializing gamepad support...');
    
    // Some browsers require a button press or explicit check to enable gamepads
    const checkGamepads = () => {
      const gamepads = navigator.getGamepads ? navigator.getGamepads() : [];
      const gamepad = gamepads[0];
      
     
    };

    // Check for initial gamepads
    checkGamepads();

    // Add gamepad connection event listeners
    const handleGamepadConnected = (e) => {
      console.log('Gamepad connected:', {
        id: e.gamepad.id,
        index: e.gamepad.index,
        mapping: e.gamepad.mapping,
        axes: e.gamepad.axes.length,
        buttons: e.gamepad.buttons.length
      });
      checkGamepads();
    };

    const handleGamepadDisconnected = (e) => {
      console.log('Gamepad disconnected:', {
        id: e.gamepad.id,
        index: e.gamepad.index
      });
      if (gamepadState !== null) {
        setGamepadState(null);
      }
      checkGamepads();
    };

    window.addEventListener('gamepadconnected', handleGamepadConnected);
    window.addEventListener('gamepaddisconnected', handleGamepadDisconnected);

    // Check periodically for gamepads (some browsers need this)
    const initInterval = setInterval(checkGamepads, 1000);

    // Try to force a gamepad scan (some browsers need this)
    const scanGamepad = () => {
      if (navigator.getGamepads) {
        navigator.getGamepads();
      }
    };
    window.addEventListener('mousemove', scanGamepad);
    window.addEventListener('keydown', scanGamepad);

    return () => {
      window.removeEventListener('gamepadconnected', handleGamepadConnected);
      window.removeEventListener('gamepaddisconnected', handleGamepadDisconnected);
      window.removeEventListener('mousemove', scanGamepad);
      window.removeEventListener('keydown', scanGamepad);
      clearInterval(initInterval);
    };
  }, []);

  // Track timing and transmission
  const lastTimestampRef = useRef(null);
  const transmitCountRef = useRef(0);

  // Log transmission stats every second
  useEffect(() => {
    const statsInterval = setInterval(() => {
      const now = performance.now();
      const delta = now - lastTransmitTimeRef.current;
      if (transmitCountRef.current > 0) {
        console.log('Transmission stats:', {
          packetsPerSecond: (transmitCountRef.current * 1000) / delta,
          queueLength: transmitQueueRef.current.length,
          timeSinceLastTransmit: delta
        });
      }
      transmitCountRef.current = 0;
      lastTransmitTimeRef.current = now;
    }, 1000);

    return () => clearInterval(statsInterval);
  }, []);

  // Poll for gamepad updates at 60Hz
  useEffect(() => {
    if (!gamepadState) return;

    const pollInterval = setInterval(() => {
      const gamepad = navigator.getGamepads()[0];
      if (gamepad?.connected && gamepad.timestamp !== lastTimestampRef.current) {
        setGamepadState(gamepad);
        lastTimestampRef.current = gamepad.timestamp;
      }
    }, 16); // 60Hz

    return () => clearInterval(pollInterval);
  }, [gamepadState]);

  // Serial data transmission at 250Hz
  useEffect(() => {
    if (!serialPort || !isTransmitting || !writerRef.current) {
      console.debug('Transmit not ready:', {
        hasPort: !!serialPort,
        isTransmitting,
        hasWriter: !!writerRef.current
      });
      return;
    }

    console.log('Starting transmit interval with writer');
    const writer = writerRef.current;

    const transmitInterval = setInterval(() => {
      if (transmitQueueRef.current.length > 0) {
        const packet = transmitQueueRef.current.shift();
        writer.write(packet).then(() => {
          transmitCountRef.current++;
        }).catch(error => {
          console.error('Error writing packet:', error);
          if (error.message.includes('closed')) {
            setSerialPort(null);
          }
        });
      }
    }, 4); // 250Hz

    return () => {
      console.log('Stopping transmit interval');
      clearInterval(transmitInterval);
    };
  }, [serialPort, isTransmitting]);

  // Queue gamepad data when state changes
  useEffect(() => {
    if (!gamepadState || !serialPort || !isTransmitting) {
      return;
    }

    // Drop if queue is getting too large
    if (transmitQueueRef.current.length >= 4) {
      console.debug('Queue full, dropping packet');
      return;
    }

    const packet = new Uint8Array(PACKET_LENGTH);
    packet[0] = PACKET_START;

    // Increment and wrap sequence number (0-255)
    packetSequence.current = (packetSequence.current + 1) & 0xFF;
    packet[1] = packetSequence.current;

    // Analog sticks (0-255)
    packet[2] = Math.round(((gamepadState.axes[0] + 1) / 2) * 255);  // Left X
    packet[3] = Math.round(((gamepadState.axes[1] + 1) / 2) * 255);  // Left Y
    packet[4] = Math.round(((gamepadState.axes[2] + 1) / 2) * 255);  // Right X
    packet[5] = Math.round(((gamepadState.axes[3] + 1) / 2) * 255);  // Right Y

    // Triggers (0-255)
    packet[6] = Math.round(gamepadState.buttons[6]?.value * 255);     // Left Trigger
    packet[7] = Math.round(gamepadState.buttons[7]?.value * 255);     // Right Trigger

    // D-Pad (as individual bits)
    packet[8] = ((gamepadState.buttons[12]?.pressed ? 1 : 0) << 0) | // Up
                ((gamepadState.buttons[13]?.pressed ? 1 : 0) << 1) | // Down
                ((gamepadState.buttons[14]?.pressed ? 1 : 0) << 2) | // Left
                ((gamepadState.buttons[15]?.pressed ? 1 : 0) << 3);  // Right

    // Face buttons and shoulders
    packet[9] = ((gamepadState.buttons[0]?.pressed ? 1 : 0) << 0) |  // A
                ((gamepadState.buttons[1]?.pressed ? 1 : 0) << 1) |  // B
                ((gamepadState.buttons[2]?.pressed ? 1 : 0) << 2) |  // X
                ((gamepadState.buttons[3]?.pressed ? 1 : 0) << 3) |  // Y
                ((gamepadState.buttons[4]?.pressed ? 1 : 0) << 4) |  // LB
                ((gamepadState.buttons[5]?.pressed ? 1 : 0) << 5) |  // RB
                ((gamepadState.buttons[8]?.pressed ? 1 : 0) << 6) |  // Back/Select
                ((gamepadState.buttons[9]?.pressed ? 1 : 0) << 7);   // Start

    // Stick clicks
    packet[10] = ((gamepadState.buttons[10]?.pressed ? 1 : 0) << 0) | // Left Stick
                 ((gamepadState.buttons[11]?.pressed ? 1 : 0) << 1);  // Right Stick

    // On-screen buttons (10 bits total)
    packet[11] = onScreenButtons.slice(0, 8).reduce((acc, val, idx) => acc | ((val ? 1 : 0) << idx), 0);  // First 8 buttons
    packet[12] = onScreenButtons.slice(8, 10).reduce((acc, val, idx) => acc | ((val ? 1 : 0) << idx), 0); // Last 2 buttons

    // Motor control data
    packet[13] = motorEnabled ? 1 : 0;  // Motor enable flag
    packet[14] = selectedJoint;  // Joint index (0-15)
    packet[15] = Math.round((sliderValue + 1) * 127.5);  // Joint position

    // Add requested mode or current mode
    packet[16] = requestedMode ? requestedMode.charCodeAt(0) : robotMode.charCodeAt(0);

    // Calculate checksum (XOR of all bytes except start, checksum, and end)
    let checksum = 0;
    for (let i = 1; i < PACKET_LENGTH - 2; i++) {
      checksum ^= packet[i];
    }
    packet[PACKET_LENGTH - 2] = checksum;
    
    packet[PACKET_LENGTH - 1] = PACKET_END;

    // Add to transmit queue
    transmitQueueRef.current.push(packet);
    console.debug('Queued packet:', {
      seq: packet[1],
      leftStick: [packet[2], packet[3]],
      rightStick: [packet[4], packet[5]],
      triggers: [packet[6], packet[7]],
      dpad: packet[8],
      buttons: packet[9],
      queueLength: transmitQueueRef.current.length
    });
  }, [gamepadState, onScreenButtons, motorEnabled, selectedJoint, sliderValue, robotMode, requestedMode, serialPort, isTransmitting]);

  // Enable transmission when port and writer are ready
  useEffect(() => {
    const checkWriter = async () => {
      if (serialPort) {
        try {
          if (!writerRef.current) {
            console.log("Getting writer...");
            const writer = serialPort.writable.getWriter();
            writerRef.current = writer;
            console.log("Writer acquired");
          }
          console.log('Enabling transmission - port and writer ready');
          setIsTransmitting(true);
        } catch (error) {
          console.error('Error getting writer:', error);
          setIsTransmitting(false);
        }
      } else {
        if (writerRef.current) {
          try {
            writerRef.current.releaseLock();
          } catch (e) {
            console.debug('Error releasing writer lock:', e);
          }
          writerRef.current = null;
        }
        console.log('Disabling transmission - no port');
        setIsTransmitting(false);
      }
    };
    
    checkWriter();
  }, [serialPort]);

  const connectControl = useCallback(async () => {
    try {
      if (serialPort) {
        console.log('Already connected to serial port');
        return;
      }

      // Get list of all available ports first
      console.log("Getting list of all available ports...");
      const ports = await navigator.serial.getPorts();
      
      // Log all available ports
      for (const port of ports) {
        const info = port.getInfo();
        console.log("Available port:", {
          vendorId: info.usbVendorId?.toString(16),
          productId: info.usbProductId?.toString(16),
          manufacturer: info.manufacturer,
          serialNumber: info.serialNumber
        });
      }

      // Only look for FTDI device with exact vendor/product IDs
      console.log("Requesting FTDI device with vendorId=0x0403, productId=0x6015");
      const selectedPort = await navigator.serial.requestPort({
        filters: [{
          usbVendorId: 0x0403,  // FTDI
          usbProductId: 0x6015  // FT231X USB UART
        }]
      });

      // Double check we got the right device
      const info = selectedPort.getInfo();
      console.log("Selected device:", {
        vendorId: info.usbVendorId?.toString(16),
        productId: info.usbProductId?.toString(16),
        manufacturer: info.manufacturer,
        serialNumber: info.serialNumber
      });

      // Strict validation that we got the right device
      if (info.usbVendorId !== 0x0403 || info.usbProductId !== 0x6015) {
        throw new Error(`Wrong device selected. Expected FTDI (0x0403/0x6015) but got ${info.usbVendorId?.toString(16)}/${info.usbProductId?.toString(16)}`);
      }

      console.log("Confirmed FTDI device, opening port...");
      await selectedPort.open({ 
        baudRate: 57600,
        dataBits: 8,
        stopBits: 1,
        parity: "none",
        flowControl: "none"
      });
      
      console.log("Port opened successfully");
      setSerialPort(selectedPort);
      console.log("Starting serial data read loop...");
    } catch (error) {
      console.error('Error connecting to serial:', error);
      setSerialPort(null);
      if (writerRef.current) {
        try {
          writerRef.current.releaseLock();
        } catch (e) {
          console.debug('Error releasing writer lock:', e);
        }
        writerRef.current = null;
      }
    }
  }, [serialPort]);

  // Serial port connection and read loop
  useEffect(() => {
    if (!serialPort) return;

    let isReading = true;
    
    const startReading = async () => {
      const portInfo = serialPort.getInfo();
      console.log("Starting read loop for port:", {
        vendorId: portInfo.usbVendorId?.toString(16),
        productId: portInfo.usbProductId?.toString(16),
        manufacturer: portInfo.manufacturer,
        serialNumber: portInfo.serialNumber
      });

      // Verify we're still connected to the right device
      if (portInfo.usbVendorId !== 0x0403 || portInfo.usbProductId !== 0x6015) {
        console.error("Wrong device in read loop! Expected FTDI (0x0403/0x6015) but got",
          portInfo.usbVendorId?.toString(16), "/", portInfo.usbProductId?.toString(16));
        setSerialPort(null);
        return;
      }

      try {
        while (serialPort.readable && isReading) {
          const reader = serialPort.readable.getReader();
          
          try {
            console.log("Reader acquired, starting read loop");
            while (isReading) {
              const { value, done } = await reader.read();
              if (done || !isReading) break;
              
              if (value) {
                // Log the raw bytes for debugging
                console.log('Received bytes:', Array.from(value).map(b => b.toString(16)));
                try {
                  const text = new TextDecoder().decode(value);
                  console.log('Received text:', text);
                } catch (parseError) {
                  console.debug("Error decoding data:", parseError);
                }
              }
            }
          } catch (error) {
            console.error('Error in read operation:', error);
          } finally {
            try {
              reader.releaseLock();
              console.log("Reader released");
            } catch (e) {
              console.debug('Error releasing reader:', e);
            }
          }
          
          if (!isReading) break;
        }
      } catch (error) {
        console.error('Fatal error in serial read loop:', error);
      }
      
      console.log('Read loop ended');
    };

    // Start the read loop
    startReading().catch(error => {
      console.error('Error starting read loop:', error);
    });

    // Cleanup function
    return () => {
      console.log('Cleaning up serial connection...');
      isReading = false;
      
      if (writerRef.current) {
        try {
          writerRef.current.releaseLock();
          console.log('Writer released');
        } catch (e) {
          console.debug('Error releasing writer:', e);
        }
        writerRef.current = null;
      }
      
      if (serialPort) {
        serialPort.close().catch(e => {
          console.debug('Error closing port:', e);
        });
      }
    };
  }, [serialPort]);

  const disconnectControl = useCallback(() => {
    console.log('Disconnecting control...');
    if (writerRef.current) {
      try {
        writerRef.current.releaseLock();
      } catch (e) {
        console.debug('Error releasing writer lock:', e);
      }
      writerRef.current = null;
    }
    if (serialPort) {
      serialPort.close().catch(console.error);
      setSerialPort(null);
    }
  }, [serialPort]);

  const handleButtonPress = (index) => {
    setOnScreenButtons(buttons => {
      const newButtons = [...buttons];
      newButtons[index] = true;
      return newButtons;
    });
  };

  const handleButtonRelease = (index) => {
    setOnScreenButtons(buttons => {
      const newButtons = [...buttons];
      newButtons[index] = false;
      return newButtons;
    });
  };

  // Clean up timeout on unmount
  useEffect(() => {
    return () => {
      if (modeChangeTimeoutRef.current) {
        clearTimeout(modeChangeTimeoutRef.current);
      }
    };
  }, []);

  const [debugOutput, setDebugOutput] = useState([]);
  const debugOutputRef = useRef(null);

  // SSH Connection for telemetry
  const connectSSH = useCallback(async () => {
    try {
      const response = await window.electron.startSSH('matt@192.168.1.50', 'cat /dev/puddleduck_ops', 'ops');
      if (response.success) {
        console.log('SSH connected successfully');
        setSshProcess(prev => ({ ...prev, ops: true }));
      } else {
        throw new Error('Failed to connect to SSH');
      }
    } catch (error) {
      console.error('Error connecting via SSH:', error);
      setSshProcess(prev => ({ ...prev, ops: false }));
    }
  }, []);

  const connectDebugSSH = useCallback(async () => {
    try {
      const response = await window.electron.startSSH('matt@192.168.1.50', 'cat /dev/puddleduck', 'debug');
      if (response.success) {
        console.log('Debug SSH connected successfully');
        setSshProcess(prev => ({ ...prev, debug: true }));
      } else {
        throw new Error('Failed to connect to debug SSH');
      }
    } catch (error) {
      console.error('Error connecting to debug SSH:', error);
      setSshProcess(prev => ({ ...prev, debug: false }));
    }
  }, []);

  const disconnectSSH = useCallback(async () => {
    try {
      await window.electron.stopSSH('ops');
      await window.electron.stopSSH('debug');
      setSshProcess({ ops: false, debug: false });
    } catch (error) {
      console.error('Error disconnecting SSH:', error);
    }
  }, []);

  // Set up SSH data listeners
  useEffect(() => {
    if (!window.electron) return;

    const removeOpsDataListener = window.electron.onSSHData('ops', (event, data) => {
      if (!data) return;
      console.log('Received ops data:', data); // Debug log
      try {
        const lines = data.split('\n');
        for (const line of lines) {
          if (!line.trim()) continue;
          try {
            const parsedData = JSON.parse(line);
            console.log('Parsed ops data:', parsedData); // Debug log
            setRobotData(parsedData);
            
            // Update robot visualization
            if (parsedData.motors) {
              console.log('Updating joints with:', parsedData.motors); // Debug log
              robotViewerRef.current?.updateJoints(parsedData.motors);
            }
            if (parsedData.sensors) {
              const imuSensor = parsedData.sensors.find(s => s.name === "imu");
              if (imuSensor) {
                console.log('Updating orientation with:', imuSensor); // Debug log
                robotViewerRef.current?.updateOrientation(imuSensor);
              }
            }
          } catch (e) {
            console.debug('Error parsing ops data line:', e, 'Line:', line);
          }
        }
      } catch (error) {
        console.error('Error processing ops data:', error);
      }
    });

    const removeDebugDataListener = window.electron.onSSHData('debug', (event, data) => {
      if (!data) return;
      console.log('Received debug data:', data); // Debug log
      const newLines = data.split('\n').filter(line => line.trim());
      if (newLines.length > 0) {
        setDebugOutput(prev => {
          const updated = [...prev, ...newLines];
          return updated.slice(-1000); // Keep last 1000 lines
        });
        // Auto-scroll to bottom
        requestAnimationFrame(() => {
          if (debugOutputRef.current) {
            debugOutputRef.current.scrollTop = debugOutputRef.current.scrollHeight;
          }
        });
      }
    });

    const removeOpsErrorListener = window.electron.onSSHError('ops', (event, error) => {
      console.error('Ops SSH Error:', error);
    });

    const removeDebugErrorListener = window.electron.onSSHError('debug', (event, error) => {
      console.error('Debug SSH Error:', error);
    });

    const removeOpsCloseListener = window.electron.onSSHClose('ops', (event, code) => {
      console.log('Ops SSH connection closed with code:', code);
      setSshProcess(prev => ({ ...prev, ops: false }));
    });

    const removeDebugCloseListener = window.electron.onSSHClose('debug', (event, code) => {
      console.log('Debug SSH connection closed with code:', code);
      setSshProcess(prev => ({ ...prev, debug: false }));
    });

    // Clean up function
    return () => {
      removeOpsDataListener?.();
      removeDebugDataListener?.();
      removeOpsErrorListener?.();
      removeDebugErrorListener?.();
      removeOpsCloseListener?.();
      removeDebugCloseListener?.();
    };
  }, []);

  // Separate effect for robot data updates
  useEffect(() => {
    if (!robotData) return;
    console.log('Robot data updated:', robotData); // Debug log

    // Update robot visualization whenever robotData changes
    if (robotData.motors) {
      console.log('Updating joints from state change:', robotData.motors); // Debug log
      robotViewerRef.current?.updateJoints(robotData.motors);
    }
    if (robotData.sensors) {
      const imuSensor = robotData.sensors.find(s => s.name === "imu");
      if (imuSensor) {
        console.log('Updating orientation from state change:', imuSensor); // Debug log
        robotViewerRef.current?.updateOrientation(imuSensor);
      }
    }
  }, [robotData]);

  // Cleanup when component unmounts
  useEffect(() => {
    return () => {
      if (readerRef.current) {
        try {
          readerRef.current.releaseLock();
        } catch (e) {
          console.debug('Error releasing reader lock:', e);
        }
        readerRef.current = null;
      }
      if (writerRef.current) {
        try {
          writerRef.current.releaseLock();
        } catch (e) {
          console.debug('Error releasing writer lock:', e);
        }
        writerRef.current = null;
      }
      if (serialPort) {
        serialPort.close().catch(console.error);
      }
    };
  }, [serialPort]);

  // Serial data transmission
  useEffect(() => {
    if (!serialPort || !isTransmitting || !writerRef.current) {
      console.debug('Transmit not ready:', {
        hasPort: !!serialPort,
        isTransmitting,
        hasWriter: !!writerRef.current
      });
      return;
    }

    console.log('Starting transmit interval with writer');
    const writer = writerRef.current;
    const transmitInterval = setInterval(() => {
      // Process all queued packets
      while (transmitQueueRef.current.length > 0) {
        const packet = transmitQueueRef.current.shift();
        writer.write(packet).catch(error => {
          console.error('Error writing from queue:', error);
          if (error.message.includes('closed')) {
            setSerialPort(null);
            return;
          }
        });
      }
    }, 4); // ~250Hz

    return () => {
      console.log('Stopping transmit interval');
      clearInterval(transmitInterval);
    };
  }, [serialPort, isTransmitting]);

  // Update UI to include debug output
  return (
    <div className="layout-container">
      <div className="side-panel left-panel">
        <div className="control-section">
        
          <div className="button-grid">
            {[...Array(10)].map((_, i) => (
              <button
                key={i}
                className={`button ${onScreenButtons[i] ? 'active' : ''}`}
                onMouseDown={() => handleButtonPress(i)}
                onMouseUp={() => handleButtonRelease(i)}
                onTouchStart={(e) => {
                  e.preventDefault();
                  handleButtonPress(i);
                }}
                onTouchEnd={(e) => {
                  e.preventDefault();
                  handleButtonRelease(i);
                }}
              >
                Action {i + 1}
              </button>
            ))}
          </div>
          
          {robotMode === 'P' && (
            <div className="joint-controls">
              <h5>Motor Test</h5>
              <select 
                value={selectedJoint} 
                onChange={(e) => setSelectedJoint(Number(e.target.value))}
                className="joint-select"
              >
                {joints.map((joint, index) => (
                  <option key={joint} value={index}>{joint}</option>
                ))}
              </select>
              
              <div className="slider-row">
                <button 
                  className={`motor-button ${motorEnabled ? 'active' : ''}`}
                  onClick={() => setMotorEnabled(!motorEnabled)}
                >
                  MOTOR {motorEnabled ? 'ON' : 'OFF'}
                </button>
                
                <div className="slider-container">
                  <input
                    type="range"
                    min="-1"
                    max="1"
                    step="0.01"
                    value={sliderValue}
                    onChange={(e) => setSliderValue(Number(e.target.value))}
                    className="joint-slider"
                  />
                  <div className="slider-value">{sliderValue.toFixed(2)}</div>
                </div>
              </div>
            </div>
          )}
        </div>
       
      </div>
      <div className="main-panel">
        <div className="robot-viewer">
          <RobotViewer ref={robotViewerRef} />
        </div>
        <div className="steam-deck-visual-container">
          <SteamDeckVisual gamepadState={gamepadState} />
        </div>
      </div>
      <div className="side-panel right-panel" style={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        maxHeight: '730px',
        padding: '8px',
        gap: '8px'
      }}>
        <div className="control-panel" style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '6px'
        }}>
          <div className="mode-control" style={{
            backgroundColor: '#2a2a2a',
            padding: '8px',
            borderRadius: '6px'
          }}>
            <div className="mode-status" style={{ marginBottom: '8px' }}>
              <span style={{fontSize: '16px', color: '#fff'}}>Current Mode: </span>
              <span style={{fontSize: '24px', color: '#4ade80'}}>
                {robotMode === 'P' ? 'Perch' : robotMode === 'S' ? 'Standby' : 'Active'}
              </span>
              {requestedMode && (
                <div className="mode-pending" >
                  Changing to {requestedMode === 'P' ? 'Perch' : requestedMode === 'S' ? 'Standby' : 'Active'}...
                </div>
              )}
            </div>
            {!requestedMode && (
              <div className="mode-buttons" style={{ display: 'flex', gap: '6px' }}>
                {robotMode === 'P' && (
                  <button 
                    className="mode-button"
                    onClick={() => handleModeChange('S')}
                    
                  >
                    Set to Standby
                  </button>
                )}
                {robotMode === 'S' && (
                  <>
                    <button 
                      className="mode-button"
                      onClick={() => handleModeChange('A')}
                     
                    >
                      Set to Active
                    </button>
                    <button 
                      className="mode-button"
                      onClick={() => handleModeChange('P')}
                     
                    >
                      Set to Perch
                    </button>
                  </>
                )}
                {robotMode === 'A' && (
                  <button 
                    className="mode-button"
                    onClick={() => handleModeChange('S')}
                   
                  >
                    Set to Standby
                  </button>
                )}
              </div>
            )}
          </div>

          <div className="connection-panel" style={{
            padding: '8px',
            backgroundColor: '#2a2a2a',
            borderRadius: '6px'
          }}>
            <h3 style={{ 
              margin: '0 0 6px 0',
              color: '#fff',
              fontSize: '20px',
              fontWeight: '500'
            }}>Connections</h3>
            <div className="status-panel" style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '6px'
            }}>
              <div className="status-item" style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '6px 10px',
                backgroundColor: '#1e1e1e',
                borderRadius: '4px',
                transition: 'background-color 0.2s ease'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span className="status-label" >Serial:</span>
                  <span className={`status-value`} >
                    {serialPort ? 'Connected' : 'Disconnected'}
                  </span>
                </div>
                <button 
                  onClick={serialPort ? disconnectControl : connectControl}
                  className={`connection-button ${serialPort ? 'active' : ''}`}
                  style={{
                    padding: '4px 8px',
                    borderRadius: '4px',
                    border: 'none',
                    backgroundColor: serialPort ? '#2c5282' : '#4a5568',
                    color: '#fff',
                    cursor: 'pointer',
                    fontSize: '20px',
                    transition: 'all 0.2s ease',
                    ':hover': {
                      backgroundColor: serialPort ? '#2d3748' : '#718096',
                      transform: 'translateY(-1px)'
                    }
                  }}
                >
                  {serialPort ? 'Disconnect' : 'Connect'}
                </button>
              </div>

              <div className="status-item" style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '6px 10px',
                backgroundColor: '#1e1e1e',
                borderRadius: '4px',
                transition: 'background-color 0.2s ease'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span className="status-label" >Telemetry:</span>
                  <span className={`status-value`} >
                    {sshProcess.ops ? 'Connected' : 'Disconnected'}
                  </span>
                </div>
                <button 
                  onClick={sshProcess.ops ? disconnectSSH : connectSSH}
                  className={`connection-button ${sshProcess.ops ? 'active' : ''}`}
                  style={{
                    padding: '4px 8px',
                    borderRadius: '4px',
                    border: 'none',
                    backgroundColor: sshProcess.ops ? '#2c5282' : '#4a5568',
                    color: '#fff',
                    cursor: 'pointer',
                    fontSize: '20px',
                    transition: 'all 0.2s ease',
                    ':hover': {
                      backgroundColor: sshProcess.ops ? '#2d3748' : '#718096',
                      transform: 'translateY(-1px)'
                    }
                  }}
                >
                  {sshProcess.ops ? 'Disconnect' : 'Connect'}
                </button>
              </div>

              <div className="status-item" style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '6px 10px',
                backgroundColor: '#1e1e1e',
                borderRadius: '4px',
                transition: 'background-color 0.2s ease'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span className="status-label" >Debug:</span>
                  <span className={`status-value`} >
                    {sshProcess.debug ? 'Connected' : 'Disconnected'}
                  </span>
                </div>
                <button 
                  onClick={sshProcess.debug ? disconnectSSH : connectDebugSSH}
                  className={`connection-button ${sshProcess.debug ? 'active' : ''}`}
                  style={{
                    padding: '4px 8px',
                    borderRadius: '4px',
                    border: 'none',
                    backgroundColor: sshProcess.debug ? '#2c5282' : '#4a5568',
                    color: '#fff',
                    cursor: 'pointer',
                    fontSize: '20px',
                    transition: 'all 0.2s ease',
                    ':hover': {
                      backgroundColor: sshProcess.debug ? '#2d3748' : '#718096',
                      transform: 'translateY(-1px)'
                    }
                  }}
                >
                  {sshProcess.debug ? 'Disconnect' : 'Connect'}
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="debug-output" ref={debugOutputRef} style={{
          flexGrow: 1,
          minHeight: '80px',
          maxHeight: 'calc(100vh - 480px)',
          overflowY: 'auto',
          backgroundColor: '#1e1e1e',
          color: '#fff',
          padding: '8px',
          fontFamily: 'monospace',
          fontSize: '11px',
          whiteSpace: 'pre-wrap',
          wordWrap: 'break-word',
          borderRadius: '6px'
        }}>
          <div style={{ 
            color: '#888', 
            marginBottom: '4px',
            borderBottom: '1px solid #333',
            paddingBottom: '4px',
            fontSize: '12px',
            fontWeight: '500'
          }}>Debug Output</div>
          <div style={{ paddingTop: '2px' }}>
            {debugOutput.map((line, index) => (
              <div key={index} style={{ 
                lineHeight: '1.2',
                marginBottom: '1px'
              }}>{line}</div>
            ))}
          </div>
        </div>
      </div>
      {showModeTimeout && (
        <div className="modal-overlay">
          <div className="modal-content">
            <p>Mode change request timed out!</p>
            <p>The robot did not confirm the mode change. Please try again.</p>
            <div className="modal-buttons">
              <button onClick={() => setShowModeTimeout(false)}>OK</button>
            </div>
          </div>
        </div>
      )}

      {showPerchConfirm && (
        <div className="modal-overlay">
          <div className="modal-content">
            <p>Are you sure you want to change to perch mode?</p>
            <p>This will loosen all joints and robot should be on stand.</p>
            <div className="modal-buttons">
              <button onClick={confirmModeChange}>Yes, Continue</button>
              <button onClick={() => {
                setShowPerchConfirm(false);
              }}>Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
