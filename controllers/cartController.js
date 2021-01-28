const CartRepository = require('../repository/sequelize/CartRepository');
const ProductRepository = require('../repository/sequelize/ProductRepository');





exports.showCartList = (req, res, next) => {
    let products, carts;
    CartRepository.getProductList()
        .then(product => {
            products = product;
            return ProductRepository.getProducts();
        })
        .then(carts => {
            res.render('pages/cart', {
                carts: carts,
                product: product,
                navLocation: 'cart'
            });
        });
}

exports.deleteProductList = (req, res, next) => {
    const productListID = req.params.productListID;
    CartRepository.deleteProductList(productListID)
    .then( () => {
        res.redirect('/cart');
    });
};