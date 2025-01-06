import { app, BrowserWindow, ipcMain } from "electron";
import path from "node:path";
import started from "electron-squirrel-startup";

// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (started) {
  app.quit();
}

// Function to create the main browser window
const createWindow = () => {
  const mainWindow = new BrowserWindow({
    width: 1280,
    height: 800,
    webPreferences: {
      nodeIntegration: true, // Enable Node.js features
      contextIsolation: false, // Disable isolation for compatibility
      preload: path.join(__dirname, "preload.js"),
    },
  });
  mainWindow.webContents.session.on(
    "select-serial-port",
    (event, portList, webContents, callback) => {
      mainWindow.webContents.session.on("serial-port-added", (event, port) => {
        console.log("serial-port-added FIRED WITH", port);
      });

      mainWindow.webContents.session.on(
        "serial-port-removed",
        (event, port) => {
          console.log("serial-port-removed FIRED WITH", port);
        }
      );

      event.preventDefault();
      if (portList && portList.length > 0) {
        callback(portList[0].portId);
      } else {
        callback(""); // No matching devices
      }
    }
  );
  // Load the appropriate URL or file
  if (MAIN_WINDOW_VITE_DEV_SERVER_URL) {
    mainWindow.loadURL(MAIN_WINDOW_VITE_DEV_SERVER_URL);
  } else {
    mainWindow.loadFile(
      path.join(__dirname, `../renderer/${MAIN_WINDOW_VITE_NAME}/index.html`)
    );
  }

  // Open the DevTools (optional: comment out in production)
  mainWindow.webContents.openDevTools();
};

// Handle resource path resolution for packaged app
ipcMain.handle("get-resource-path", (event, resource) => {
  const isPackaged = app.isPackaged;
  const basePath = isPackaged
    ? path.join(process.resourcesPath, resource) // Path in packaged app
    : resource; // Path in dev environment
  return basePath;
});

// Event: App ready
app.whenReady().then(() => {
  createWindow();

  // Re-create a window if the dock icon is clicked (macOS behaviour)
  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

// Event: All windows closed
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

// Additional app-specific code can be added here
