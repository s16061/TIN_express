const Sequelize = require('sequelize');
const Product = require("../../model/sequelize/Product");
const ProductList = require('../../model/sequelize/ProductList');


exports.getProducts = () => {
    return Product.findAll({include: [
        {
            model: ProductList,
            as: 'productlist',
        }]
});
}




exports.getProductById = (productID) => {
    return Product.findByPk(productID);
};


exports.createProduct = (newProductData) => {
    console.log(JSON.stringify(newProductData));
    return Product.create({
        name: newProductData.name,
        price: newProductData.price   
    });
};

exports.updateProduct = (productID, productData) => {
    const name = productData.name;
    const price = productData.price;
    return Product.update(productData, {where: {id: productID }});
};

exports.deleteProduct = (productID) => {
    return Product.destroy({
        where: { Product_id: productID }
    });

}; 

exports.getProductList = () => {
    return Product.findAll({include: [
        {
            model: ProductList,
            as: 'productlist',


        }]
        
    });
};