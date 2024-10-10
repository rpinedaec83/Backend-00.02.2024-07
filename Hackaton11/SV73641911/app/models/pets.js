module.exports = (sequelize, DataType) => {
    const Pet = sequelize.define("pet", {
        name: {
            type: DataType.STRING
        },
        breed: {
            type: DataType.STRING
        },
        age: {
            type: DataType.INTEGER
        }
    });

    return Pet;
};