const { app, BrowserWindow } = require('electron')
const path = require('node:path')

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

app.whenReady().then(() => {
  createWindow()
})

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
})
const { Octokit } = require("@octokit/core");
const octokit = new Octokit({
    auth: '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'
  })
async function checkForUpdate(){
    await octokit.request('GET /repos/Galactic-Vanguard/GameLauncher/releases/latest', {
        owner: 'Galactic-Vanguard',
        repo: 'GameLauncher',
        headers: {
          'X-GitHub-Api-Version': '2022-11-28'
        }
      }).then(result =>{
        console.log(result)
      })

      
}
checkForUpdate()