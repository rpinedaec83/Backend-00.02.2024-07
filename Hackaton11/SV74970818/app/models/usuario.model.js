module.exports = (sequelize, DataType) => {
    const Usuario = sequelize.define("usuario", {
        username: {
            type: DataType.STRING
        },
        password: {
            type: DataType.STRING
        },
        email: {
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

    return Usuario;
};