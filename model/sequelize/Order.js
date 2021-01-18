const Sequelize = require('sequelize');
const sequelize = require('../../config/sequelize/sequelize');

const Order = sequelize.define('Order', {
   id: {
       type: Sequelize.INTEGER,
       autoIncrement: true,
       allowNull: false,
       primaryKey: true,
   },
   User_id: {
       type: Sequelize.INTEGER,
       allowNull: false
   },
   ProductList_id: {
    type: Sequelize.INTEGER,
    allowNull: false
},
Payment_id: {
    type: Sequelize.INTEGER,
    allowNull: false
},
Price: {
    type: Sequelize.DOUBLE,
    allowNull: false
}
});

module.exports = Order;