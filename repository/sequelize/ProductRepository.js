const Product = require("../../model/sequelize/Product");

exports.getProducts = () => {
    return Product.findAll();
};

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
        where: { id: productID }
    });

}; 