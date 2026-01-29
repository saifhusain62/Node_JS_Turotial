var MongoClient = require('mongodb').MongoClient;

var URL = "mongodb+srv://saifhusain4051_db_user:saif0000@cluster0.rfiwbtz.mongodb.net/?retryWrites=true&w=majority";

var config = { useUnifiedTopology: true };

MongoClient.connect(URL,config,function(error,MymongoClient){
    if(error){
        console.log("Connection failed");
    }
    else{
        console.log("Connection Success");
        QuerylimitData(MymongoClient)
    }
})

function QuerylimitData(MymongoClient){

    var MyDataBase = MymongoClient.db("versity");
    var Mycollection = MyDataBase.collection("school");
    
    var Query = {ID:506}

    Mycollection.find(Query).limit(1).toArray(function(error,result){
        console.log(result);
    })

}