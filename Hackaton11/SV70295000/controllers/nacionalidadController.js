// controllers/nacionalidadController.js
const Nacionalidad = require('../models/Nacionalidad');

// Obtener todas las nacionalidades
exports.getNacionalidades = async (req, res) => {
  try {
    const nacionalidades = await Nacionalidad.findAll();
    res.json(nacionalidades);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener nacionalidades' });
  }
};

// Crear una nueva nacionalidad
exports.createNacionalidad = async (req, res) => {
  const { descripcion } = req.body;
  try {
    const nuevaNacionalidad = await Nacionalidad.create({ descripcion });
    res.status(201).json(nuevaNacionalidad);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear nacionalidad' });
  }
};

// Actualizar una nacionalidad
exports.updateNacionalidad = async (req, res) => {
  const { id } = req.params;
  const { descripcion } = req.body;
  try {
    const nacionalidad = await Nacionalidad.findByPk(id);
    if (!nacionalidad) {
      return res.status(404).json({ error: 'Nacionalidad no encontrada' });
    }
    nacionalidad.descripcion = descripcion;
    await nacionalidad.save();
    res.json(nacionalidad);
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar nacionalidad' });
  }
};

// Eliminar una nacionalidad
exports.deleteNacionalidad = async (req, res) => {
  const { id } = req.params;
  try {
    const nacionalidad = await Nacionalidad.findByPk(id);
    if (!nacionalidad) {
      return res.status(404).json({ error: 'Nacionalidad no encontrada' });
    }
    await nacionalidad.destroy();
    res.status(204).json();
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar nacionalidad' });
  }
};
