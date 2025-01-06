import "./index.css";
import * as THREE from "three";
import URDFLoader from "urdf-loader";
const { ipcRenderer } = require("electron");
const path = require("path");
let port;
let reader;
let writer;
let serialConnected = false;
const deviceStatus = document.getElementById("device-status");
const buttonPressed = document.getElementById("button-pressed");
const connectButton = document.getElementById("connect-button");
const serialOutput = document.getElementById("serial-output");
const MOTOR_COUNT = 14; // Defined motor count
const screenButtonStates = new Array(8).fill(false); // Track screen button states
const DEADZONE = 0.1; // Deadzone for joystick inputs

console.log(
  '👋 This message is being logged by "renderer.js", included via Vite'
);

// Scene, camera, and renderer setup
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000
);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(400, 400);

// Attach the renderer to the div
document.getElementById("scene-container").appendChild(renderer.domElement);

// Add a simple light to the scene
const light = new THREE.DirectionalLight(0xffffff, 1);
light.position.set(1, 1, 1).normalize();
scene.add(light);
ipcRenderer
  .invoke("get-resource-path", "go_bdx/go_bdx.urdf")
  .then((urdfPath) => {
    console.log("Resolved URDF Path:", urdfPath);
  });
// Resolve the URDF file path
ipcRenderer
  .invoke("get-resource-path", "go_bdx/go_bdx.urdf")
  .then((urdfPath) => {
    const loader = new URDFLoader();
    loader.load(urdfPath, (robot) => {
      robot.rotation.x = -90; // Adjust rotation if needed
      robot.rotation.y = 0; // Adjust rotation if needed
      robot.rotation.z = -1; // Adjust rotation if needed

      scene.add(robot);
      console.log("URDF Loaded:", robot);
    });
  })
  .catch((err) => {
    console.error("Failed to load URDF file:", err);
  });

// Set camera position
camera.position.set(0, 0, 5);
camera.position.z = 0.5;
camera.position.y = 0.31;

// Animate and render the scene
function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}
animate();

async function initSerialConnection() {
  if (!serialConnected) {
    const filters = [{ usbVendorId: 4292, usbProductId: 60000 }]; // ranger
    //const filters = [{ usbVendorId: 5824, usbProductId: 1155 }]; //teensy
    try {
      port = await navigator.serial.requestPort({ filters });
      const portInfo = port.getInfo();

      await port.open({ baudRate: 115200 });
      console.log("Port opened successfully:", port);

      reader = port.readable.getReader();
      writer = port.writable.getWriter();
      serialConnected = true;
      deviceStatus.textContent = "Connected";

      readSerialData();
    } catch (ex) {
      console.error("Error:", ex);
      deviceStatus.textContent = "Disconnected";
    }
  }
}

async function readSerialData() {
  try {
    let buffer = [];
    while (true) {
      const { value, done } = await reader.read();
      if (done) {
        console.log("Stream closed.");
        break;
      }
      if (value) {
        const data = Array.from(new Uint8Array(value));
        buffer = buffer.concat(data);

        // Process telemetry when a complete packet is received
        while (buffer.length >= 44) {
          // MOTOR_PACKET_SIZE
          const packet = buffer.slice(0, 44);
          buffer = buffer.slice(44);

          decodeTelemetry(packet);
        }
      }
    }
  } catch (err) {
    console.error("Error reading serial data:", err);
  } finally {
    reader.releaseLock();
  }
}

function decodeTelemetry(data) {
  if (data[0] !== 0xaa || data[data.length - 1] !== 0xbb) {
    console.error("Invalid telemetry packet: Missing HEADER or END_MARKER");
    return;
  }

  const checksum = data[data.length - 2];
  let calculatedChecksum = 0;
  for (let i = 0; i < data.length - 2; i++) {
    calculatedChecksum ^= data[i];
  }
  calculatedChecksum ^= 0x55; // SALT

  if (checksum !== calculatedChecksum) {
    console.error("Telemetry checksum mismatch");
    return;
  }

  // Display motor telemetry
  serialOutput.innerHTML = ""; // Clear previous output
  for (let i = 0; i < MOTOR_COUNT; i++) {
    const tempIndex = 1 + i * 3;
    const angleIndex = tempIndex + 1;
    const temperature = data[tempIndex];
    const angle = (data[angleIndex] << 8) | data[angleIndex + 1];

    const motorInfo = document.createElement("div");
    motorInfo.textContent = `Motor ${
      i + 1
    }: Temperature = ${temperature}°C, Angle = ${angle}°`;
    serialOutput.appendChild(motorInfo);
  }
}

