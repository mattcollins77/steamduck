const { contextBridge, ipcRenderer, app } = require('electron');

// Expose protected methods that allow the renderer process to use
// the ipcRenderer without exposing the entire object
contextBridge.exposeInMainWorld(
  'electron',
  {
    startSSH: async (user, command) => {
      try {
        const result = await ipcRenderer.invoke('start-ssh', user, command);
        if (!result.success) {
          throw new Error(result.error || 'Failed to start SSH connection');
        }
        return result;
      } catch (error) {
        throw { message: error.message || 'Unknown error occurred' };
      }
    },
    stopSSH: async () => {
      try {
        const result = await ipcRenderer.invoke('stop-ssh');
        if (!result.success) {
          throw new Error(result.error || 'Failed to stop SSH connection');
        }
        return result;
      } catch (error) {
        throw { message: error.message || 'Unknown error occurred' };
      }
    },
    onSSHData: (callback) => {
      const subscription = (_event, value) => callback(_event, value);
      ipcRenderer.on('ssh-data', subscription);
      return () => {
        ipcRenderer.removeListener('ssh-data', subscription);
      };
    },
    onSSHError: (callback) => {
      const subscription = (_event, value) => callback(_event, value);
      ipcRenderer.on('ssh-error', subscription);
      return () => {
        ipcRenderer.removeListener('ssh-error', subscription);
      };
    },
    onSSHClose: (callback) => {
      const subscription = (_event, value) => callback(_event, value);
      ipcRenderer.on('ssh-close', subscription);
      return () => {
        ipcRenderer.removeListener('ssh-close', subscription);
      };
    },
    // Add methods for resource paths
    getResourcesPath: async () => {
      const path = await ipcRenderer.invoke('get-resources-path');
      console.log('Preload: getResourcesPath returned:', path);
      return path;
    },
    isDev: async () => {
      const dev = await ipcRenderer.invoke('is-dev');
      console.log('Preload: isDev returned:', dev);
      return dev;
    }
  }
);
