var MongoClient = require('mongodb').MongoClient;

var URL = "mongodb+srv://saifdemo:saif0000@cluster0.3urofnd.mongodb.net/?retryWrites=true&w=majority";


var config = { useUnifiedTopology: true } 

MongoClient.connect(URL,config,function(error){

    if(error){
        console.log("Connection Failed");
    }
    else{
        console.log("Connection Success")
    }
})