const connection = require('../config/db'); // Importar la conexión a la base de datos

// Modelo para `tblUsuario`
class Usuario {
    static getAllUsuarios(callback) {
        connection.query('SELECT * FROM tblUsuario', (err, results) => {
            if (err) {
                return callback(err);
            }
            callback(null, results);
        });
    }

    static getUsuarioById(id, callback) {
        connection.query('SELECT * FROM tblUsuario WHERE id = ?', [id], (err, results) => {
            if (err) {
                return callback(err);
            }
            callback(null, results[0]);
        });
    }

    static createUsuario(usuario, callback) {
        connection.query('INSERT INTO tblUsuario SET ?', usuario, (err, results) => {
            if (err) {
                return callback(err);
            }
            callback(null, results.insertId);
        });
    }

    static updateUsuario(id, usuario, callback) {
        connection.query('UPDATE tblUsuario SET ? WHERE id = ?', [usuario, id], (err, results) => {
            if (err) {
                return callback(err);
            }
            callback(null, results);
        });
    }

    static deleteUsuario(id, callback) {
        connection.query('DELETE FROM tblUsuario WHERE id = ?', [id], (err, results) => {
            if (err) {
                return callback(err);
            }
            callback(null, results);
        });
    }
}

module.exports = Usuario;
