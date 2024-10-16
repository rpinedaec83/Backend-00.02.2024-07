const connection = require('../config/db');

class Propietario {
    static getAllPropietarios(callback) {
        connection.query('SELECT * FROM tblPropietario', (err, results) => {
            if (err) return callback(err);
            callback(null, results);
        });
    }

    static getPropietarioById(id, callback) {
        connection.query('SELECT * FROM tblPropietario WHERE id = ?', [id], (err, results) => {
            if (err) return callback(err);
            callback(null, results[0]);
        });
    }

    static createPropietario(propietario, callback) {
        connection.query('INSERT INTO tblPropietario SET ?', propietario, (err, results) => {
            if (err) return callback(err);
            callback(null, results.insertId);
        });
    }

    static updatePropietario(id, propietario, callback) {
        connection.query('UPDATE tblPropietario SET ? WHERE id = ?', [propietario, id], (err, results) => {
            if (err) return callback(err);
            callback(null, results);
        });
    }

    static deletePropietario(id, callback) {
        connection.query('DELETE FROM tblPropietario WHERE id = ?', [id], (err, results) => {
            if (err) return callback(err);
            callback(null, results);
        });
    }
}

module.exports = Propietario;
