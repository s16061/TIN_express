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


exports.updateProduct = (productID, productData) => {
    const name = productData.name;
    const price = productData.price;
    return Product.update(productData,
         {where: {Product_id: productID }});
};

exports.createProduct = (newProductData) => {
    console.log(JSON.stringify(newProductData));
    return Product.create({
        name: newProductData.name,
        price: newProductData.price   
    });
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

exports.addProductList2 = (productID) => {
    console.log(JSON.stringify(productID));
    return ProductList.create({
    Quantity: 1,
    product:{
    Product_Id: productID,
    }
},
    {
      include: [  {
        model: Product,
        as: 'product',
        required: true

    }]
    })
};