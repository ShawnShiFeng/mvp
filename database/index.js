const mysql = require('mysql');

const dbConnection = mysql.createConnection({
    user : 'root',
    password : '',
    database : 'vocab'
});

dbConnection.connect(function(err) {
    if (err) console.error(err);
    else console.log(`connection to database 'vocab' is on`);
});

module.exports = dbConnection;