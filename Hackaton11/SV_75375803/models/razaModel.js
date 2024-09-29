const connection = require('../config/db');

class Raza {
    static getAllRazas(callback) {
        connection.query('SELECT * FROM tblRaza', (err, results) => {
            if (err) return callback(err);
            callback(null, results);
        });
    }

    static getRazaById(id, callback) {
        connection.query('SELECT * FROM tblRaza WHERE id = ?', [id], (err, results) => {
            if (err) return callback(err);
            callback(null, results[0]);
        });
    }

    static createRaza(raza, callback) {
        connection.query('INSERT INTO tblRaza SET ?', raza, (err, results) => {
            if (err) return callback(err);
            callback(null, results.insertId);
        });
    }

    static updateRaza(id, raza, callback) {
        connection.query('UPDATE tblRaza SET ? WHERE id = ?', [raza, id], (err, results) => {
            if (err) return callback(err);
            callback(null, results);
        });
    }

    static deleteRaza(id, callback) {
        connection.query('DELETE FROM tblRaza WHERE id = ?', [id], (err, results) => {
            if (err) return callback(err);
            callback(null, results);
        });
    }
}

module.exports = Raza;
