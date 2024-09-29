const connection = require('../config/db');

class Ubigeo {
    static getAllUbigeos(callback) {
        connection.query('SELECT * FROM tblUbigeo', (err, results) => {
            if (err) return callback(err);
            callback(null, results);
        });
    }

    static getUbigeoById(ubigeo, callback) {
        connection.query('SELECT * FROM tblUbigeo WHERE ubigeo = ?', [ubigeo], (err, results) => {
            if (err) return callback(err);
            callback(null, results[0]);
        });
    }

    static createUbigeo(ubigeo, callback) {
        connection.query('INSERT INTO tblUbigeo SET ?', ubigeo, (err, results) => {
            if (err) return callback(err);
            callback(null, results.insertId);
        });
    }

    static updateUbigeo(ubigeo, data, callback) {
        connection.query('UPDATE tblUbigeo SET ? WHERE ubigeo = ?', [data, ubigeo], (err, results) => {
            if (err) return callback(err);
            callback(null, results);
        });
    }

    static deleteUbigeo(ubigeo, callback) {
        connection.query('DELETE FROM tblUbigeo WHERE ubigeo = ?', [ubigeo], (err, results) => {
            if (err) return callback(err);
            callback(null, results);
        });
    }
}

module.exports = Ubigeo;
