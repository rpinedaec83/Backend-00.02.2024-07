module.exports = (sequelize, DataType) => {
    const Ubigeo = sequelize.define("ubigeo", {
        ubigeo: {
            type: DataType.STRING
        },
        departamento: {
            type: DataType.STRING
        },
        provincia: {
            type: DataType.STRING
        },
        distrito: {
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

    return Ubigeo;
};