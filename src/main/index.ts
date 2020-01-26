import {app, BrowserWindow} from 'electron'
import * as path from 'path'
import {format as formatUrl} from 'url'

const isDev = process.env.NODE_ENV !== 'production'

console.log(`http://localhost:${process.env.ELECTRON_WEBPACK_WDS_PORT}/`)

app.on('ready', () => {
    var window = new BrowserWindow({
        webPreferences: {
            nodeIntegration: true
        }
    });

    if(isDev) {
        window.loadURL(`http://localhost:${process.env.ELECTRON_WEBPACK_WDS_PORT}/`);
    } else {
        window.loadURL(formatUrl({
            pathname: path.join(__dirname, 'index.html'),
            protocol: 'file',
            slashes: true
        }))
    }
})