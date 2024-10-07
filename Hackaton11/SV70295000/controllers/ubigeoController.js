// controllers/ubigeoController.js
const Ubigeo = require('../models/ubigeo');

// Obtener todos los ubigeos
exports.getUbigeos = async (req, res) => {
  try {
    const ubigeos = await Ubigeo.findAll();
    res.json(ubigeos);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener ubigeos' });
  }
};

// Crear un nuevo ubigeo
exports.createUbigeo = async (req, res) => {
  const { ubigeo, departamento, provincia, distrito } = req.body;
  try {
    const nuevoUbigeo = await Ubigeo.create({ ubigeo, departamento, provincia, distrito });
    res.status(201).json(nuevoUbigeo);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear ubigeo' });
  }
};

// Actualizar un ubigeo
exports.updateUbigeo = async (req, res) => {
  const { ubigeo } = req.params;
  const { departamento, provincia, distrito } = req.body;
  try {
    const ubigeoEncontrado = await Ubigeo.findByPk(ubigeo);
    if (!ubigeoEncontrado) {
      return res.status(404).json({ error: 'Ubigeo no encontrado' });
    }
    ubigeoEncontrado.departamento = departamento;
    ubigeoEncontrado.provincia = provincia;
    ubigeoEncontrado.distrito = distrito;
    await ubigeoEncontrado.save();
    res.json(ubigeoEncontrado);
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar ubigeo' });
  }
};

// Eliminar un ubigeo
exports.deleteUbigeo = async (req, res) => {
  const { ubigeo } = req.params;
  try {
    const ubigeoEncontrado = await Ubigeo.findByPk(ubigeo);
    if (!ubigeoEncontrado) {
      return res.status(404).json({ error: 'Ubigeo no encontrado' });
    }
    await ubigeoEncontrado.destroy();
    res.status(204).json();
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar ubigeo' });
  }
};
