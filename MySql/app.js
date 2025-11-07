// import mysql from "mysql";
// // 1: to connect to mysql server
// const db = await mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: 'password',
//   database: 'brackery',
// });
// console.log('Connected to MySQL server');

// // 2: we need to create a database
// // await db.query('CREATE DATABASE brackery');

// console.log(await db.execute('Database created'));
// // 3: then we to create a table
// await db.execute(`CREATE TABLE users (
//   id INT AUTO_INCREMENT PRIMARY KEY,
//   username VARCHAR(255) NOT NULL,
//   email VARCHAR(255) NOT NULL UNIQUE
// )`);
// console.log('Table created');
// // 4: is to perform CRUD operations

// // 5: close the connection
// db.end();
// console.log('Connection closed');


import mysql from "mysql2";

const db = mysql.createConnection({
  host: "localhost",
  user: "General",
  password: "",
  database: "brackery",
});

db.connect((err) => {
  if (err) {
    console.error("❌ Database connection failed:", err);
  } else {
    console.log("✅ Connected to MySQL database!");
  }
});
