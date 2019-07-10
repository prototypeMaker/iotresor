//Express setup
const Express = require('express');
const app = new Express();
const path = require('path');


var logger = (res, req, next) => {
    console.log(`Pinged at ${Date.now()}`)
    next()
}



module.exports = {

    init() {
        app.use(logger); //Logs pings
        console.log("Finished initializing")
    },
    
    start(port) {
        //Server side Rendering
        // app.use("../public", Express.static(__dirname + "."));
        app.get("/", (req, res, next) => {
            //Serves empty html file
            // res.sendFile("/public/index.html")
            res.sendFile(path.join(__dirname, '~/', 'index.html'))
        })
        app.listen(port, () => {console.log("Serving index.html")})
    }

}