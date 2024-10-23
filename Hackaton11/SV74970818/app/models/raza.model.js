module.exports = (sequelize, DataType) => {
    const Raza = sequelize.define("raza", {
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

    return Raza;
};