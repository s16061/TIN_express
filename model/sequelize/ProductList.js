const Sequelize = require('sequelize');
const sequelize = require('../../config/sequelize/sequelize');

const ProductList = sequelize.define('ProductList', {
   id: {
       type: Sequelize.INTEGER,
       autoIncrement: true,
       allowNull: false,
       primaryKey: true,
   },
   Product_id: {
       type: Sequelize.INTEGER,
       allowNull: false,
       foreignKey: true
   },
   Quantity: {
    type: Sequelize.INTEGER,
    allowNull: false
}
});

module.exports = ProductList;