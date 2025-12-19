var MongoClient = require('mongodb').MongoClient;

var URL = "mongodb+srv://saifdemo:saif0000@cluster0.3urofnd.mongodb.net/?retryWrites=true&w=majority";


var config = { useUnifiedTopology: true } 

MongoClient.connect(URL,config,function(error,MyMongoClient){

    if(error){
        console.log("Connection Failed");
    }
    else{
        console.log("Connection Success")
        InsertData(MyMongoClient);
    }
})

function InsertData(MyMongoClient){
   var MyDataBase = MyMongoClient.db("school")
  var Mycollection = MyDataBase.collection("students")

   var MyData = {
    name:"Saif",
    Roll:"01",
    Class:10,
    City:"Dhaka"
   }
   Mycollection.insertOne(MyData,function(error){
    if(error){
        console.log("Insert Failed")
    }
    else{
        console.log("Insert Success");
    }
   })
}