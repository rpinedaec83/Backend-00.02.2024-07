const Raza = require('../models/Raza'); // Asegúrate de que la ruta sea correcta

// Crear una nueva raza
exports.createRaza = async (req, res) => {
  try {
    const nuevaRaza = await Raza.create(req.body);
    res.status(201).json(nuevaRaza);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Obtener todas las razas
exports.getAllRazas = async (req, res) => {
  try {
    const razas = await Raza.findAll();
    res.status(200).json(razas);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Obtener una raza por ID
exports.getRazaById = async (req, res) => {
  try {
    const raza = await Raza.findByPk(req.params.id);
    if (raza) {
      res.status(200).json(raza);
    } else {
      res.status(404).json({ error: 'Raza no encontrada' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Actualizar una raza
exports.updateRaza = async (req, res) => {
  try {
    const [updated] = await Raza.update(req.body, {
      where: { id: req.params.id }
    });
    if (updated) {
      const updatedRaza = await Raza.findByPk(req.params.id);
      res.status(200).json(updatedRaza);
    } else {
      res.status(404).json({ error: 'Raza no encontrada' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Eliminar una raza
exports.deleteRaza = async (req, res) => {
  try {
    const deleted = await Raza.destroy({
      where: { id: req.params.id }
    });
    if (deleted) {
      res.status(204).send();
    } else {
      res.status(404).json({ error: 'Raza no encontrada' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};