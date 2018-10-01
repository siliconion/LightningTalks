var http = require('http');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    var urlpath = req.url;

    if (urlpath == "/") {
        res.end("<h1>Hello world</h1>");
    }

    if (urlpath == '/code1') {
        res.end("<h1>code 1</h1>")
    }

    if (urlpath == '/code2') {
        res.end("<h1>code 2, updated at feature commit 2</h1>")
    }

    if (urlpath == '/code3') {
        res.end("<h1>code 3, updated at feature commit 1</h1>")
    }

    res.end("This end point does not exist" + req.url);
}).listen(8080);