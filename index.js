/**
 * Application Entry Point
 * Everything starts from here...
 */

let port = process.env.PORT || '3021';
let address = process.env.PUBLIC_URL || '127.0.0.1';

const host = `${address}:${port}`;

if (process.env.NODE_ENV == 'development') {
    console.log("Running in " + process.env.NODE_ENV + " mode")
    require('./src/server'); //Loads up Server

} else if (process.env.NODE_ENV == 'production') {
    console.log("Running in " + process.env.NODE_ENV + " mode")
    let server = require(`./src/server`);
    server.init();
    server.start();
}