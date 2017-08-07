var express = require('express');
var app = express();
var port = process.env.PORT || 8002;
var morgan = require('morgan')
app.use(morgan('combined'))

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:8000");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Credentials", "true");
    next();
});

app.get('/get_info', function (req, res) {
    res.send("Response from CORS server. Port: " + port)
})

app.listen(port);
console.log("Listening on port", port);