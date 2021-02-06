const Sequelize = require('sequelize');
const ProductList = require("../../model/sequelize/ProductList");
const Product = require("../../model/sequelize/Product");

exports.getProductList = () => {
    return Product.findAll({include: [
        {
            model: ProductList,
            as: 'productlist',
            required: true

        }]
        
    });
};

exports.getCartList = () => {
    return ProductList.findAll({include: [
        {
            model: Product,
            as: 'product',
            required: true

        }]
        
    });
};
exports.updateProductList = (productListID, productListData) => {
    const Quantity = productListData.Quantity;
    return ProductList.update(productListData, {where: {id: productListID }});
};

exports.deleteProductList = (productListID) => {
    return ProductList.destroy({
        where: { id: productListID }
    });
}
/*
exports.addProductList = (newProductData) => {
    console.log(JSON.stringify(newProductData));
    return ProductList.create({
        Product_Id: newProductData.Product_Id,
        Quantity: 1
    });
};
*/
exports.addProductList = (productID) => {
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
