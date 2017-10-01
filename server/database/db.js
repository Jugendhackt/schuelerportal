const mysql = require('mysql');

module.exports = mysql.createPool({
    connectionLimit: 3,
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'schuelerportal'
});
