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
       allowNull: false,
       validate: {
        notEmpty: {
            msg: "Pole jest wymagane"
        },
        len: {
            args: [2,60],
            msg: "Pole powinno zawierać od 2 do 60 znaków"
        }
    }
},


   price: {
    type: Sequelize.DOUBLE,
    allowNull: false,
    validate: {
        notEmpty: {
            msg: "Pole jest wymagane"
        }
}
   }


});


module.exports = Product;