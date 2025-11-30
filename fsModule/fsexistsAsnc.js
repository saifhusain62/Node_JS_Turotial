var fs = require('fs')
var http = require('http')

var server = http.createServer(function(req, res) {

    if (req.url === '/') {

        fs.exists('demo2.txt', function(result) {
            if (result) {
                res.end("Success")
            } else {
                res.end("Failed")
            }
        })
    }

});

server.listen(5060);
console.log("Server Run Success");
