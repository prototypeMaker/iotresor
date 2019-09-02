//Express setup
const Express = require('express');
const app = new Express();
const path = require('path');
const logger = require('morgan');

//Written in functional programming paradigm -- declarative

function init() {
    
    publicPath = path.join(__dirname, "..", "/");

    // log requests
    app.use(logger('dev'));
    
    // set static options
    app.use(Express.static(publicPath));
}

function serve(initPort, initHost) {
    
    // 
    app.get('/', (req, res) => {
        res.sendFile(path.join(publicPath, "index.html"))
        // res.sendFile('index.html', { root: __dirname });
    })
    
    let port = process.env.PORT || initPort || `3003`;
    let address = process.env.HOST || initHost || 'localhost';
    const host = `${address}:${port}`;
    // Listens on a port
    app.listen(port);
    console.log(`[Server] live on ${host}`)
}

// Runtime
init()
if (process.env.NODE_ENV == 'production'){
    serve("80")
} ele 
{
    serve()
}