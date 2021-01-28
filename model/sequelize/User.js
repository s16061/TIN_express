const Sequelize = require('sequelize');
const sequelize = require('../../config/sequelize/sequelize');

const User = sequelize.define('User', {
   id: {
       type: Sequelize.INTEGER,
       autoIncrement: true,
       allowNull: false,
       primaryKey: true,
   },
   Name: {
       type: Sequelize.STRING,
       allowNull: false
   },
   Surname: {
       type: Sequelize.STRING,
       allowNull: false
   },
   Phone: {
    type: Sequelize.INTEGER,
    allowNull: false
},
   email: {
       type: Sequelize.STRING,
       allowNull: false,
       unique: true
   },
   password: {
    type: Sequelize.STRING,
     allowNull: false
 }
});

module.exports = User;