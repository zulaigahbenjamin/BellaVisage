import mysql2 from "mysql2";
import dotenv from 'dotenv';

dotenv.config();
 
// create the connection to database
const db = mysql2.createConnection({
  host     : process.env.host,
  database : process.env.database,
  user     : process.env.user,
  password : process.env.password,
  multipleStatements: true,
  connectionLimit:3000000,
});

db.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    db.query("select * from products", function (err, result) {
      if (err) throw err;
      console.log("Database created");
    });
  });


  // db.query("INSERT INTO todos SET ? ", params,
  // function (error, results, fields) {
  //     if (error) throw error;
  //     console.log("Record inserted");
  // });


  // db.connect(function(err) {
  //   if (err) throw err;
  //   console.log("Connected!");
  //   var sql = "INSERT INTO products id, image, size,description, price VALUES ?";
   
  //   db.query(sql, function (err, result) {
  //     if (err) throw err;
  //     console.log("1 record inserted");
  //   });
  // });
;


export default db;
