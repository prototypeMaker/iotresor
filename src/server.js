//Express setup
const Express = require('express');
const app = new Express();



var logger = (res, req, next) => {
    console.log(`Pinged at ${Date.now()}`)
    next()
}


app.init = function () {
    app.use(logger); //Logs pings
    app.use(Express.static('/public'));
}


app.start = () => {
    //Server side Rendering
    app.use("/", (req, res, next) => {
        //Serves empty html file
        res.sendFile(path.join(__dirname, '../public', 'index.html'))
    })
}


module.exports