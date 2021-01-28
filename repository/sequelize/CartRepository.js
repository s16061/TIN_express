const Sequelize = require('sequelize');
const ProductList = require("../../model/sequelize/ProductList");
const Product = require("../../model/sequelize/Product");

exports.getProductList = () => {
    return ProductList.findAll({include: [
        {
            model: Product,
            as: 'product',
            where: {
                id: Product_Id
            }
        }]
    });
};

exports.updateProductList = (productListID, productListData) => {
    const quantity = productListData.quantity;
    return ProductList.update(productListData, {where: {id: productListID }});
};

exports.deleteProductList = (productListID) => {
    return ProductList.destroy({
        where: { id: productListID }
    });

}; 