var MongoClient = require('mongodb').MongoClient;

var URL = 'mongodb+srv://saifhusain4051_db_user:saif0000@cluster0.rfiwbtz.mongodb.net/?retryWrites=true&w=majority';

var config = { useUnifiedTopology: true };

MongoClient.connect(URL, config, function (error, client) {
    if (error) {
        console.log("Connection Failed");
    } else {
        console.log("Connection Success");
        InsertData(client);
    }
});

function InsertData(client) {
    var MyDataBase = client.db("versity");
    var Mycollection = MyDataBase.collection("students");

    var MyData = {
        name: "Saif Husain",
        id: 41220300379,
        section: "B"
    };

    Mycollection.insertOne(MyData, function (error) {
        if (error) {
            console.log("Insert Failed");
        } else {
            console.log("Insert Success");
        }
        client.close();
    });
}
