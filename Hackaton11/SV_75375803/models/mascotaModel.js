const connection = require('../config/db');

class Mascota {
    static getAllMascotas(callback) {
        connection.query('SELECT * FROM tblMascota', (err, results) => {
            if (err) return callback(err);
            callback(null, results);
        });
    }

    static getMascotaById(id, callback) {
        connection.query('SELECT * FROM tblMascota WHERE id = ?', [id], (err, results) => {
            if (err) return callback(err);
            callback(null, results[0]);
        });
    }

    static createMascota(mascota, callback) {
        connection.query('INSERT INTO tblMascota SET ?', mascota, (err, results) => {
            if (err) return callback(err);
            callback(null, results.insertId);
        });
    }

    static updateMascota(id, mascota, callback) {
        connection.query('UPDATE tblMascota SET ? WHERE id = ?', [mascota, id], (err, results) => {
            if (err) return callback(err);
            callback(null, results);
        });
    }

    static deleteMascota(id, callback) {
        connection.query('DELETE FROM tblMascota WHERE id = ?', [id], (err, results) => {
            if (err) return callback(err);
            callback(null, results);
        });
    }
}

module.exports = Mascota;
