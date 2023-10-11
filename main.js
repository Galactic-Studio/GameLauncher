const { app, BrowserWindow } = require('electron')


const createWindow = () => {
  const win = new BrowserWindow({
    width: 300,
    height: 400,
    autoHideMenuBar: true,
    frame: false,
    resizable: false,
    maximizable: false,
    minimizable: false,
  })

  win.loadFile('./app/pages/loading.html')
}

app.whenReady().then(() => {
  createWindow()
})

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
})
