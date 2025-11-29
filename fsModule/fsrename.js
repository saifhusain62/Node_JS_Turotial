var fs = require('fs')
var http = require('http')


var server = http.createServer(function(req,res){


    if(req.url='/'){

        fs.rename('demo.txt','null.text',function(error){

            if(error){
                res.writeHead(200,{'content-type':'text/html'})
                res.write("File Rename Fail");
                res.end();
            }
            else{
                res.writeHead(200,{'content-type':'text/html'})
                res.write("File Rename Success");
                res.end();

            }
        })
    }


});

server.listen(5050);
console.log("server Run Success")