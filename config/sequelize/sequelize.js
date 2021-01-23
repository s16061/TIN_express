const Sequelize = require('sequelize');

const sequelize = new Sequelize('s16061-tin', 'root', 'root', {
    dialect: 'mysql',
    host: 'localhost',
    define: {
        timestamps: false,
        freezeTableName: true,
        underscored: false
      }
});

module.exports = sequelize;