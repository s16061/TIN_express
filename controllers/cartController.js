const CartRepository = require('../repository/sequelize/CartRepository');
const ProductRepository = require('../repository/sequelize/ProductRepository');





exports.showCartList = (req, res, next) => {
    CartRepository.getProductList()
        .then(carts => {
            res.render('pages/cart', {
                carts: carts,
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