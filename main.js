const { app, BrowserWindow } = require('electron')
const path = require('node:path')
const core = require("./src/core.js")

let win

const loadingWindow = async () => {
  win = new BrowserWindow({
    width: 300,
    height: 400,
    autoHideMenuBar: true,
    icon: "./images/Icon.ico",
    frame: true,
    resizable: false,
    maximizable: false,
    minimizable: false,
    title: "Loading",
    webPreferences: {
      preload: path.join(__dirname, './source/scripts/functionLoader.js'),
      devTools: true,
      nodeIntegration: true,
    }
  })
  win.loadFile('./app/pages/loading.html')
  console.log(await core.updater.isUpdated())
  core.updater.updateGame(win)
}

app.whenReady().then(async () => {
  loadingWindow()

})

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
})