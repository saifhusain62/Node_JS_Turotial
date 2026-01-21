var MongoClient = require('mongodb').MongoClient;

var URL = 'mongodb+srv://saifhusain4051_db_user:saif0000@cluster0.rfiwbtz.mongodb.net/?retryWrites=true&w=majority'

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
    var MyDataBase = MyMongoClient.db("versity");
    var Mycollection = MyDataBase.collection("school");

    var MyData = {
        name:"Saif Husain",
        ID:506,
        City:"Dhaka"
    }

     Mycollection.insertOne(MyData,function(error){
        if(error){
            console.log("Insert Failed");
        }
        else{
            console.log("Insert Success")
        }
     })
}