import React, { useState, useEffect, useCallback, useRef } from 'react';
import RobotViewer from './components/RobotViewer';
import './App.css';

function App() {
  const [gamepadState, setGamepadState] = useState({
    axes: [0, 0, 0, 0],
    buttons: Array(16).fill({ pressed: false, value: 0 })
  });
  const [serialPort, setSerialPort] = useState(null);
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
  const [isTransmitting, setIsTransmitting] = useState(false);
  const transmitQueue = useRef([]);
  const lastTransmitTimeRef = useRef(0);
  const [sshProcess, setSshProcess] = useState(null);
  const [robotData, setRobotData] = useState(null);
  const [teensyMode, setTeensyMode] = useState('A');  // Start assuming mode A
  const [stickValues, setStickValues] = useState({
    leftX: 0, leftY: 0,
    rightX: 0, rightY: 0
  });
  const robotViewerRef = useRef(null);
  const lastStatusTimeRef = useRef(Date.now());

  const PACKET_START = 0xAA;
  const PACKET_END = 0x55;

  // Track when we get permission for ports
  useEffect(() => {
    if (serialPort) {
      console.log("Serial port connected");
      
      // Set up error handler
      serialPort.addEventListener('error', (event) => {
        console.error('Serial port error:', event);
        setSerialPort(null);
      });

      return () => {
        console.log("Cleaning up serial port");
        if (serialPort) {
          serialPort.close().catch(console.error);
        }
      };
    }
  }, [serialPort]);

  // Setup writer when port opens
  useEffect(() => {
    if (!serialPort) {
      setWriter(null);
      return;
    }

    const setupWriter = async () => {
      try {
        const newWriter = serialPort.writable.getWriter();
        setWriter(newWriter);
        console.log('Serial writer created');
      } catch (error) {
        console.error('Error creating writer:', error);
        setSerialPort(null);
      }
    };

    setupWriter();

    return () => {
      if (writer) {
        writer.releaseLock();
        setWriter(null);
      }
    };
  }, [serialPort]);

  // Process transmit queue
  useEffect(() => {
    if (!writer || !serialPort) return;

    const processQueue = async () => {
      if (isTransmitting || transmitQueue.current.length === 0) return;

      setIsTransmitting(true);
      try {
        const packet = transmitQueue.current.shift();
        await writer.write(packet);
      } catch (error) {
        console.error('Error writing to serial:', error);
        if (error.message.includes('closed')) {
          setSerialPort(null);
        }
      } finally {
        setIsTransmitting(false);
      }
    };

    const interval = setInterval(processQueue, 5);
    return () => clearInterval(interval);
  }, [writer, serialPort, isTransmitting]);

  // Serial port reading
  useEffect(() => {
    if (!serialPort) return;

    let reader;
    const statusBuffer = [];

    const processSerialData = async () => {
      try {
        reader = serialPort.readable.getReader();
        
        while (true) {
          const { value, done } = await reader.read();
          if (done) break;

          // Process each byte in the Uint8Array
          for (let i = 0; i < value.length; i++) {
            const byte = value[i];
            if (byte === 0xBB) { // Status packet start
              statusBuffer.length = 0;  // Clear buffer
              statusBuffer.push(byte);
            } else if (statusBuffer.length > 0) {
              statusBuffer.push(byte);
              if (statusBuffer.length === 7) { // Mode + 4 stick values + end byte
                if (statusBuffer[6] === 0x55) { // Valid status packet
                  const mode = String.fromCharCode(statusBuffer[1]);
                  lastStatusTimeRef.current = Date.now(); // Update last status time
                  setTeensyMode(mode);
                  
                  // Update stick values if pressed
                  setStickValues({
                    leftX: statusBuffer[2],
                    leftY: statusBuffer[3],
                    rightX: statusBuffer[4],
                    rightY: statusBuffer[5]
                  });
                  
                  console.log('Status received:', {
                    mode,
                    sticks: {
                      leftX: statusBuffer[2],
                      leftY: statusBuffer[3],
                      rightX: statusBuffer[4],
                      rightY: statusBuffer[5]
                    }
                  });
                }
                statusBuffer.length = 0;  // Clear buffer
              }
            }
          }
        }
      } catch (err) {
        console.error('Error reading serial:', err);
        setTeensyMode('Q');
      } finally {
        if (reader) {
          try {
            await reader.cancel();
            reader.releaseLock();
          } catch (err) {
            console.error('Error cleaning up reader:', err);
          }
        }
      }
    };

    processSerialData();

    return () => {
      if (reader) {
        reader.cancel();
      }
    };
  }, [serialPort]);

  // Add connection timeout check
  useEffect(() => {
    if (!serialPort) {
      setTeensyMode('Q');
      return;
    }

    const checkConnection = setInterval(() => {
      // If no status received for 2 seconds, consider disconnected
      if (Date.now() - lastStatusTimeRef.current > 2000) {
        setTeensyMode('Q');
      }
    }, 1000);

    return () => clearInterval(checkConnection);
  }, [serialPort]);

  // Transmit gamepad data
  useEffect(() => {
    if (!serialPort || !gamepadState) return;

    const now = performance.now();
    if (now - lastTransmitTimeRef.current < 50) return; // 20Hz rate limit
    lastTransmitTimeRef.current = now;

    // Create packet: START + data bytes + END
    const packet = new Uint8Array([
      PACKET_START,
      // Analog sticks (0-255)
      Math.round(((gamepadState.axes[0] + 1) / 2) * 255),  // Left X
      Math.round(((gamepadState.axes[1] + 1) / 2) * 255),  // Left Y
      Math.round(((gamepadState.axes[2] + 1) / 2) * 255),  // Right X
      Math.round(((gamepadState.axes[3] + 1) / 2) * 255),  // Right Y
      // Triggers (0-255)
      Math.round(gamepadState.buttons[6]?.value * 255),     // Left Trigger
      Math.round(gamepadState.buttons[7]?.value * 255),     // Right Trigger
      // D-Pad (as individual bits)
      ((gamepadState.buttons[12]?.pressed ? 1 : 0) << 0) | // Up
      ((gamepadState.buttons[13]?.pressed ? 1 : 0) << 1) | // Down
      ((gamepadState.buttons[14]?.pressed ? 1 : 0) << 2) | // Left
      ((gamepadState.buttons[15]?.pressed ? 1 : 0) << 3),  // Right
      // Face buttons and shoulders
      ((gamepadState.buttons[0]?.pressed ? 1 : 0) << 0) |  // A
      ((gamepadState.buttons[1]?.pressed ? 1 : 0) << 1) |  // B
      ((gamepadState.buttons[2]?.pressed ? 1 : 0) << 2) |  // X
      ((gamepadState.buttons[3]?.pressed ? 1 : 0) << 3) |  // Y
      ((gamepadState.buttons[4]?.pressed ? 1 : 0) << 4) |  // LB
      ((gamepadState.buttons[5]?.pressed ? 1 : 0) << 5) |  // RB
      ((gamepadState.buttons[8]?.pressed ? 1 : 0) << 6) |  // Back/Select
      ((gamepadState.buttons[9]?.pressed ? 1 : 0) << 7),   // Start
      // Stick clicks
      ((gamepadState.buttons[10]?.pressed ? 1 : 0) << 0) | // Left Stick
      ((gamepadState.buttons[11]?.pressed ? 1 : 0) << 1),  // Right Stick
      // On-screen buttons (10 bits)
      (onScreenButtons.slice(0, 8).map((b, i) => (b ? 1 : 0) << i).reduce((a, b) => a | b, 0)),
      (onScreenButtons.slice(8, 10).map((b, i) => (b ? 1 : 0) << i).reduce((a, b) => a | b, 0)),
      PACKET_END
    ]);

    // Add to transmit queue instead of direct write
    transmitQueue.current.push(packet);
  }, [serialPort, gamepadState, onScreenButtons]);

  // Web Serial Connection
  const connectSerial = async () => {
    try {
      console.log("Requesting serial port...");
      
      // Filter for your specific XBee's FTDI chip
      const port = await navigator.serial.requestPort({
        filters: [
          { 
            usbVendorId: 0x0403,  // FTDI
            usbProductId: 0x6015   // Your XBee's FT231X
          }
        ]
      });

      // Log the detected device info
      const info = port.getInfo();
      console.log("Selected port info:", {
        usbVendorId: info.usbVendorId?.toString(16),
        usbProductId: info.usbProductId?.toString(16),
        manufacturer: info.manufacturer
      });
      
      await port.open({ 
        baudRate: 57600,
        dataBits: 8,
        stopBits: 1,
        parity: "none",
        flowControl: "none"
      });
      setSerialPort(port);
      console.log("Serial port opened");
    } catch (error) {
      console.error('Error opening serial port:', error);
    }
  };

  // Send test packet
  const sendTestPacket = useCallback(async () => {
    if (!writer) return;

    const testPacket = new Uint8Array(25); // Match PACKET_SIZE in Teensy code
    testPacket[0] = 0x0F;  // Start byte
    
    // Center position for sticks
    for (let i = 1; i < 5; i++) {
      testPacket[i] = 0x80;
    }
    
    // Zero for triggers and buttons
    for (let i = 5; i < 25; i++) {
      testPacket[i] = 0x00;
    }
    
    console.log('Sending test packet:', Array.from(testPacket).map(b => b.toString(16).padStart(2, '0')).join(' '));
    
    try {
      await writer.write(testPacket);
      console.log('Test packet sent successfully');
    } catch (error) {
      console.error('Error sending test packet:', error);
    }
  }, [writer]);

  // Send test packet when writer is ready
  useEffect(() => {
    if (writer) {
      sendTestPacket();
    }
  }, [writer, sendTestPacket]);

  // Transmit Gamepad Data via XBee API mode
  const transmitGamepadData = useCallback(() => {
    if (!serialPort || !gamepadState.axes || !gamepadState.buttons) {
      return;
    }

    const now = Date.now();
    if (now - lastTransmitTimeRef.current < 33) { // Enforce 30Hz max rate
      return;
    }
    lastTransmitTimeRef.current = now;

    // Create packet: START + data bytes + END
    const packet = new Uint8Array([
      PACKET_START,
      // Analog sticks (0-255)
      Math.round(((gamepadState.axes[0] + 1) / 2) * 255),  // Left X
      Math.round(((gamepadState.axes[1] + 1) / 2) * 255),  // Left Y
      Math.round(((gamepadState.axes[2] + 1) / 2) * 255),  // Right X
      Math.round(((gamepadState.axes[3] + 1) / 2) * 255),  // Right Y
      // Triggers (0-255)
      Math.round(gamepadState.buttons[6]?.value * 255),     // Left Trigger
      Math.round(gamepadState.buttons[7]?.value * 255),     // Right Trigger
      // D-Pad (as individual bits)
      ((gamepadState.buttons[12]?.pressed ? 1 : 0) << 0) | // Up
      ((gamepadState.buttons[13]?.pressed ? 1 : 0) << 1) | // Down
      ((gamepadState.buttons[14]?.pressed ? 1 : 0) << 2) | // Left
      ((gamepadState.buttons[15]?.pressed ? 1 : 0) << 3),  // Right
      // Face buttons and shoulders
      ((gamepadState.buttons[0]?.pressed ? 1 : 0) << 0) |  // A
      ((gamepadState.buttons[1]?.pressed ? 1 : 0) << 1) |  // B
      ((gamepadState.buttons[2]?.pressed ? 1 : 0) << 2) |  // X
      ((gamepadState.buttons[3]?.pressed ? 1 : 0) << 3) |  // Y
      ((gamepadState.buttons[4]?.pressed ? 1 : 0) << 4) |  // LB
      ((gamepadState.buttons[5]?.pressed ? 1 : 0) << 5) |  // RB
      ((gamepadState.buttons[8]?.pressed ? 1 : 0) << 6) |  // Back/Select
      ((gamepadState.buttons[9]?.pressed ? 1 : 0) << 7),   // Start
      // Stick clicks
      ((gamepadState.buttons[10]?.pressed ? 1 : 0) << 0) | // Left Stick
      ((gamepadState.buttons[11]?.pressed ? 1 : 0) << 1),  // Right Stick
      // On-screen buttons (10 bits)
      (onScreenButtons.slice(0, 8).map((b, i) => (b ? 1 : 0) << i).reduce((a, b) => a | b, 0)),
      (onScreenButtons.slice(8, 10).map((b, i) => (b ? 1 : 0) << i).reduce((a, b) => a | b, 0)),
      PACKET_END
    ]);

    // Add to transmit queue
    transmitQueue.current.push(packet);
  }, [serialPort, gamepadState]);

  // Rate-limited transmission
  useEffect(() => {
    if (!serialPort) return;
    
    const transmitTimer = setInterval(transmitGamepadData, 33);
    return () => clearInterval(transmitTimer);
  }, [serialPort, transmitGamepadData]);

  // Gamepad polling interval (30Hz)
  useEffect(() => {
    const pollInterval = setInterval(() => {
      const gamepads = navigator.getGamepads();
      const gamepad = gamepads[0];
      
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
    }, 33); // ~30Hz

    return () => clearInterval(pollInterval);
  }, []);

  // Update robot position in viewer
  useEffect(() => {
    if (gamepadState.axes && gamepadState.axes.length >= 4) {
      robotViewerRef.current?.updatePosition(gamepadState.axes[0], gamepadState.axes[1]);
    }
  }, [gamepadState]);

  // Handle parsed data from robot
  const handleRobotData = useCallback((data) => {
    try {
      const parsedData = JSON.parse(data);
      
      // Update robot visualization with motor data
      if (parsedData.motors) {
        robotViewerRef.current?.updateJoints(parsedData.motors);
      }
      
      // Update robot orientation with IMU data
      if (parsedData.sensors) {
        const imuSensor = parsedData.sensors.find(s => s.name === "imu");
        if (imuSensor) {
          robotViewerRef.current?.updateOrientation(imuSensor);
        }
      }
    } catch (error) {
      console.error('Error parsing robot data:', error);
    }
  }, []);

  // Process received serial data
  const processSerialData = useCallback((data) => {
    try {
      const parsedData = JSON.parse(data);
      
      // Update robot visualization with motor data
      if (parsedData.motors) {
        robotViewerRef.current?.updateJoints(parsedData.motors);
      }
      
      // Update robot orientation with IMU data
      if (parsedData.sensors) {
        const imuSensor = parsedData.sensors.find(s => s.name === "imu");
        if (imuSensor) {
          robotViewerRef.current?.updateOrientation(imuSensor);
        }
      }
    } catch (error) {
      console.error("Error processing serial data:", error);
    }
  }, []);

  // SSH Connection for robot data
  const connectSSH = useCallback(async () => {
    if (!window.electron) {
      console.error('Electron API not available');
      return;
    }

    try {
      setSshProcess(true); // Use as a connection flag
      await window.electron.startSSH('matt@192.168.1.50', 'cat /dev/puddleduck_ops');
    } catch (error) {
      // Log the error message, not the full error object
      console.error("Error connecting via SSH:", error.message || 'Unknown error occurred');
      setSshProcess(false);
    }
  }, []);

  // Set up SSH event listeners
  useEffect(() => {
    if (!window.electron) return;

    const dataHandler = (event, data) => {
      try {
        // Split the data by newlines and process each line separately
        const lines = data.split('\n').filter(line => line.trim());
        
        for (const line of lines) {
          try {
            const parsedData = JSON.parse(line);
            setRobotData(parsedData);
            
            // Update robot visualization with motor data
            if (parsedData.motors) {
              robotViewerRef.current?.updateJoints(parsedData.motors);
            }
            
            // Update robot orientation with IMU data
            if (parsedData.sensors) {
              const imuSensor = parsedData.sensors.find(s => s.name === "imu");
              if (imuSensor) {
                robotViewerRef.current?.updateOrientation(imuSensor);
              }
            }
          } catch (lineError) {
            // Log the problematic line for debugging
            console.debug("Failed to parse line:", line);
            console.debug("Parse error:", lineError);
          }
        }
      } catch (error) {
        console.error("Error processing SSH data:", error);
      }
    };

    const errorHandler = (event, data) => {
      console.error('SSH Error:', data);
    };

    const closeHandler = (event, code) => {
      console.log('SSH connection closed with code:', code);
      setSshProcess(false);
    };

    window.electron.onSSHData(dataHandler);
    window.electron.onSSHError(errorHandler);
    window.electron.onSSHClose(closeHandler);

    return () => {
      // Cleanup will be handled by Electron
    };
  }, []);

  return (
    <div className="layout-container">
      <div className="side-panel left-panel">
        <div className="control-section">
          <h2>Controls</h2>
          <div className="button-grid" style={{ 
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '10px'
          }}>
            {onScreenButtons.map((pressed, index) => (
              <button
                key={index}
                onMouseDown={() => {
                  const newButtons = [...onScreenButtons];
                  newButtons[index] = true;
                  setOnScreenButtons(newButtons);
                }}
                onMouseUp={() => {
                  const newButtons = [...onScreenButtons];
                  newButtons[index] = false;
                  setOnScreenButtons(newButtons);
                }}
                onMouseLeave={() => {
                  const newButtons = [...onScreenButtons];
                  newButtons[index] = false;
                  setOnScreenButtons(newButtons);
                }}
                style={{
                  padding: '20px',
                  backgroundColor: pressed ? '#e74c3c' : '#34495e',
                  color: 'white',
                  border: 'none',
                  borderRadius: '8px',
                  cursor: 'pointer',
                  fontSize: '1.1em',
                  fontWeight: 'bold',
                  boxShadow: pressed ? 'inset 0 2px 4px rgba(0,0,0,0.2)' : '0 2px 4px rgba(0,0,0,0.2)',
                  transition: 'all 0.1s ease'
                }}
              >
                Button {index + 1}
              </button>
            ))}
          </div>
         
        </div>
       
      </div>
      <div className="flex-1 h-full">
        <RobotViewer ref={robotViewerRef} />
      </div>
      <div className="side-panel right-panel">
        <div className="status-section">
          <h2>Status</h2>
          <div>
            <h2>Connection Status</h2>
            <p style={{
              color: teensyMode === 'Q' ? '#e74c3c' : '#2ecc71'
            }}>
              {teensyMode === 'Q' ? 'Disconnected' : 'Connected'}
            </p>
            <p>Current Mode: {teensyMode}</p>
            {(stickValues.leftX || stickValues.leftY) > 0 && (
              <p>Left Stick: X={Math.round((stickValues.leftX / 255) * 100)}% Y={Math.round((stickValues.leftY / 255) * 100)}%</p>
            )}
            {(stickValues.rightX || stickValues.rightY) > 0 && (
              <p>Right Stick: X={Math.round((stickValues.rightX / 255) * 100)}% Y={Math.round((stickValues.rightY / 255) * 100)}%</p>
            )}
          </div>
          {robotData && (
            <div style={{ color: '#fff' }}>
              Robot Connected
            </div>
          )}
        </div>
        <div className="controls">
            <button 
              onClick={serialPort ? () => {
                if (serialPort) {
                  serialPort.close();
                  setSerialPort(null);
                }
              } : connectSerial}
              style={{
                padding: '12px 20px',
                backgroundColor: serialPort ? '#e74c3c' : '#2ecc71',
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                cursor: 'pointer',
                fontSize: '1.1em',
                fontWeight: 'bold',
                boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
                transition: 'background-color 0.3s ease'
              }}
            >
              {serialPort ? 'Disconnect' : 'Connect Serial'}
            </button>
            <button 
              onClick={connectSSH} 
              disabled={!!sshProcess}
              style={{
                padding: '12px 20px',
                backgroundColor: sshProcess ? '#e74c3c' : '#2ecc71',
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                cursor: 'pointer',
                fontSize: '1.1em',
                fontWeight: 'bold',
                boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
                transition: 'background-color 0.3s ease'
              }}
            >
              {sshProcess ? 'Disconnect' : 'Connect Robot Data'}
            </button>
          </div>
          <div style={{
          backgroundColor: '#34495e',
          padding: '15px',
          borderRadius: '8px',
          fontSize: '0.9em',
          display: 'flex',
          flexDirection: 'column',
          gap: '10px'
        }}>
          <div style={{ display: 'grid', gridTemplateColumns: '80px 1fr', gap: '5px' }}>
            <span style={{ color: '#bdc3c7' }}>Left Stick:</span>
            <span>X: {gamepadState.axes[0]?.toFixed(2)} Y: {gamepadState.axes[1]?.toFixed(2)}</span>
            
            <span style={{ color: '#bdc3c7' }}>Right Stick:</span>
            <span>X: {gamepadState.axes[2]?.toFixed(2)} Y: {gamepadState.axes[3]?.toFixed(2)}</span>
            
            <span style={{ color: '#bdc3c7' }}>Triggers:</span>
            <span>L: {gamepadState.buttons[6]?.value.toFixed(2)} R: {gamepadState.buttons[7]?.value.toFixed(2)}</span>
          </div>

          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '5px',
            marginTop: '10px'
          }}>
            {['A', 'B', 'X', 'Y', 'LB', 'RB'].map((btn, i) => (
              <div key={btn} style={{
                padding: '5px',
                backgroundColor: gamepadState.buttons[i]?.pressed ? '#2ecc71' : '#2c3e50',
                borderRadius: '4px',
                textAlign: 'center'
              }}>
                {btn}
              </div>
            ))}
          </div>

          <h3 style={{ margin: '10px 0 5px 0', color: '#4a90e2', fontSize: '1em' }}>Serial Data</h3>
          <div style={{
            backgroundColor: '#2c3e50',
            padding: '10px',
            borderRadius: '4px',
            fontSize: '0.9em'
          }}>
            <div style={{ marginBottom: '5px' }}>
              <span style={{ color: '#bdc3c7' }}>Sticks (Raw):</span>
              <div style={{ marginLeft: '10px' }}>
                Left: ({gamepadState.axes[0]?.toFixed(2) || '0.00'}, {gamepadState.axes[1]?.toFixed(2) || '0.00'})
                Right: ({gamepadState.axes[2]?.toFixed(2) || '0.00'}, {gamepadState.axes[3]?.toFixed(2) || '0.00'})
              </div>
            </div>
            <div style={{ marginBottom: '5px' }}>
              <span style={{ color: '#bdc3c7' }}>Triggers (Raw):</span>
              <div style={{ marginLeft: '10px' }}>
                L: {gamepadState.buttons[6]?.value?.toFixed(2) || '0.00'} R: {gamepadState.buttons[7]?.value?.toFixed(2) || '0.00'}
              </div>
            </div>
            <div style={{ marginBottom: '5px' }}>
              <span style={{ color: '#bdc3c7' }}>Buttons:</span>
              <div style={{ marginLeft: '10px', fontFamily: 'monospace' }}>
                {['A', 'B', 'X', 'Y', 'LB', 'RB'].map((btn, i) => (
                  <span key={btn} style={{ marginRight: '10px' }}>
                    {btn}: {gamepadState.buttons[i]?.pressed ? '1' : '0'}
                  </span>
                ))}
              </div>
            </div>
            <div style={{ marginBottom: '5px' }}>
              <span style={{ color: '#bdc3c7' }}>Serial Data (0-255):</span>
              <div style={{ marginLeft: '10px', fontFamily: 'monospace' }}>
                Sticks: {lastSentData.sticks.map(v => Math.round(((v + 1) / 2) * 255)).join(', ')}
                <br/>
                Triggers: {lastSentData.triggers.map(v => Math.round(v * 255)).join(', ')}
              </div>
            </div>
            <div style={{ marginBottom: '5px' }}>
              <span style={{ color: '#bdc3c7' }}>Serial Packet Format:</span>
              <div style={{ marginLeft: '10px', fontFamily: 'monospace', fontSize: '0.9em' }}>
                <div>Start: 0x{PACKET_START.toString(16).padStart(2, '0')}</div>
                <div>Left Stick: X={Math.round(((gamepadState.axes[0] || 0) + 1) / 2 * 127.5)} Y={Math.round(((gamepadState.axes[1] || 0) + 1) / 2 * 127.5)}</div>
                <div>Right Stick: X={Math.round(((gamepadState.axes[2] || 0) + 1) / 2 * 127.5)} Y={Math.round(((gamepadState.axes[3] || 0) + 1) / 2 * 127.5)}</div>
                <div>Triggers: L={Math.round((gamepadState.buttons[6]?.value || 0) * 255)} R={Math.round((gamepadState.buttons[7]?.value || 0) * 255)}</div>
                <div>Button Byte: {
                  Array(6).fill(0)
                    .map((_, i) => gamepadState.buttons[i]?.pressed ? '1' : '0')
                    .join('')
                } ({['A','B','X','Y','LB','RB'].filter((_, i) => gamepadState.buttons[i]?.pressed).join(',')})</div>
                <div>Stick Clicks: {
                  Array(2).fill(0)
                    .map((_, i) => gamepadState.buttons[10 + i]?.pressed ? '1' : '0')
                    .join('')
                } ({['Left Stick','Right Stick'].filter((_, i) => gamepadState.buttons[10 + i]?.pressed).join(',')})</div>
                <div>On-Screen: {
                  onScreenButtons
                    .map(b => b ? '1' : '0')
                    .join('')
                }</div>
                <div>End: 0x{PACKET_END.toString(16).padStart(2, '0')}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
