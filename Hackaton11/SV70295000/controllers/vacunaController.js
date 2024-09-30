// controllers/vacunaController.js
const Vacuna = require('../models/Vacuna');

// Obtener todas las vacunas
exports.getVacunas = async (req, res) => {
  try {
    const vacunas = await Vacuna.findAll();
    res.json(vacunas);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener las vacunas' });
  }
};

// Crear una nueva vacuna
exports.createVacuna = async (req, res) => {
  const { descripcion } = req.body;
  try {
    const nuevaVacuna = await Vacuna.create({ descripcion });
    res.status(201).json(nuevaVacuna);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear la vacuna' });
  }
};

// Actualizar una vacuna
exports.updateVacuna = async (req, res) => {
  const { id } = req.params;
  const { descripcion, activo } = req.body;
  try {
    const vacuna = await Vacuna.findByPk(id);
    if (!vacuna) {
      return res.status(404).json({ error: 'Vacuna no encontrada' });
    }
    vacuna.descripcion = descripcion;
    vacuna.activo = activo;
    await vacuna.save();
    res.json(vacuna);
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar la vacuna' });
  }
};

// Eliminar una vacuna
exports.deleteVacuna = async (req, res) => {
  const { id } = req.params;
  try {
    const vacuna = await Vacuna.findByPk(id);
    if (!vacuna) {
      return res.status(404).json({ error: 'Vacuna no encontrada' });
    }
    await vacuna.destroy();
    res.status(204).json();
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar la vacuna' });
  }
};
