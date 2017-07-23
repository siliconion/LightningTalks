var express = require('express');
var app = express();
var port = process.env.PORT || 8001;
var morgan = require('morgan')

app.use(morgan('combined'))

app.get('/get_server_info', function (req, res) {
    host = req.get('host')
    var fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl;
    console.log(fullUrl)
    res.send("This is the frontend server. Port: " + port)
})

app.listen(port);
console.log("Listening on port", port);