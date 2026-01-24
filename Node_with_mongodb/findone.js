var MongoClient = require('mongodb').MongoClient;

var URL = "mongodb+srv://saifhusain4051_db_user:saif0000@cluster0.rfiwbtz.mongodb.net/?retryWrites=true&w=majority";

var config = { useUnifiedTopology: true };

MongoClient.connect(URL, config, function (error, MymongoClient) {
    if (error) {
        console.log("Connection Failed");
    } else {
        console.log("Connection Success");
        findone(MymongoClient);
    }
});

function findone(MymongoClient) {
    var MyDataBase = MymongoClient.db("versity");
    var Mycollection = MyDataBase.collection("school");

    var FindObj = {};

    Mycollection.findOne(FindObj, function (error, result) {
        if (error) {
            console.log("Find Failed");
        } else {
            console.log(result);
        }
        MymongoClient.close(); // good practice
    });
}