function createPacket(buttonStates, axisStates, screenButtonStates) {
  const HEADER = 0xaa;
  const END_MARKER = 0xbb; // End marker to indicate packet end
  const SALT = 0x55; // Ensures checksum differs from HEADER
  const joystickValues = axisStates.map((axis) => {
    return Math.abs(axis.value) > DEADZONE ? Math.round(axis.value * 127) : 0;
  });

  // Create 2-byte bitfield for 16 buttons
  const buttonBitfieldLow =
    buttonStates
      .slice(0, 8)
      .reduce(
        (acc, button, index) => acc | ((button.pressed ? 1 : 0) << index),
        0
      ) & 0x00ff; // Lower byte for buttons 1-8

  const buttonBitfieldHigh =
    buttonStates
      .slice(8, 16)
      .reduce(
        (acc, button, index) => acc | ((button.pressed ? 1 : 0) << index),
        0
      ) & 0x00ff; // Upper byte for buttons 9-16

  const analogButton7 = Math.round(buttonStates[6]?.value * 255) || 0;
  const analogButton8 = Math.round(buttonStates[7]?.value * 255) || 0;
  const screenButtonBits = screenButtonStates.reduce(
    (acc, state, index) => acc | (state << index),
    0
  );

  // Construct the packet
  const packetWithoutChecksum = new Uint8Array([
    HEADER,
    ...joystickValues,
    buttonBitfieldLow,
    buttonBitfieldHigh,
    analogButton7,
    analogButton8,
    screenButtonBits,
  ]);

  // Calculate checksum
  const checksum =
    packetWithoutChecksum.reduce((acc, byte) => acc ^ byte, 0) ^ SALT;

  // Add end marker
  const packet = new Uint8Array([
    ...packetWithoutChecksum,
    checksum,
    END_MARKER,
  ]);

  displayPacket(packet, buttonStates);
  console.log(
    "Button Bitfield Low:",
    buttonBitfieldLow.toString(2).padStart(8, "0")
  );
  console.log(
    "Button Bitfield High:",
    buttonBitfieldHigh.toString(2).padStart(8, "0")
  );

  return packet;
}

function displayPacket(packet, buttonStates) {
  const packetString = Array.from(packet)
    .map((byte) => byte.toString(16).padStart(2, "0"))
    .join(" ");
  const buttonStatus = buttonStates
    .map(
      (button, index) =>
        `Button ${index + 1}: ${button.pressed ? "Pressed" : "Released"}`
    )
    .join(" | ");
  buttonPressed.textContent = `Packet Sent: ${packetString} | ${buttonStatus}`;
}

let lastSendTime = 0;
const SEND_INTERVAL = 50; // 50ms interval

function pollGamepad() {
  const gamepads = navigator.getGamepads();
  if (!gamepads) return;

  const now = performance.now();
  if (now - lastSendTime >= SEND_INTERVAL) {
    for (const gamepad of gamepads) {
      if (gamepad) {
        const buttonStates = gamepad.buttons.map((button) => ({
          pressed: button.pressed,
          value: button.value,
        }));
        const axisStates = gamepad.axes.map((value) => ({ value }));

        if (serialConnected) {
          const packet = createPacket(
            buttonStates,
            axisStates,
            screenButtonStates
          );
          writer
            .write(packet)
            .catch((err) => console.error("Write error:", err));
        }
      }
    }
    lastSendTime = now;
  }

  requestAnimationFrame(pollGamepad);
}

function momentaryPressScreenButton(index) {
  screenButtonStates[index] = true;
  document
    .getElementById(`screen-btn-${index + 1}`)
    .classList.add("btn-primary");
  document
    .getElementById(`screen-btn-${index + 1}`)
    .classList.remove("btn-secondary");

  setTimeout(() => {
    screenButtonStates[index] = false;
    document
      .getElementById(`screen-btn-${index + 1}`)
      .classList.remove("btn-primary");
    document
      .getElementById(`screen-btn-${index + 1}`)
      .classList.add("btn-secondary");
  }, 100); // Reset after 100ms
}

// Add event listeners for screen buttons
for (let i = 0; i < 8; i++) {
  document
    .getElementById(`screen-btn-${i + 1}`)
    .addEventListener("mousedown", () => momentaryPressScreenButton(i));
}

connectButton.addEventListener("click", initSerialConnection);

window.addEventListener("gamepadconnected", () => {
  console.log("Gamepad connected");
  pollGamepad();
});

window.addEventListener("gamepaddisconnected", () => {
  console.log("Gamepad disconnected");
  deviceStatus.textContent = "Disconnected";
  buttonPressed.textContent = "Gamepad disconnected";
});
