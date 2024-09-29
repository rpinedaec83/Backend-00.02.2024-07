const connection = require('../config/db'); // Importar la conexión a la base de datos

// Modelo para `tblColor`
class Color {
    static getAllColors(callback) {
        connection.query('SELECT * FROM tblColor', (err, results) => {
            if (err) {
                return callback(err);
            }
            callback(null, results);
        });
    }

    static getColorById(id, callback) {
        connection.query('SELECT * FROM tblColor WHERE id = ?', [id], (err, results) => {
            if (err) {
                return callback(err);
            }
            callback(null, results[0]);
        });
    }

    static createColor(color, callback) {
        connection.query('INSERT INTO tblColor SET ?', color, (err, results) => {
            if (err) {
                return callback(err);
            }
            callback(null, results.insertId);
        });
    }

    static updateColor(id, color, callback) {
        connection.query('UPDATE tblColor SET ? WHERE id = ?', [color, id], (err, results) => {
            if (err) {
                return callback(err);
            }
            callback(null, results);
        });
    }

    static deleteColor(id, callback) {
        connection.query('DELETE FROM tblColor WHERE id = ?', [id], (err, results) => {
            if (err) {
                return callback(err);
            }
            callback(null, results);
        });
    }
}

module.exports = Color;
