var http = require('http')
var URL = require('url')


var server = http.createServer(function(req,res){

    var myURL ="https://github.com/saifhusain62"

    var myURLobj = URL.parse(myURL,true);
    var myHostname = myURLobj.host;
    var myPathname = myURLobj.pathname;
    var myQueryname = myURLobj.search;


    res.writeHead(200,{'Content-Type': 'text/html'})
    res.write(myHostname);
    res.end();

});

server.listen(5055);
console.log("Server Run Success")