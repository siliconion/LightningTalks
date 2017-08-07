var express = require('express');
var app = express();
var port = process.env.PORT || 8001;
var morgan = require('morgan')
app.use(morgan('combined'))

app.get('/get_info', function (req, res) {
    res.send("Response from non-CORS server. Port: " + port)
})

app.listen(port);
console.log("Listening on port", port);