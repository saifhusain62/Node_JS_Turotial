var MongoClient = require('mongodb').MongoClient

var URL = "mongodb+srv://saifhusain4051_db_user:saif0000@cluster0.rfiwbtz.mongodb.net/?retryWrites=true&w=majority";

var config = { useUnifiedTopology: true };

MongoClient.connect(URL,config,function(error,MymongoClient){
    if(error){
        console.log("Connection Failed");
    }
    else{
        console.log("Connection Success");
        UpdateData(MymongoClient);
    }
})

function UpdateData(MymongoClient){

    var MyDataBase = MymongoClient.db("versity");
    var Mycollection = MyDataBase.collection("school");

    var myquery = {name:'Mahbub Hasan'};
    var newvalues = {$set:{name:'Akib Hasan'}};

    Mycollection.updateOne(myquery,newvalues,function(error,result){
        console.log(result);
    })

}