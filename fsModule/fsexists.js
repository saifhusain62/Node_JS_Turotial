var fs = require('fs')
var http = require('http')

var server = http.createServer(function(req,res){

    if(req.url='/'){

      var result =fs.existsSync('demo2.txt');
      if(result){
        res.end("true")
      }
      else{
        res.end("False")
      }

    }


});

server.listen(5050);
console.log("Server Run Success")