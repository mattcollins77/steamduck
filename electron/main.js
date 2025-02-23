const { app, BrowserWindow, ipcMain } = require('electron');
const { spawn } = require('child_process');
const path = require('path');

// Determine if we're in development mode
const isDev = !app.isPackaged;
console.log('App is in development mode:', isDev);

// Enable WebUSB API
app.commandLine.appendSwitch('enable-experimental-web-platform-features');

// Enable Web Serial API
app.commandLine.appendSwitch('enable-web-serial');

function createWindow() {
  const win = new BrowserWindow({
    width: 1280,
    height: 800,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      preload: path.join(__dirname, 'preload.js'),
      webSecurity: false, // Required for loading local files
      experimentalFeatures: true,
      serial: true,
      webusb: true
    }
  });

  // Handle resource path requests
  ipcMain.handle('get-resources-path', () => {
    // In production, use the current directory + resources
    const resourcePath = isDev 
      ? '' 
      : path.join(process.cwd(), 'resources');
    
    console.log('Resource path requested:', resourcePath);
    console.log('App path:', app.getAppPath());
    console.log('__dirname:', __dirname);
    console.log('process.cwd():', process.cwd());
    console.log('Is app packaged:', !isDev);
    return resourcePath;
  });

  ipcMain.handle('is-dev', () => {
    console.log('isDev status requested:', isDev);
    return isDev;
  });

  let currentSSHProcess = null;

  // SSH connection handler
  ipcMain.handle('start-ssh', async (event, user, command) => {
    try {
      if (currentSSHProcess) {
        currentSSHProcess.kill();
      }

      currentSSHProcess = spawn('ssh', [user, command]);
      
      currentSSHProcess.stdout.on('data', (data) => {
        if (!event.sender.isDestroyed()) {
          event.sender.send('ssh-data', data.toString());
        }
      });

      currentSSHProcess.stderr.on('data', (data) => {
        if (!event.sender.isDestroyed()) {
          event.sender.send('ssh-error', data.toString());
        }
      });

      currentSSHProcess.on('close', (code) => {
        if (!event.sender.isDestroyed()) {
          event.sender.send('ssh-close', code);
        }
        currentSSHProcess = null;
      });

      return { success: true };
    } catch (error) {
      console.error('SSH connection error:', error);
      return { success: false, error: error.message };
    }
  });

  ipcMain.handle('stop-ssh', async () => {
    try {
      if (currentSSHProcess) {
        currentSSHProcess.kill();
        currentSSHProcess = null;
      }
      return { success: true };
    } catch (error) {
      console.error('Error stopping SSH:', error);
      return { success: false, error: error.message };
    }
  });

  // Handle serial permission requests
  win.webContents.session.on('select-serial-port', (event, portList, webContents, callback) => {
    if (portList && portList.length > 0) {
      callback(portList[0].portId);
    } else {
      callback('');
    }
  });

  win.webContents.session.setPermissionCheckHandler((webContents, permission) => {
    return permission === 'serial';
  });

  win.webContents.session.setDevicePermissionHandler((details) => {
    return details.deviceType === 'serial';
  });

  // In development, load from Vite dev server
  if (isDev) {
    win.loadURL('http://localhost:5173');
    win.webContents.openDevTools();
  } else {
    // In production, load from local files
    win.loadFile(path.join(__dirname, '../dist/index.html'));
  }
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
