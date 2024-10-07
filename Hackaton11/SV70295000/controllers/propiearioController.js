// controllers/propietarioController.js
const Propietario = require('../models/propietario');

// Obtener todos los propietarios
exports.getPropietarios = async (req, res) => {
  try {
    const propietarios = await Propietario.findAll();
    res.json(propietarios);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener propietarios' });
  }
};

// Crear un nuevo propietario
exports.createPropietario = async (req, res) => {
  const { nombres, apellidos, email, telefono, ubigeo, direccion, idNacionalidad } = req.body;
  try {
    const nuevoPropietario = await Propietario.create({ nombres, apellidos, email, telefono, ubigeo, direccion, idNacionalidad });
    res.status(201).json(nuevoPropietario);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear propietario' });
  }
};

// Actualizar un propietario
exports.updatePropietario = async (req, res) => {
  const { id } = req.params;
  const { nombres, apellidos, email, telefono, ubigeo, direccion, idNacionalidad } = req.body;
  try {
    const propietario = await Propietario.findByPk(id);
    if (!propietario) {
      return res.status(404).json({ error: 'Propietario no encontrado' });
    }
    propietario.nombres = nombres;
    propietario.apellidos = apellidos;
    propietario.email = email;
    propietario.telefono = telefono;
    propietario.ubigeo = ubigeo;
    propietario.direccion = direccion;
    propietario.idNacionalidad = idNacionalidad;
    await propietario.save();
    res.json(propietario);
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar propietario' });
  }
};

// Eliminar un propietario
exports.deletePropietario = async (req, res) => {
  const { id } = req.params;
  try {
    const propietario = await Propietario.findByPk(id);
    if (!propietario) {
      return res.status(404).json({ error: 'Propietario no encontrado' });
    }
    await propietario.destroy();
    res.status(204).json();
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar propietario' });
  }
};
