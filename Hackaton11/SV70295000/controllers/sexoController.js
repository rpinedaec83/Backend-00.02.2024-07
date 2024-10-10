// controllers/sexoController.js
const Sexo = require('../models/sexo');

// Obtener todos los sexos
exports.getSexos = async (req, res) => {
  try {
    const sexos = await Sexo.findAll();
    res.json(sexos);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener sexos' });
  }
};

// Crear un nuevo sexo
exports.createSexo = async (req, res) => {
  const { descripcion } = req.body;
  try {
    const nuevoSexo = await Sexo.create({ descripcion });
    res.status(201).json(nuevoSexo);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear sexo' });
  }
};

// Actualizar un sexo
exports.updateSexo = async (req, res) => {
  const { id } = req.params;
  const { descripcion } = req.body;
  try {
    const sexo = await Sexo.findByPk(id);
    if (!sexo) {
      return res.status(404).json({ error: 'Sexo no encontrado' });
    }
    sexo.descripcion = descripcion;
    await sexo.save();
    res.json(sexo);
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar sexo' });
  }
};

// Eliminar un sexo
exports.deleteSexo = async (req, res) => {
  const { id } = req.params;
  try {
    const sexo = await Sexo.findByPk(id);
    if (!sexo) {
      return res.status(404).json({ error: 'Sexo no encontrado' });
    }
    await sexo.destroy();
    res.status(204).json();
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar sexo' });
  }
};
