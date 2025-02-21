# SteamDuck Robot Controller

A Steam Deck optimized controller application for the GoBDX robot, featuring a 3D URDF viewer, gamepad controls, and serial communication interface.

## Features

- 🎮 Full Steam Deck gamepad support
- 🤖 Real-time 3D URDF robot visualization
- 🔌 Serial communication for robot control
- 📊 Live gamepad data visualization
- 🖥️ Retro-styled UI optimized for Steam Deck's display
- ⚡ Built with Electron and React

## Installation on Steam Deck

### Prerequisites
1. Enter Desktop Mode on your Steam Deck
2. Ensure you have a USB-C hub with serial capability (if using wired connection)

### Installation Steps

1. Download the latest `.AppImage` file from the releases page
2. Make the AppImage executable:
   ```bash
   chmod +x steamduck-*.AppImage
   ```
3. Run the application:
   ```bash
   ./steamduck-*.AppImage
   ```

### Adding to Steam

To launch from Gaming Mode:

1. In Desktop Mode, open Steam
2. Click "Add a Game" in the bottom left
3. Select "Add a Non-Steam Game"
4. Browse and select the SteamDuck AppImage
5. Return to Gaming Mode
6. The app will appear in your library under "Non-Steam Games"

## Usage

1. **Connecting to Robot**
   - Click "Connect Serial" to establish serial connection
   - Click "Connect Robot Data" to start SSH connection

2. **Controls**
   - Left/Right sticks: Robot movement
   - Triggers (L2/R2): Additional controls
   - Face buttons (A,B,X,Y): Special functions
   - On-screen buttons: Additional robot functions

3. **3D Viewer**
   - Shows real-time robot state
   - Auto-updates with robot movement
   - Camera can be adjusted for better viewing angles

4. **Status Panel**
   - Shows all gamepad inputs
   - Displays connection status
   - Shows serial data being sent

## Development

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn
- Git

### Setup
```bash
# Clone the repository
git clone https://github.com/mattcollins77/steamduck.git

# Install dependencies
cd steamduck
npm install

# Run in development mode
npm run electron:dev   

# Build for production
npm run make -- --linux --x64
rsync -avc ./dist_electron/linux-unpacked/ deck@steamdeck:./Documents/steamduck

### Project Structure
- `/src` - React application source
- `/electron` - Electron main process code
- `/public` - Static assets including URDF files
- `/teensy` - Arduino code for robot receiver

## Troubleshooting
