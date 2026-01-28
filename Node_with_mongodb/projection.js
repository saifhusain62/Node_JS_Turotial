var MongoClient = require('mongodb').MongoClient;

var URL = "mongodb+srv://saifhusain4051_db_user:saif0000@cluster0.rfiwbtz.mongodb.net/?retryWrites=true&w=majority";

var config = { useUnifiedTopology: true };

MongoClient.connect(URL,config,function(error,MymongoClient){
    if(error){
        console.log("Connection Failed");
    }
    else{
        console.log("Connection Failed");
        Projection(MymongoClient);
    }
})

function Projection(MymongoClient){

    var MyDataBase = MymongoClient.db("versity");
    var Mycollection = MyDataBase.collection("school");

    var MyObj = {}
    var ItemProjection = {projection:{ID:""}}

    Mycollection.find(MyObj,ItemProjection).toArray(function(error,result){
        console.log(result)
    })


}