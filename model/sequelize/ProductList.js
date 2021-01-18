const Sequelize = require('sequelize');
const sequelize = require('../../config/sequelize/sequelize');

const ProductList = sequelize.define('ProductList', {
   id: {
       type: Sequelize.INTEGER,
       autoIncrement: true,
       allowNull: false,
       primaryKey: true,
   },
   ProductId: {
       type: Sequelize.INTEGER,
       allowNull: false
   },
   Quantity: {
    type: Sequelize.INTEGER,
    allowNull: false
}
});

module.exports = ProductList;