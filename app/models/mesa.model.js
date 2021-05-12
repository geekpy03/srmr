// Definimos nuestro modelo mensa como tabla en la base de datos 
module.exports = (sequelize, Sequelize) => {
    const Mesa = sequelize.define("Mesa", {
        id: {
            type: Sequelize.BIGINT,
            primaryKey: true,
            autoIncrement: true
        },
        nombre: {
            type: Sequelize.STRING
        },
        posicion: {
            type: Sequelize.GEOMETRY('POINT')
        },
        planta: {
            type: Sequelize.BIGINT,
            defaultValue: 1
        },
        capacidad: {
            type: Sequelize.BIGINT
        }
    });
    return Mesa;
};