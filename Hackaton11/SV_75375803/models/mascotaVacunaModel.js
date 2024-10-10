const connection = require('../config/db');

class MascotaVacuna {
    static getAllMascotaVacunas(callback) {
        connection.query('SELECT * FROM tblMascotaVacuna', (err, results) => {
            if (err) return callback(err);
            callback(null, results);
        });
    }

    static getMascotaVacunaById(id, callback) {
        connection.query('SELECT * FROM tblMascotaVacuna WHERE id = ?', [id], (err, results) => {
            if (err) return callback(err);
            callback(null, results[0]);
        });
    }

    static createMascotaVacuna(mascotaVacuna, callback) {
        connection.query('INSERT INTO tblMascotaVacuna SET ?', mascotaVacuna, (err, results) => {
            if (err) return callback(err);
            callback(null, results.insertId);
        });
    }

    static updateMascotaVacuna(id, mascotaVacuna, callback) {
        connection.query('UPDATE tblMascotaVacuna SET ? WHERE id = ?', [mascotaVacuna, id], (err, results) => {
            if (err) return callback(err);
            callback(null, results);
        });
    }

    static deleteMascotaVacuna(id, callback) {
        connection.query('DELETE FROM tblMascotaVacuna WHERE id = ?', [id], (err, results) => {
            if (err) return callback(err);
            callback(null, results);
        });
    }
}

module.exports = MascotaVacuna;
