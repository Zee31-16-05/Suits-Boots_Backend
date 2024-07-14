/* This JavaScript code snippet is setting up a connection to a MySQL database using the `mysql`
package. Here's a breakdown of what each part of the code is doing: */
const mysql = require('mysql');

const connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: 'root@123',
    database: 'suitsbootsbackend'
});

connection.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL database:', err);
        return;
    }
    console.log('Connected to MySQL database');
});

module.exports = connection;
