# SteamDuck Control Interface

A control interface for the SteamDuck robot using the Steam Deck's gamepad controls. Built with Electron and React.

## Features

- Steam Deck gamepad integration
- Real-time robot visualization using URDF
- SSH-based telemetry and debug data streaming
- Serial communication with Teensy for robot control
- Mode switching (Perch, Standby, Active)
- Motor testing interface
- Debug output display

## Prerequisites

- Node.js (v18 or higher)
- npm (v9 or higher)
- Arduino IDE or PlatformIO for Teensy programming
- Teensy 4.1 board support
- XBee module (for wireless communication)

## Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/steamduck.git
cd steamduck
```

2. Install dependencies:
```bash
npm install
```
then run on dev with
 npm run electron:dev

3. Build the Electron app:
```bash
npm run make -- --linux --x64 
```

## Building and Installing on Steam Deck

1. Build the application package:
```bash
npm run package
```

2. Copy the package to your Steam Deck:
```bash
rsync -avc ./dist_electron/linux-unpacked/ deck@steamdeck:./Documents/steamduck
```

3. On the Steam Deck, make the application executable:
```bash
chmod +x /home/deck/Applications/steamduck/steamduck
```

4. Add to Steam:
   - In Desktop Mode, open Steam
   - Click "Add a Game" > "Add a Non-Steam Game"
   - Browse to `/home/deck/Applications/steamduck/steamduck`
   - Set launch options to: `gamescope -W 1280 -H 800 -w 1280 -h 800 %command%`

## Teensy Setup

1. Install required libraries:
   - Arduino IDE: Install Teensyduino
   - Install any additional required libraries

2. Upload the code:
   - Open `teensy/steam_duck_receiver/steam_duck_receiver.ino`
   - Select Teensy 4.1 board
   - Set CPU Speed to 600 MHz
   - Upload the code

3. XBee Configuration:
   - Configure XBee modules in AP mode with matching PAN IDs
   - Set baud rate to 57600
   - Connect to Teensy pins:
     - XBee DOUT -> Teensy RX2 (pin 15)
     - XBee DIN -> Teensy TX2 (pin 14)

## Communication Protocol

### Controller to Robot Packet Structure (16 bytes)

| Byte | Description | Values |
|------|-------------|--------|
| 0    | Start Byte | 0xAA |
| 1    | Left Stick X | 0-255 (centered at 128) |
| 2    | Left Stick Y | 0-255 (centered at 128) |
| 3    | Right Stick X | 0-255 (centered at 128) |
| 4    | Right Stick Y | 0-255 (centered at 128) |
| 5    | Left Trigger | 0-255 |
| 6    | Right Trigger | 0-255 |
| 7    | D-Pad (bits) | Up(0), Down(1), Left(2), Right(3) |
| 8    | Face Buttons (bits) | A(0), B(1), X(2), Y(3), LB(4), RB(5), Back(6), Start(7) |
| 9    | Stick Clicks (bits) | Left(0), Right(1) |
| 10   | On-screen Buttons 1 | Buttons 1-8 as bits |
| 11   | On-screen Buttons 2 | Buttons 9-10 as bits |
| 12   | Motor Enable | 0=off, 1=on |
| 13   | Selected Joint | 0-15 |
| 14   | Joint Position | 0-255 (centered at 128) |
| 15   | Mode | 'P'=Perch, 'S'=Standby, 'A'=Active, 'Q'=Disconnected |

### Robot to Controller JSON Format

The robot sends JSON status messages every 100ms:
```json
{
  "mode": "P",
  "requested_mode": "S",
  "motors": [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
  "sensors": [{
    "name": "imu",
    "roll": 0,
    "pitch": 0,
    "yaw": 0
  }]
}
```

## Mode Behavior

- **Perch (P)**: All joints relaxed, robot should be on stand
- **Standby (S)**: Joints energized, ready for commands
- **Active (A)**: Full control enabled
- **Disconnected (Q)**: No communication, joints relaxed

Mode changes have a 1-second delay for safety. The robot will acknowledge the requested mode change immediately but wait 1 second before applying it.

## License

MIT License - see LICENSE file for details
