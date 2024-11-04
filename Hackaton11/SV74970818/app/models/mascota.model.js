module.exports = (sequelize, DataType) => {
    const Mascota = sequelize.define("mascota", {
        nombre: {
            type: DataType.STRING
        },
        fechaNacimiento: {
            type: DataType.DATE
        },
        peso: {
            type: DataType.FLOAT
        },
        temperatura: {
            type: DataType.FLOAT
        },
        idEspecie: {
            type: DataType.INTEGER
        },
        idRaza: {
            type: DataType.INTEGER
        },
        idColor: {
            type: DataType.INTEGER
        },
        idSexo: {
            type: DataType.INTEGER
        },
        idPropietario: {
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

    return Mascota;
};