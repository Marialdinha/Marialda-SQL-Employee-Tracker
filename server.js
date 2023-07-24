// Imports
const express = require('express');
const path = require('path');
const mysql = require('mysql2');

// Specify on which port the Express.js server will run
const PORT = process.env.PORT || 3001;
// Initialize an instance of Express.js
const app = express();

// Middleware for parsing application/json and urlencoded data
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Middleware for front-end
app.use(express.static('public'));

// Connect to database
const db = mysql.createConnection(
  {
    host: 'localhost',
    // MySQL username,
    user: 'root',
    // MySQL password
    // password: '',
    database: 'classlist_db'pwd
  },
  console.log(`Connected to the classlist_db database.`)
);

db.query('SELECT * FROM students', function (err, results) {
  console.log(results);
});

// listen() method is responsible for listening for incoming connections on the specified port 
app.listen(PORT, () =>
  console.log(`Server running on http://localhost:${PORT}`)
);
