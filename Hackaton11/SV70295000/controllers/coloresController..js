// controllers/colorController.js
const Color = require('../models/Color');

// Obtener todos los colores
exports.getColores = async (req, res) => {
  try {
    const colores = await Color.findAll();
    res.json(colores);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener colores' });
  }
};

// Crear un nuevo color
exports.createColor = async (req, res) => {
  const { descripcion } = req.body;
  try {
    const nuevoColor = await Color.create({ descripcion });
    res.status(201).json(nuevoColor);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear color' });
  }
};

// Actualizar un color
exports.updateColor = async (req, res) => {
  const { id } = req.params;
  const { descripcion } = req.body;
  try {
    const color = await Color.findByPk(id);
    if (!color) {
      return res.status(404).json({ error: 'Color no encontrado' });
    }
    color.descripcion = descripcion;
    await color.save();
    res.json(color);
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar color' });
  }
};

// Eliminar un color
exports.deleteColor = async (req, res) => {
  const { id } = req.params;
  try {
    const color = await Color.findByPk(id);
    if (!color) {
      return res.status(404).json({ error: 'Color no encontrado' });
    }
    await color.destroy();
    res.status(204).json();
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar color' });
  }
};
