var MongoClient = require('mongodb');

var URL = "mongodb+srv://saifhusain4051_db_user:saif0000@cluster0.rfiwbtz.mongodb.net/?retryWrites=true&w=majority";

var config = { useUnifiedTopology: true };

MongoClient.connect(URL,config,function(error,MymongoClient){
    if(error){
        console.log("Connection Error");
    }
    else{
        console.log("Connection Success");
        SortData(MymongoClient);
    }
})
function SortData(MymongoClient){
    var MyDataBase = MymongoClient.db('versity');
    var Mycollection = MyDataBase.collection('school');

    var SortedBy = {ID:432};

    Mycollection.find().sort().toArray(function(error,result){
        console.log(result)
    })

}

