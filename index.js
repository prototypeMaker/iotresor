/**
 * Application Entry Point
 * Everything starts from here...
 */

 
let node_env = process.env.NODE_ENV || 'development';


function initApp(node_env) {

     if (node_env == 'production') {
    
        console.log("Running in " + node_env + " mode")
        let server = require(`./src/server`);
    
    } else {
        node_env == 'development'
        console.log("Running in " + node_env + " mode")
        require('./src/server'); //Loads up Server
    }

}

//Project entry point
initApp(node_env);