module.exports = (sequelize, DataType) => {
    const Nacionalidad = sequelize.define("Nacionalidade", {
        descripcion: {
            type: DataType.STRING
        },
        activo: {
            type: DataType.BOOLEAN
        },
        usrCreacion: {
            type: DataType.INTEGER
        },
        usrModificacion: {
            type: DataType.INTEGER
        }
    });

    return Nacionalidad;
};