// controllers/mascotaVacunaController.js
const MascotaVacuna = require('../models/MascotaVacuna');

// Obtener todas las vacunas aplicadas a mascotas
exports.getMascotaVacunas = async (req, res) => {
  try {
    const mascotaVacunas = await MascotaVacuna.findAll();
    res.json(mascotaVacunas);
  } catch (error) {
    res.status(500).json({ error: 'Error al obtener las vacunas aplicadas a las mascotas' });
  }
};

// Crear un registro de vacuna aplicada a una mascota
exports.createMascotaVacuna = async (req, res) => {
  const { idMascota, idVacuna, fechaAplicacion } = req.body;
  try {
    const nuevaMascotaVacuna = await MascotaVacuna.create({ idMascota, idVacuna, fechaAplicacion });
    res.status(201).json(nuevaMascotaVacuna);
  } catch (error) {
    res.status(500).json({ error: 'Error al registrar la vacuna de la mascota' });
  }
};

// Actualizar un registro de vacuna
exports.updateMascotaVacuna = async (req, res) => {
  const { id } = req.params;
  const { idMascota, idVacuna, fechaAplicacion } = req.body;
  try {
    const mascotaVacuna = await MascotaVacuna.findByPk(id);
    if (!mascotaVacuna) {
      return res.status(404).json({ error: 'Registro de vacuna no encontrado' });
    }
    mascotaVacuna.idMascota = idMascota;
    mascotaVacuna.idVacuna = idVacuna;
    mascotaVacuna.fechaAplicacion = fechaAplicacion;
    await mascotaVacuna.save();
    res.json(mascotaVacuna);
  } catch (error) {
    res.status(500).json({ error: 'Error al actualizar el registro de vacuna' });
  }
};

// Eliminar un registro de vacuna
exports.deleteMascotaVacuna = async (req, res) => {
  const { id } = req.params;
  try {
    const mascotaVacuna = await MascotaVacuna.findByPk(id);
    if (!mascotaVacuna) {
      return res.status(404).json({ error: 'Registro de vacuna no encontrado' });
    }
    await mascotaVacuna.destroy();
    res.status(204).json();
  } catch (error) {
    res.status(500).json({ error: 'Error al eliminar el registro de vacuna' });
  }
};
