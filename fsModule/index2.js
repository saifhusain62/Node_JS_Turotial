var fs = require('fs')
var http = require('http')


var server = http.createServer(function(req,res){


    if(req.url='/'){

        let myData = fs.readFileSync('Home.html');
        res.writeHead(200,{'Content-type':'text/html'});
        res.write(myData);
        res.end();
    }
});


server.listen(6060);
console.log("Server Run Success")