var mysql = require('mysql')


var DatabaseConnectionConfig = {
    host:"localhost",
    user:"root",
    password:"",
    database:"demo2"
}

var connection = mysql.createConnection(DatabaseConnectionConfig);

connection.connect(function(error){
    if(error){
        console.log("Connection Failed");

    }
    else{
        console.log("Connection Success");
        InsertData(connection);
    }
});

function InsertData(connection){

    let SQLQuery = "INSERT INTO `class`(`id`, `name`, `email`, `class_name`) VALUES ('879','Ruhul Amin','ruhul07@gmail.com','CSE-7B')";
    connection.query(SQLQuery,function(error){
        if(error){
            console.log("DataInsert failed");

        }
        else{
            console.log("Data Insert Success");
        }
    })




}