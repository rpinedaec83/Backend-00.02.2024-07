module.exports = (sequelize, DataType) => {
    const Historial = sequelize.define("Historial", {
        rol: {
            type: DataType.STRING
        },
        mensaje: {
            type: DataType.STRING
        },
    });

    return Historial;
};