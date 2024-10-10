const connection = require('../config/db');

class Vacuna {
    static getAllVacunas(callback) {
        connection.query('SELECT * FROM tblVacunas', (err, results) => {
            if (err) return callback(err);
            callback(null, results);
        });
    }

    static getVacunaById(id, callback) {
        connection.query('SELECT * FROM tblVacunas WHERE id = ?', [id], (err, results) => {
            if (err) return callback(err);
            callback(null, results[0]);
        });
    }

    static createVacuna(vacuna, callback) {
        connection.query('INSERT INTO tblVacunas SET ?', vacuna, (err, results) => {
            if (err) return callback(err);
            callback(null, results.insertId);
        });
    }

    static updateVacuna(id, vacuna, callback) {
        connection.query('UPDATE tblVacunas SET ? WHERE id = ?', [vacuna, id], (err, results) => {
            if (err) return callback(err);
            callback(null, results);
        });
    }

    static deleteVacuna(id, callback) {
        connection.query('DELETE FROM tblVacunas WHERE id = ?', [id], (err, results) => {
            if (err) return callback(err);
            callback(null, results);
        });
    }
}

module.exports = Vacuna;
