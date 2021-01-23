const CartRepository = require('../repository/sequelize/CartRepository');




exports.showCartList = (req, res, next) => {
    CartRepository.getProductList()
        .then(carts => {
            res.render('pages/cart', {
                carts: carts,
                navLocation: 'cart'
            });
        });
}