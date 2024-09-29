const connection = require('../config/db');

class Nacionalidad {
    static getAllNacionalidades(callback) {
        connection.query('SELECT * FROM tblNacionalidad', (err, results) => {
            if (err) return callback(err);
            callback(null, results);
        });
    }

    static getNacionalidadById(id, callback) {
        connection.query('SELECT * FROM tblNacionalidad WHERE id = ?', [id], (err, results) => {
            if (err) return callback(err);
            callback(null, results[0]);
        });
    }

    static createNacionalidad(nacionalidad, callback) {
        connection.query('INSERT INTO tblNacionalidad SET ?', nacionalidad, (err, results) => {
            if (err) return callback(err);
            callback(null, results.insertId);
        });
    }

    static updateNacionalidad(id, nacionalidad, callback) {
        connection.query('UPDATE tblNacionalidad SET ? WHERE id = ?', [nacionalidad, id], (err, results) => {
            if (err) return callback(err);
            callback(null, results);
        });
    }

    static deleteNacionalidad(id, callback) {
        connection.query('DELETE FROM tblNacionalidad WHERE id = ?', [id], (err, results) => {
            if (err) return callback(err);
            callback(null, results);
        });
    }
}

module.exports = Nacionalidad;
