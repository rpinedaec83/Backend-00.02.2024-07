const Color = require('../models/colorModel');

// Controlador para manejar las operaciones de `tblColor`
const getAllColors = (req, res) => {
    Color.getAllColors((err, results) => {
        if (err) {
            res.status(500).send('Error al obtener los colores');
        } else {
            res.json(results);
        }
    });
};

const getColorById = (req, res) => {
    const id = req.params.id;
    Color.getColorById(id, (err, result) => {
        if (err) {
            res.status(500).send('Error al obtener el color');
        } else if (!result) {
            res.status(404).send('Color no encontrado');
        } else {
            res.json(result);
        }
    });
};

const createColor = (req, res) => {
    const colorData = {
        descripcion: req.body.descripcion,
        usrCreacion: req.body.usrCreacion
    };
    Color.createColor(colorData, (err, insertId) => {
        if (err) {
            res.status(500).send('Error al crear el color');
        } else {
            res.status(201).json({ id: insertId });
        }
    });
};

const updateColor = (req, res) => {
    const id = req.params.id;
    const colorData = req.body;
    Color.updateColor(id, colorData, (err, result) => {
        if (err) {
            res.status(500).send('Error al actualizar el color');
        } else {
            res.status(200).send(`Color con ID: ${id} actualizado`);
        }
    });
};

const deleteColor = (req, res) => {
    const id = req.params.id;
    Color.deleteColor(id, (err, result) => {
        if (err) {
            res.status(500).send('Error al eliminar el color');
        } else {
            res.status(200).send(`Color con ID: ${id} eliminado`);
        }
    });
};

module.exports = {
    getAllColors,
    getColorById,
    createColor,
    updateColor,
    deleteColor
};
