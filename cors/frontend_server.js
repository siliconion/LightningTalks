var express = require('express');
var app = express();
var port = process.env.PORT || 8000;
var morgan = require('morgan')

app.use(morgan('combined'))

app.get('/get_server_info', function (req, res) {
    host = req.get('host')
    var fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl;
    res.send("Success! This is the frontend server. Port: " + port)
})

app.use(express.static('static'));
app.listen(port);
console.log("Listening on port", port);