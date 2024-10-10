module.exports = (sequelize, DataType) => {
    const Client = sequelize.define("client", {
        name: {
            type: DataType.STRING
        },
        lastname: {
            type: DataType.STRING
        },
        phone: {
            type: DataType.INTEGER
        }
    });

    return Client;
};