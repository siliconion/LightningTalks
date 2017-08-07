var express = require('express');
var app = express();
var port = process.env.PORT || 8000;
var morgan = require('morgan')
app.use(morgan('combined'))

app.get('/get_info', function (req, res) {
    res.send("Response from same origin server. Port: " + port)
})

app.use(express.static('static'));
app.listen(port);
console.log("Listening on port", port);