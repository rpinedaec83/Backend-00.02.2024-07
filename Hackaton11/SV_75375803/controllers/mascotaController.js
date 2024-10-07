const Mascota = require('../models/mascotaModel');

const getAllMascotas = (req, res) => {
    Mascota.getAllMascotas((err, results) => {
        if (err) {
            res.status(500).send('Error al obtener las mascotas');
        } else {
            res.json(results);
        }
    });
};

const getMascotaById = (req, res) => {
    const id = req.params.id;
    Mascota.getMascotaById(id, (err, result) => {
        if (err) {
            res.status(500).send('Error al obtener la mascota');
        } else if (!result) {
            res.status(404).send('Mascota no encontrada');
        } else {
            res.json(result);
        }
    });
};

const createMascota = (req, res) => {
    const mascotaData = {
        nombre: req.body.nombre,
        fechaNacimiento: req.body.fechaNacimiento,
        peso: req.body.peso,
        temperatura: req.body.temperatura,
        idEspecie: req.body.idEspecie,
        idRaza: req.body.idRaza,
        idColor: req.body.idColor,
        idSexo: req.body.idSexo,
        idPropietario: req.body.idPropietario,
        usrCreacion: req.body.usrCreacion
    };
    Mascota.createMascota(mascotaData, (err, insertId) => {
        if (err) {
            res.status(500).send('Error al crear la mascota');
        } else {
            res.status(201).json({ id: insertId });
        }
    });
};

const updateMascota = (req, res) => {
    const id = req.params.id;
    const mascotaData = req.body;
    Mascota.updateMascota(id, mascotaData, (err, result) => {
        if (err) {
            res.status(500).send('Error al actualizar la mascota');
        } else {
            res.status(200).send(`Mascota con ID: ${id} actualizada`);
        }
    });
};

const deleteMascota = (req, res) => {
    const id = req.params.id;
    Mascota.deleteMascota(id, (err, result) => {
        if (err) {
            res.status(500).send('Error al eliminar la mascota');
        } else {
            res.status(200).send(`Mascota con ID: ${id} eliminada`);
        }
    });
};

module.exports = {
    getAllMascotas,
    getMascotaById,
    createMascota,
    updateMascota,
    deleteMascota
};
