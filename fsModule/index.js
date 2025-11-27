var fs =require('fs')
var http =require('http')


var server = http.createServer(function(req,res){


    if(req.url='/'){
        fs.readFile('Home.html',function(error,data){
                     
            res.writeHead(200,{'Content-type':'text/html'})
            res.write(data)
            res.end();
        });
    }

});


server.listen(5050);
console.log("server Run seccessfull");