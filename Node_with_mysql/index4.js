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
        // InsertData(connection);
        // UpdateData(connection);
        Select(connection);
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

function UpdateData(connection){

    let SQLQuery="UPDATE `class` SET `email`='sakib8@gmail.com' WHERE id=277";
    connection.query(SQLQuery,function(error){
        if(error){
            console.log("Data Update Failed");

        }
        else{
            console.log("Data Update Success");
        }
    })
}
function Select(connection){

    let SQLQuery="SELECT * FROM `class`";
      connection.query(SQLQuery,function(error,result){
        if(error){
            console.log("Select not success");
        }
        else{
            console.log(result);
        }
      })
}