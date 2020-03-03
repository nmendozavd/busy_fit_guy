const mysql = require('mysql');

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  database : 'dailypump'
});


connection.connect(() => {
    console.log("Successfully connected to database")
});

module.exports = connection;