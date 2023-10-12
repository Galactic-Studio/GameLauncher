const { app, BrowserWindow } = require('electron')
const path = require('node:path')
const core = require("./src/scripts/core.js")

const createWindow = () => {
  const win = new BrowserWindow({
    width: 300,
    height: 400,
    autoHideMenuBar: false,
    frame: true,
    resizable: true,
    maximizable: false,
    minimizable: false,
    title: "Loading",
    webPreferences: {
      preload: path.join(__dirname, './source/scripts/functionLoader.js'),
      devTools: true,
    }
  })

  win.loadFile('./app/pages/loading.html')
}

app.whenReady().then(async () => {
  console.log(await core.updater.isUpdated())
  createWindow()
})

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
})