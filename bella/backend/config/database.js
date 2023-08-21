import mysql from "mysql2";
   
// create the connection to database
const db = mysql.createConnection({
  host: 'bgkq7axlalh52arwgnvv-mysql.services.clever-cloud.com',
  user: 'u9j898sc5oghrbny',
  password: 'kRlXj9ltbbDgL5JVT21O',
  database: 'bgkq7axlalh52arwgnvv'
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

export default db;