const Sequelize = require('sequelize');
const sequelize = require('../../config/sequelize/sequelize');

const Payment = sequelize.define('Payment', {
   id: {
       type: Sequelize.INTEGER,
       autoIncrement: true,
       allowNull: false,
       primaryKey: true,
   },
   Type: {
       type: Sequelize.INTEGER,
       allowNull: false
   },
   Price: {
    type: Sequelize.DOUBLE,
    allowNull: false
},
    datePayment: {
        type: Sequelize.DATE,
        allowNull: false
    }
});

module.exports = Payment;