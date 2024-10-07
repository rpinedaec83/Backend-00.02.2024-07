const connection = require('../config/db');

class Especie {
    static getAllEspecies(callback) {
        connection.query('SELECT * FROM tblEspecie', (err, results) => {
            if (err) return callback(err);
            callback(null, results);
        });
    }

    static getEspecieById(id, callback) {
        connection.query('SELECT * FROM tblEspecie WHERE id = ?', [id], (err, results) => {
            if (err) return callback(err);
            callback(null, results[0]);
        });
    }

    static createEspecie(especie, callback) {
        connection.query('INSERT INTO tblEspecie SET ?', especie, (err, results) => {
            if (err) return callback(err);
            callback(null, results.insertId);
        });
    }

    static updateEspecie(id, especie, callback) {
        connection.query('UPDATE tblEspecie SET ? WHERE id = ?', [especie, id], (err, results) => {
            if (err) return callback(err);
            callback(null, results);
        });
    }

    static deleteEspecie(id, callback) {
        connection.query('DELETE FROM tblEspecie WHERE id = ?', [id], (err, results) => {
            if (err) return callback(err);
            callback(null, results);
        });
    }
}

module.exports = Especie;
