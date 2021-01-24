const CartRepository = require('../repository/sequelize/CartRepository');




exports.showCartList = (req, res, next) => {
    let product, carts;
    CartRepository.getProductList()
        .then(product => {
            product = product;
            return CartRepository.getProductList();
        })
        .then(carts => {
            res.render('pages/cart', {
                carts: carts,
                product: product,
                navLocation: 'cart'
            });
        });
}