var MongoClient = require('mongodb').MongoClient;

var URL = "mongodb+srv://saifhusain4051_db_user:saif0000@cluster0.rfiwbtz.mongodb.net/?retryWrites=true&w=majority";

var config = { useUnifiedTopology: true };

MongoClient.connect(URL, config, function (error, MyMongoClient) {
    if (error) {
        console.log("Connection Failed");
    } else {
        console.log("Connection Success");
        DeleteManyItem(MyMongoClient);
    }
});

function DeleteManyItem(MyMongoClient) {
    var MyDataBase = MyMongoClient.db("versity");
    var Mycollection = MyDataBase.collection("students");

    Mycollection.deleteMany({}, function (error, ResultObj) {
        if (error) {
            console.log("Delete Failed");
        } else {
            console.log("Delete Success: " + ResultObj.deletedCount);
        }
        MyMongoClient.close();
    });
}
