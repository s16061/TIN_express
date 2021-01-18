const Sequelize = require('sequelize');
const sequelize = require('../../config/sequelize/sequelize');

const Product = sequelize.define('Product', {
   id: {
       type: Sequelize.INTEGER,
       autoIncrement: true,
       allowNull: false,
       primaryKey: true,
   },
   name: {
       type: Sequelize.STRING,
       allowNull: false
   },
   price: {
    type: Sequelize.DOUBLE,
    allowNull: false
}
});


module.exports = Product;