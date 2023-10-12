const { app, BrowserWindow } = require('electron')
const closeApp = document.getElementById('closeApp');
closeApp.addEventListener('click', () => {
    app.exit()
});