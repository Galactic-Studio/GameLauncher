const { app, BrowserWindow } = require('electron')
const path = require('node:path')
const core = require("./src/core.js")

const loading = () => {
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
  if (!core.updater.isUpdated()){

  }
}

app.whenReady().then(async () => {
  loadingWindow()

})

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
})