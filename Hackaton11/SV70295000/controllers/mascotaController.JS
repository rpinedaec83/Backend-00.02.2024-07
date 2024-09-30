// controllers/mascotaController.js
const Mascota = require('../models/mascota');

// Obtener todas las mascotas
exports.getMascotas = async (req, res) => {
  try {
    const mascotas = await Mascota.findAll();
    res.json(mascotas);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener mascotas' });
  }
};

// Crear una nueva mascota
exports.createMascota = async (req, res) => {
  const { nombre, fechaNacimiento, peso, temperatura, idEspecie, idRaza, idColor, idSexo, idPropietario } = req.body;
  try {
    const nuevaMascota = await Mascota.create({ nombre, fechaNacimiento, peso, temperatura, idEspecie, idRaza, idColor, idSexo, idPropietario });
    res.status(201).json(nuevaMascota);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear mascota' });
  }
};

// Actualizar una mascota
exports.updateMascota = async (req, res) => {
  const { id } = req.params;
  const { nombre, fechaNacimiento, peso, temperatura, idEspecie, idRaza, idColor, idSexo, idPropietario } = req.body;
  try {
    const mascota = await Mascota.findByPk(id);
    if (!mascota) {
      return res.status(404).json({ error: 'Mascota no encontrada' });
    }
    mascota.nombre = nombre;
    mascota.fechaNacimiento = fechaNacimiento;
    mascota.peso = peso;
    mascota.temperatura = temperatura;
    mascota.idEspecie = idEspecie;
    mascota.idRaza = idRaza;
    mascota.idColor = idColor;
    mascota.idSexo = idSexo;
    mascota.idPropietario = idPropietario;
    await mascota.save();
    res.json(mascota);
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar mascota' });
  }
};

// Eliminar una mascota
exports.deleteMascota = async (req, res) => {
  const { id } = req.params;
  try {
    const mascota = await Mascota.findByPk(id);
    if (!mascota) {
      return res.status(404).json({ error: 'Mascota no encontrada' });
    }
    await mascota.destroy();
    res.status(204).json();
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar mascota' });
  }
};
