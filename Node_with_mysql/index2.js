var mysql = require('mysql')

var DatabaseconnectionConfig={
    host:"localhost",
    user:"root",
    password:"",
    database:"demo2"
};

var connection  = mysql.createConnection(DatabaseconnectionConfig);

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

    let SQLQuery = "INSERT INTO `class`(`id`, `name`, `email`, `class_name`) VALUES ('379','Saif Husain','saimumsaif62@gmail.com','10')";
    connection.query(SQLQuery,function(error){
        if(error){
            console.log("Insert Data Failed");
        }
        else{
            console.log("Insert Data Success");
        }
    })
}