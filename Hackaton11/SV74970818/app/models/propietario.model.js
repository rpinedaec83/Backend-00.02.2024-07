module.exports = (sequelize, DataType) => {
    const Propietario = sequelize.define("propietario", {
        nombres: {
            type: DataType.STRING
        },
        apellidos: {
            type: DataType.STRING
        },
        email: {
            type: DataType.STRING
        },
        telefono: {
            type: DataType.STRING
        },
        idUbigeo: {
            type: DataType.INTEGER
        },
        direccion: {
            type: DataType.STRING
        },
        idNacionalidad: {
            type: DataType.INTEGER
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

    return Propietario;
};