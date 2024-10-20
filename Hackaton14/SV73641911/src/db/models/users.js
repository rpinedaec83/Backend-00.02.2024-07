module.exports = (sequelize, DataType) => {
    const User = sequelize.define("user", {
        name: {
            type: DataType.STRING
        }
    });

    return User;
};