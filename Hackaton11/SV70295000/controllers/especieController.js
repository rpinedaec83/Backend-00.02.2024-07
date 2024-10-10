const Especie = require('../models/especie');

//Obtener las Especies
exports.getEspecies = async (req, res) => {
    try{
        const especies = await Especie.findAll();
        res.json(especies);
    }catch (error){
        res.status(500).json({ error : 'Error al obtener especies' });
    }
};

//Crear una nueva especie
exports.createEspecie = async (req, res) =>{
    const {descripcion} = req.body;
    try{
        const NuevaEspecie = await Especie.create({ descripcion});
        res.status(201).json(NuevaEspecie);
    }catch (error) {
        res.status(500).json({ error: 'Error al crear la nueva especie'});
    }
};

//Actualizar una especie
exports.updateEspecie = async (req, res) =>{
    const {id} = req.params;
    const {descripcion} = req.body;
    try{
        const especie = await Especie.findByPk(id);
        if (!especie) {
            return res.status(404).json({ error: 'Especie no encontrada'});
        }
        especie.descripcion = descripcion;
    await especie.save();
    res.json(especie);
    } catch (error) {
        res.status(500).json({ error: 'Error al actualizar la especie'});
    }
};

//Eliminar una especie
exports.deleteEspecie = async (req, res) =>{
    const {id} = req.params;
    try{
        const especie = await Especie.findByPk(id);
        if (!especie) {
            return res.status(404).json({error: 'Especie no encontrada'});
        }
        await especie.destroy();
        res.status(204).json();
    }catch (error) {
        res.status(500).json({ error: 'Error al eliminar la especie'});
    }
};


//