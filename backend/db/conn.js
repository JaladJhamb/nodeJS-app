const mysql = require("mysql2");


// Create a connection to the database
const connection = mysql.createConnection({
  host: "172.31.24.144",
  user: "root",
  password: "jalad@23",
  port: "3306",
  database: "employees_db"
});

// open the MySQL connection
connection.connect(error => {
  if (error) throw error;
  console.log("Successfully connected to the MYSQL database.");
});

module.exports = connection;
