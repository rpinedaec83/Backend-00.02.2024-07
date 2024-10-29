const db = require('../config/database');

// Crear un nuevo paquete
exports.crearPaquete = async (req, res) => {
    const { descripcion, peso, usuarioId } = req.body;
    try {
        const [result] = await db.execute(
            'INSERT INTO paquetes (descripcion, peso, usuario_id) VALUES (?, ?, ?)',
            [descripcion, peso, usuarioId]
        );
        res.status(201).json({ id: result.insertId, message: 'Paquete creado exitosamente' });
    } catch (error) {
        res.status(500).json({ error: 'Error al crear el paquete' });
    }
};

// Obtener todos los paquetes de un usuario
exports.obtenerPaquetes = async (req, res) => {
    try {
        const [rows] = await db.execute('SELECT * FROM paquetes WHERE usuario_id = ?', [req.user.id]);
        res.json(rows);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener los paquetes' });
    }
};

// Obtener detalles de un paquete por ID
exports.obtenerPaquetePorId = async (req, res) => {
    const { id } = req.params;
    try {
        const [rows] = await db.execute('SELECT * FROM paquetes WHERE id = ?', [id]);
        if (rows.length === 0) {
            return res.status(404).json({ error: 'Paquete no encontrado' });
        }
        res.json(rows[0]);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener el paquete' });
    }
};

// Actualizar el estado de un paquete
exports.actualizarEstadoPaquete = async (req, res) => {
    const { id } = req.params;
    const { estado } = req.body;
    try {
        const [result] = await db.execute(
            'UPDATE paquetes SET estado = ? WHERE id = ?',
            [estado, id]
        );
        if (result.affectedRows === 0) {
            return res.status(404).json({ error: 'Paquete no encontrado' });
        }
        res.json({ message: 'Estado del paquete actualizado' });
    } catch (error) {
        res.status(500).json({ error: 'Error al actualizar el estado del paquete' });
    }
};

// Eliminar un paquete
exports.eliminarPaquete = async (req, res) => {
    const { id } = req.params;
    try {
        const [result] = await db.execute('DELETE FROM paquetes WHERE id = ?', [id]);
        if (result.affectedRows === 0) {
            return res.status(404).json({ error: 'Paquete no encontrado' });
        }
        res.json({ message: 'Paquete eliminado exitosamente' });
    } catch (error) {
        res.status(500).json({ error: 'Error al eliminar el paquete' });
    }
};
