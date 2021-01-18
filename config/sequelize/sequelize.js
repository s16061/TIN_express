const Sequelize = require('sequelize');

const sequelize = new Sequelize('16061-tin', 'root', 'root', {
    dialect: 'mysql',
    host: 'localhost',
    define: {
        timestamps: false,
        freezeTableName: true
      }
});

module.exports = sequelize;