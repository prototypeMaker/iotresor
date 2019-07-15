//Express setup
const Express = require('express');
const app = new Express();
const path = require('path');
const logger = require('morgan')

function init() {
    publicPath = path.join(__dirname, "..", "public");
    assetsPath = path.join(__dirname, "..", "assets");

    // log requests
    app.use(logger('dev'));

    // set static options
    app.use(Express.static(publicPath));
}

function start(port) {

    // 
    app.get('/', (req, res) => {
        res.sendFile(path.join(publicPath, "index.html"))
    })

    // Listens on a port
    port = process.env.PORT || `3000`;
    app.listen(port);
    console.log(`running on localhost:${port}`)
}

// 
init()
start()