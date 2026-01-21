var MongoClient = require('mongodb').MongoClient;

var URL = "mongodb+srv://saifhusain4051_db_user:saif0000@cluster0.rfiwbtz.mongodb.net/?retryWrites=true&w=majority";

var config = { useUnifiedTopology: true } 

MongoClient.connect(URL,config,function(error,MyMongoClient){
    if(error){
        console.log("Connection Failed");
    }
    else{
        console.log("Connection Success");
        insertData(MyMongoClient);
    }
})

function insertData(MyMongoClient){
    var MyDataBase = MyMongoClient.db("versity");
    var Mycollection = MyDataBase.collection("school")


    var myData = [
        {name:"Rasel Ahmed",ID:406,city:"Jessore"},
        {name:"Mahbub Hasan",ID:567,city:"Dinajpur"},
        {name:"Rion Hasan",ID:432,city:"Rongpur"}

    ];

    Mycollection.insertMany(myData,function(error){
        if(error){
            console.log("Data Insert Failed");
        }
        else{
            console.log("Data Insert success");
        }
    })
}