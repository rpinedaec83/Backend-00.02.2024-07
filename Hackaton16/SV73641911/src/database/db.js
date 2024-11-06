var mysql = require('mysql2');

var con = mysql.createConnection({
    host:process.env.MYSQLHOST,
    user:process.env.MYSQLUSER,
    password: process.env.MYSQLPASS,
    database: process.env.MYSQLDB
});
con.connect(function (err) {
    if (err) throw err;
    // login de usuarios
    var sql = "CREATE TABLE IF NOT EXISTS  login (id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY, username VARCHAR(250) unique , password VARCHAR(250))";
    con.query(sql, function (err, result) {
        if (err) throw err;
    });

    // productos
    var sql = "CREATE TABLE IF NOT EXISTS  productos (id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY, login_id INT(6) UNSIGNED, FOREIGN KEY (login_id) REFERENCES login(id), productid VARCHAR(250) unique, productname VARCHAR(256))";
    con.query(sql, function (err, result) {
        if (err) throw err;
    });

    // pagos
    var sql = "CREATE TABLE IF NOT EXISTS  pagos (id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY, login_id INT(6) UNSIGNED, FOREIGN KEY (login_id) REFERENCES login(id), pagoid VARCHAR(250) unique, monto VARCHAR(256))";
    con.query(sql, function (err, result) {
        if (err) throw err;
    });

    // devoluciones
    var sql = "CREATE TABLE IF NOT EXISTS  devoluciones (id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY, login_id INT(6) UNSIGNED, FOREIGN KEY (login_id) REFERENCES login(id), devolucionid VARCHAR(250) unique, monto VARCHAR(256))";
    con.query(sql, function (err, result) {
        if (err) throw err;
    });
});

module.exports = con;