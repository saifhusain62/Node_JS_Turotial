var fs = require('fs')
var http = require('http')

var server = http.createServer(function(req,res){

    if(req.url='/'){

        let error = fs.writeFileSync('demo2.txt','Welcome to file Sync')

        if(error){
            res.writeHead(200,{'content-type':'text/html'});
            res.write('File write fail');
            res.end();
        }
        else{
             res.writeHead(200,{'content-type':'text/html'});
            res.write('File write success');
            res.end();

        }
    }
});

server.listen(5050);
console.log("File Run Seccess")