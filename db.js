// db.js

const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost', // Replace with your database host
  user: 'root',      // Replace with your database user
  password: '',      // Replace with your database password (if any)
  database: 'movie_booking_db', // Replace with your database name
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to the database: ' + err.stack);
    return;
  }
  console.log('Connected to the database as ID ' + connection.threadId);
});

module.exports = connection;
