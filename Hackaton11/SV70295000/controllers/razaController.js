const Raza = require('../models/raza');

exports.getRazas = async (req, res) =>{
    try{
        const razas = await Raza.findAll();
        res.json(razas);
    }catch (error){
        res.status(500).json({error: 'Error al obtener las razas'});
    }
};

exports.createRaza = async (req,res) => {
    const {descripcion} = req.body;
    try{
        const NuevaRaza = await Raza.create({descripcion});
        res.status(201).json(NuevaRaza);
    }catch (error) {
        res.status(500).json({error: 'Error al crear una nueva raza'});
    }
};

exports.updateRaza = async (req,res) => {
    const {id} = req.params;
    const {descripcion} = req.body;
    try{
        const raza = await Raza.findByPk(id);
        if (!raza) {
            return res.status(404).json({ error: 'Raza no encontrada'});
        }
        raza.descripcion = descripcion;
        await raza.save();
        res.json(raza);
    }catch (error){
        res.status(500).json({error: 'Error al actualizar la raza'});
    }
};


exports.deleteRaza = async (req,res) => {
    const {id} = req.params;
    try {
        const raza = await Raza.findByPk(id);
        if (!raza) {
            return res.status(404).json({error: 'Error al encontrar la raza'});
        }
        await raza.destroy();
        res.status(204).json();
    }catch (error){
        res.status(500).json({error: 'Error al elminiar la raza'});
    }
};

//