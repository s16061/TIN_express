const sequelize = require('./sequelize');

const Product = require('../../model/sequelize/Product');
const User = require('../../model/sequelize/User');
const ProductList = require('../../model/sequelize/ProductList');
const Order = require('../../model/sequelize/Order');
const Payment = require('../../model/sequelize/Payment');

module.exports = () => {
    Order.hasMany(User, {as: 'user', foreignKey: {name: 'User_id', allowNull: false}, constraints: true, onDelete: 'CASCADE'});
    User.belongsTo(Order, {as: 'order_user', foreignKey: {name: 'User_id', allowNull: false} } );

    Order.hasMany(Payment, {as: 'payment', foreignKey: {name: 'Payment_id', allowNull: false}, constraints: true, onDelete: 'CASCADE'});
    Payment.belongsTo(Order, {as: 'order_payment', foreignKey: {name: 'Payment_id', allowNull: false} } );
    
    Order.hasMany(ProductList, {as: 'productlist', foreignKey: {name: 'ProductList_id', allowNull: false}, constraints: true, onDelete: 'CASCADE'});
    ProductList.belongsTo(Order, {as: 'order_productlist', foreignKey: {name: 'ProductList_id', allowNull: false} } );

    ProductList.hasMany(Product, {as: 'product', foreignKey: {name: 'Product_id', allowNull: false}, constraints: true, onDelete: 'CASCADE'});
    Product.belongsTo(ProductList, {as: 'productlist_product', foreignKey: {name: 'Product_id', allowNull: false} });

};
