var MongoClient = require('mongodb').MongoClient;

var URL = "mongodb+srv://saifhusain4051_db_user:saif0000@cluster0.rfiwbtz.mongodb.net/?retryWrites=true&w=majority";

var config = { useUnifiedTopology: true };

MongoClient.connect(URL, config, function (error, MyMongoClient) {
    // ✅ FIX 1: receive client object

    if (error) {
        console.log("Connection Failed");
    }
    else {
        console.log("Connection Success");
        deleteOneItem(MyMongoClient); // ✅ FIX 2: pass client properly
    }
});

function deleteOneItem(MyMongoClient) {
    var MyDataBase = MyMongoClient.db("versity");
    var Mycollection = MyDataBase.collection("school");

    var DeleteItem = { ID: 406 };

    Mycollection.deleteOne(DeleteItem, function (error, result) {
        if (error) {
            console.log("Delete Item Failed"); // ✅ fixed text
        }
        else {
            console.log("Delete Success"); // ✅ fixed text
        }
    });
}
