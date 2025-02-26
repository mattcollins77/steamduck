# SteamDuck Control Interface

A control interface for the SteamDuck robot using the Steam Deck's gamepad controls. Built with Electron and React.

## Features

- Steam Deck gamepad integration
- Real-time robot visualization using URDF
- SSH-based telemetry and debug data streaming
- Serial communication using XBee modules for wireless communication with the Teensy or Orin Nano for robot control
- Mode switching (Perch, Standby, Active)
- Motor testing interface
- Debug output display

## Prerequisites

- Node.js (v18 or higher)
- npm (v9 or higher)
- Arduino IDE or PlatformIO for Teensy programming
- Teensy 4.1 board support
- XBee S2 modules (2x for wireless communication)
- Conda (for Orin Nano setup)

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
then run on dev machine with
 npm run electron:dev

3. Build the Electron app:
```bash
npm run make -- --linux --x64 
```




2. Copy the package to your Steam Deck:
```bash
rsync -avc ./dist_electron/linux-unpacked/ deck@steamdeck:./Documents/steamduck
```



4. Add to Steam:
   - In Desktop Mode, open Steam
   - Click "Add a Game" > "Add a Non-Steam Game"
   - Browse to `/home/deck/Applications/steamduck/steamduck`
   - Set launch options to: `gamescope -W 1280 -H 800 -w 1280 -h 800 %command%`

## Teensy Setup


## Orin Nano Setup

1. Create and activate Conda environment:
```bash
conda create -n steamduck python=3.10
conda activate steamduck
```

2. Install required packages:
```bash
conda install pyserial
```

3. Configure XBee:
   - Connect XBee to Orin Nano via USB
   - Note the serial port (usually `/dev/ttyUSB0` or similar)
   - Update port in `orin/xbee_receiver.py` if needed

4. Run the receiver:
```bash
cd orin
chmod +x xbee_receiver.py
./xbee_receiver.py
```

The receiver will:
- Display incoming gamepad data
- Process mode change requests
- Send mode status back to the controller
- Show packet statistics and timing

## Communication Protocol

### Controller to Robot Packet Structure (19 bytes)

| Byte | Description | Values |
|------|-------------|--------|
| 0    | Start Byte | 0xAA |
| 1    | Sequence Number | 0-255 |
| 2    | Left Stick X | 0-255 (centered at 128) |
| 3    | Left Stick Y | 0-255 (centered at 128) |
| 4    | Right Stick X | 0-255 (centered at 128) |
| 5    | Right Stick Y | 0-255 (centered at 128) |
| 6    | Left Trigger | 0-255 |
| 7    | Right Trigger | 0-255 |
| 8    | D-Pad (bits) | Up(0), Down(1), Left(2), Right(3) |
| 9    | Face Buttons (bits) | A(0), B(1), X(2), Y(3), LB(4), RB(5), Back(6), Start(7) |
| 10   | Stick Clicks (bits) | Left(0), Right(1) |
| 11   | On-screen Buttons 1 | Buttons 1-8 as bits |
| 12   | On-screen Buttons 2 | Buttons 9-10 as bits |
| 13   | Motor Enable | 0=off, 1=on |
| 14   | Selected Joint | 0-15 |
| 15   | Joint Position | 0-255 (centered at 128) |
| 16   | Mode | 'P'=Perch, 'S'=Standby, 'A'=Active |
| 17   | Checksum | XOR of bytes 1-16 |
| 18   | End Byte | 0x55 |

### Robot to Controller Response Packet (5 bytes)

The robot sends status packets every 100ms:

| Byte | Description | Values |
|------|-------------|--------|
| 0    | Start Byte | 0xBB |
| 1    | Current Mode | 'P'=Perch, 'S'=Standby, 'A'=Active |
| 2    | Status | Reserved for future use |
| 3    | Checksum | XOR of bytes 1-2 |
| 4    | End Byte | 0x66 |

## Mode Behavior

- **Perch (P)**: All joints relaxed, robot should be on stand
- **Standby (S)**: Joints energized, ready for commands
- **Active (A)**: Full control enabled
- **Disconnected (Q)**: No communication, joints relaxed



## License

