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
  const transmitQueue = useRef([]);
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
  const [robotMode, setRobotMode] = useState('P'); // Default to Perch mode until we hear from robot
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

  const sendJoystickData = useCallback(() => {
    if (!serialPort || !gamepadState) return;

    const packet = new Uint8Array(16); // Increased size for mode
    packet[0] = PACKET_START;

    // Analog sticks (0-255)
    packet[1] = Math.round(((gamepadState.axes[0] + 1) / 2) * 255);  // Left X
    packet[2] = Math.round(((gamepadState.axes[1] + 1) / 2) * 255);  // Left Y
    packet[3] = Math.round(((gamepadState.axes[2] + 1) / 2) * 255);  // Right X
    packet[4] = Math.round(((gamepadState.axes[3] + 1) / 2) * 255);  // Right Y

    // Triggers (0-255)
    packet[5] = Math.round(gamepadState.buttons[6]?.value * 255);     // Left Trigger
    packet[6] = Math.round(gamepadState.buttons[7]?.value * 255);     // Right Trigger

    // D-Pad (as individual bits)
    packet[7] = ((gamepadState.buttons[12]?.pressed ? 1 : 0) << 0) | // Up
                ((gamepadState.buttons[13]?.pressed ? 1 : 0) << 1) | // Down
                ((gamepadState.buttons[14]?.pressed ? 1 : 0) << 2) | // Left
                ((gamepadState.buttons[15]?.pressed ? 1 : 0) << 3);  // Right

    // Face buttons and shoulders
    packet[8] = ((gamepadState.buttons[0]?.pressed ? 1 : 0) << 0) |  // A
                ((gamepadState.buttons[1]?.pressed ? 1 : 0) << 1) |  // B
                ((gamepadState.buttons[2]?.pressed ? 1 : 0) << 2) |  // X
                ((gamepadState.buttons[3]?.pressed ? 1 : 0) << 3) |  // Y
                ((gamepadState.buttons[4]?.pressed ? 1 : 0) << 4) |  // LB
                ((gamepadState.buttons[5]?.pressed ? 1 : 0) << 5) |  // RB
                ((gamepadState.buttons[8]?.pressed ? 1 : 0) << 6) |  // Back/Select
                ((gamepadState.buttons[9]?.pressed ? 1 : 0) << 7);   // Start

    // Stick clicks
    packet[9] = ((gamepadState.buttons[10]?.pressed ? 1 : 0) << 0) | // Left Stick
                ((gamepadState.buttons[11]?.pressed ? 1 : 0) << 1);  // Right Stick

    // On-screen buttons (10 bits)
    packet[10] = (onScreenButtons.slice(0, 8).map((b, i) => (b ? 1 : 0) << i).reduce((a, b) => a | b, 0));
    packet[11] = (onScreenButtons.slice(8, 10).map((b, i) => (b ? 1 : 0) << i).reduce((a, b) => a | b, 0));

    // Joint control data
    packet[12] = motorEnabled ? 1 : 0;  // Motor enable flag
    packet[13] = selectedJoint;  // Joint index (0-15)
    // Convert slider value (-1 to 1) to byte range (0-255)
    packet[14] = Math.round((sliderValue + 1) * 127.5);  // Joint position

    // Add requested mode or current mode
    packet[15] = requestedMode ? requestedMode.charCodeAt(0) : robotMode.charCodeAt(0);
    
    packet[packet.length - 1] = PACKET_END;

    // Add to transmit queue
    transmitQueue.current.push(packet);
  }, [serialPort, gamepadState, onScreenButtons, motorEnabled, selectedJoint, sliderValue, robotMode, requestedMode]);

  // Transmit data at fixed rate
  useEffect(() => {
    const now = Date.now();
    if (now - lastTransmitTimeRef.current < 33) { // Enforce 30Hz max rate
      return;
    }
    lastTransmitTimeRef.current = now;

    sendJoystickData();
  }, [sendJoystickData]);

  // Gamepad polling
  useEffect(() => {
    const pollGamepad = () => {
      const gamepads = navigator.getGamepads();
      const gamepad = gamepads[0]; // Using first gamepad

      if (gamepad) {
        // Ensure we have valid data
        const axes = Array.from(gamepad.axes || []).map(v => Number(v) || 0);
        while (axes.length < 4) axes.push(0);
        
        const buttons = Array.from(gamepad.buttons || []).map(b => ({
          pressed: Boolean(b?.pressed),
          value: Number(b?.value) || 0
        }));
        while (buttons.length < 16) buttons.push({ pressed: false, value: 0 });
        
        setGamepadState({
          axes,
          buttons
        });
      }
    };

    const interval = setInterval(pollGamepad, 16); // 60Hz polling
    return () => clearInterval(interval);
  }, []);

  const readSerialData = async (port) => {
    let reader;
    try {
      while (port.readable) {
        reader = port.readable.getReader();
        try {
          while (true) {
            const { value, done } = await reader.read();
            if (done) {
              console.log('Serial read complete');
              break;
            }
            if (value) {
              const textData = new TextDecoder().decode(value);
              try {
                const parsedData = JSON.parse(textData);
                if (parsedData.motors) {
                  robotViewerRef.current?.updateJoints(parsedData.motors);
                }
                if (parsedData.sensors) {
                  const imuSensor = parsedData.sensors.find(s => s.name === "imu");
                  if (imuSensor) {
                    robotViewerRef.current?.updateOrientation(imuSensor);
                  }
                }
              } catch (parseError) {
                console.debug("Error parsing serial data:", parseError);
              }
            }
          }
        } catch (readError) {
          console.error('Error reading from serial:', readError);
        } finally {
          reader.releaseLock();
        }
      }
    } catch (error) {
      console.error('Fatal error in serial connection:', error);
    } finally {
      if (reader?.releaseLock) {
        try {
          reader.releaseLock();
        } catch (e) {
          console.debug('Error releasing reader lock:', e);
        }
      }
      setSerialPort(null);
    }
    console.log('Serial read loop ended');
  };

  const connectControl = useCallback(async () => {
    try {
      if (serialPort) {
        console.log('Already connected to serial port');
        return;
      }

      console.log("Requesting serial port...");
      const port = await navigator.serial.requestPort({
        filters: [{
          usbVendorId: 0x0403,
          usbProductId: 0x6015
        }]
      });

      await port.open({ baudRate: 57600 });
      setSerialPort(port);

      const writer = port.writable.getWriter();
      writerRef.current = writer;
      setWriter(writer);

      readSerialData(port);
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

  // Process transmit queue
  useEffect(() => {
    if (!writerRef.current || !serialPort) return;

    const transmitInterval = setInterval(async () => {
      if (transmitQueue.current.length === 0 || isTransmitting) return;
      
      setIsTransmitting(true);
      try {
        const packet = transmitQueue.current.shift();
        await writerRef.current.write(packet);
      } catch (error) {
        console.error('Error writing to serial:', error);
        if (error.message.includes('closed')) {
          setSerialPort(null);
        }
      } finally {
        setIsTransmitting(false);
      }
    }, 10);

    return () => clearInterval(transmitInterval);
  }, [serialPort, isTransmitting]);

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

  const handleButtonPress = (index) => {
    const newButtons = [...onScreenButtons];
    newButtons[index] = true;
    setOnScreenButtons(newButtons);
  };

  const handleButtonRelease = (index) => {
    const newButtons = [...onScreenButtons];
    newButtons[index] = false;
    setOnScreenButtons(newButtons);
  };

  // Clean up timeout on unmount
  useEffect(() => {
    return () => {
      if (modeChangeTimeoutRef.current) {
        clearTimeout(modeChangeTimeoutRef.current);
      }
    };
  }, []);

  // SSH Connection for telemetry
  const connectSSH = useCallback(async () => {
    try {
      const response = await window.electron.startSSH('matt@192.168.1.50', 'cat /dev/puddleduck_ops');
      if (response.success) {
        console.log('SSH connected successfully');
        setSshProcess({ ops: true, debug: false });
      } else {
        throw new Error('Failed to connect to SSH');
      }
    } catch (error) {
      console.error('Error connecting via SSH:', error);
      setSshProcess({ ops: false, debug: false });
    }
  }, []);

  const disconnectSSH = useCallback(async () => {
    try {
      const response = await window.electron.stopSSH();
      if (response.success) {
        console.log('SSH disconnected successfully');
      }
      setSshProcess({ ops: false, debug: false });
    } catch (error) {
      console.error('Error disconnecting SSH:', error);
    }
  }, []);

  // Set up SSH data listeners
  useEffect(() => {
    if (!window.electron) return;

    const removeDataListener = window.electron.onSSHData((event, data) => {
      if (!data) return;
      try {
        const lines = data.split('\n');
        for (const line of lines) {
          if (!line.trim()) continue;
          try {
            const parsedData = JSON.parse(line);
            setRobotData(parsedData);
            
            // Update robot visualization
            if (parsedData.motors) {
              robotViewerRef.current?.updateJoints(parsedData.motors);
            }
            if (parsedData.sensors) {
              const imuSensor = parsedData.sensors.find(s => s.name === "imu");
              if (imuSensor) {
                robotViewerRef.current?.updateOrientation(imuSensor);
              }
            }
          } catch (e) {
            // Skip invalid JSON lines
            console.debug('Error parsing SSH data line:', e);
          }
        }
      } catch (error) {
        console.error('Error processing SSH data:', error);
      }
    });

    const removeErrorListener = window.electron.onSSHError((event, error) => {
      console.error('SSH Error:', error);
    });

    const removeCloseListener = window.electron.onSSHClose((event, code) => {
      console.log('SSH connection closed with code:', code);
      setSshProcess({ ops: false, debug: false });
    });

    return () => {
      removeDataListener?.();
      removeErrorListener?.();
      removeCloseListener?.();
    };
  }, []);

  // Effect to handle robot data updates
  useEffect(() => {
    if (!robotData) return;

    // Update robot visualization whenever robotData changes
    if (robotData.motors) {
      robotViewerRef.current?.updateJoints(robotData.motors);
    }
    if (robotData.sensors) {
      const imuSensor = robotData.sensors.find(s => s.name === "imu");
      if (imuSensor) {
        robotViewerRef.current?.updateOrientation(imuSensor);
      }
    }
  }, [robotData]);

  return (
    <div className="layout-container">
      <div className="side-panel left-panel">
        <div className="control-section">
        
          <div className="button-grid">
            {Array.from({ length: 10 }, (_, i) => (
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
      <div className="flex-1 h-full">
        <div className="main-panel">
          <div className="robot-viewer">
            <RobotViewer ref={robotViewerRef} />
          </div>
          <div className="steam-deck-visual-container">
            <SteamDeckVisual gamepadState={gamepadState} />
          </div>
        </div>
      </div>
      <div className="side-panel right-panel">
        <div className="mode-control">
          <div className="mode-status">
           <span style={{fontSize: 16, color: '#fff'}}>Current Mode:</span> {robotMode === 'P' ? 'Perch' : robotMode === 'S' ? 'Standby' : 'Active'}
            {requestedMode && (
              <div className="mode-pending">
                Changing to {requestedMode === 'P' ? 'Perch' : requestedMode === 'S' ? 'Standby' : 'Active'}...
              </div>
            )}
          </div>
          {!requestedMode && (  // Only show buttons if we're not waiting for a mode change
            <>
              {robotMode === 'P' && (
                <button 
                  className="mode-button"
                  onClick={() => handleModeChange('S')}
                >
                  Set to Standby
                </button>
              )}
              {robotMode === 'S' && (
                <div className="mode-buttons">
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
                </div>
              )}
              {robotMode === 'A' && (
                <button 
                  className="mode-button"
                  onClick={() => handleModeChange('S')}
                >
                  Set to Standby
                </button>
              )}
            </>
          )}
        </div>

        <div className="control-section">
          <div className="connection-grid">
            <button 
              onClick={serialPort ? disconnectControl : connectControl}
              className={serialPort ? 'active' : ''}
            >
              {serialPort ? 'Disconnect' : 'Connect Control'}
            </button>
            <button 
              onClick={sshProcess.ops ? disconnectSSH : connectSSH}
              disabled={false}
              className={sshProcess.ops ? 'active' : ''}
            >
              {sshProcess.ops ? 'Disconnect' : 'Connect'} Telemetry
            </button>
          </div>

          <div className="status-panel">
            <h3>Connection Status</h3>
            <div className="status-item">
              <span className="status-label">Control:</span>
              <span className={`status-value ${serialPort ? 'connected' : 'disconnected'}`}>
                {serialPort ? 'Connected' : 'Disconnected'}
              </span>
            </div>
            <div className="status-item">
              <span className="status-label">Telemetry:</span>
              <span className={`status-value ${sshProcess.ops ? 'connected' : 'disconnected'}`}>
                {sshProcess.ops ? 'Connected' : 'Disconnected'}
              </span>
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

        <div className="debug-messages">
          <h3>Debug Messages</h3>
          <div className="messages-container">
            {debugMessages.map((msg, index) => (
              <div key={index} className="debug-message">
                {msg}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
