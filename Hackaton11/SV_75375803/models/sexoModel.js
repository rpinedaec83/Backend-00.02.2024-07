const connection = require('../config/db');

class Sexo {
    static getAllSexos(callback) {
        connection.query('SELECT * FROM tblSexo', (err, results) => {
            if (err) return callback(err);
            callback(null, results);
        });
    }

    static getSexoById(id, callback) {
        connection.query('SELECT * FROM tblSexo WHERE id = ?', [id], (err, results) => {
            if (err) return callback(err);
            callback(null, results[0]);
        });
    }

    static createSexo(sexo, callback) {
        connection.query('INSERT INTO tblSexo SET ?', sexo, (err, results) => {
            if (err) return callback(err);
            callback(null, results.insertId);
        });
    }

    static updateSexo(id, sexo, callback) {
        connection.query('UPDATE tblSexo SET ? WHERE id = ?', [sexo, id], (err, results) => {
            if (err) return callback(err);
            callback(null, results);
        });
    }

    static deleteSexo(id, callback) {
        connection.query('DELETE FROM tblSexo WHERE id = ?', [id], (err, results) => {
            if (err) return callback(err);
            callback(null, results);
        });
    }
}

module.exports = Sexo;
