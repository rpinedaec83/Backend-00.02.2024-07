const MascotaVacuna = require('../models/mascotaVacunaModel');

const getAllMascotaVacunas = (req, res) => {
    MascotaVacuna.getAllMascotaVacunas((err, results) => {
        if (err) {
            res.status(500).send('Error al obtener las vacunas de las mascotas');
        } else {
            res.json(results);
        }
    });
};

const getMascotaVacunaById = (req, res) => {
    const id = req.params.id;
    MascotaVacuna.getMascotaVacunaById(id, (err, result) => {
        if (err) {
            res.status(500).send('Error al obtener la vacuna de la mascota');
        } else if (!result) {
            res.status(404).send('Vacuna de mascota no encontrada');
        } else {
            res.json(result);
        }
    });
};

const createMascotaVacuna = (req, res) => {
    const mascotaVacunaData = {
        idMascota: req.body.idMascota,
        idVacuna: req.body.idVacuna,
        fechaAplicacion: req.body.fechaAplicacion,
        usrCreacion: req.body.usrCreacion
    };
    MascotaVacuna.createMascotaVacuna(mascotaVacunaData, (err, insertId) => {
        if (err) {
            res.status(500).send('Error al crear la vacuna para la mascota');
        } else {
            res.status(201).json({ id: insertId });
        }
    });
};

const updateMascotaVacuna = (req, res) => {
    const id = req.params.id;
    const mascotaVacunaData = req.body;
    MascotaVacuna.updateMascotaVacuna(id, mascotaVacunaData, (err, result) => {
        if (err) {
            res.status(500).send('Error al actualizar la vacuna de la mascota');
        } else {
            res.status(200).send(`Vacuna de mascota con ID: ${id} actualizada`);
        }
    });
};

const deleteMascotaVacuna = (req, res) => {
    const id = req.params.id;
    MascotaVacuna.deleteMascotaVacuna(id, (err, result) => {
        if (err) {
            res.status(500).send('Error al eliminar la vacuna de la mascota');
        } else {
            res.status(200).send(`Vacuna de mascota con ID: ${id} eliminada`);
        }
    });
};

module.exports = {
    getAllMascotaVacunas,
    getMascotaVacunaById,
    createMascotaVacuna,
    updateMascotaVacuna,
    deleteMascotaVacuna
};
