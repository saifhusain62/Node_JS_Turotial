var mysql = require('mysql')


var DatabaseConnectionConfig = {
    host:"localhost",
    user:"root",
    password:"",
    database:"demo"
}

var con  = mysql.createConnection(DatabaseConnectionConfig);

con.connect(function(error){

    if(error){
        console.log("Connection Failed");
    }
    else{
        console.log("Connection Success")
        InsertData(con);
    }
})

function InsertData(con){

    let SQLQuery = "INSERT INTO `students`( `name`, `roll`, `class`) VALUES ('Saif','379','10')"
    con.query(SQLQuery,function(error){
        if(error){
            console.log("Data Insert Failed");
        }
        else{
            console.log("Data Insert Success");
        }
    })

}