//Express setup
const Express = require('express');
const app = new Express();
const path = require('path');
const logger = require('morgan');

//Written in functional programming paradigm -- declarative

function init($host) {
    
    publicPath = path.join(__dirname, "..", "/");

    // log requests
    app.use(logger('dev'));
    
    // set static options
    app.use(Express.static(publicPath));
    
    // 
    // app.get('/', (req, res) => {
    //     res.sendFile(path.join(publicPath, "index.html"))
    //     // res.sendFile('index.html', { root: __dirname });
    // })
    
    let port = process.env.PORT || initPort || `3003`;
    let address = process.env.HOST || initHost || 'localhost';
    const host = `${address}:${port}` || $host;
    // Listens on a port
    app.listen(port);
    console.log(`[Server] live on ${host}`)
}

init();