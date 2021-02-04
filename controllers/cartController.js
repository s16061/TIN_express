const CartRepository = require('../repository/sequelize/CartRepository');
const ProductRepository = require('../repository/sequelize/ProductRepository');





exports.showCartList = (req, res, next) => {
     CartRepository.getProductList() 
        .then(carts => {
            res.render('pages/cart', {
                carts: carts,
                navLocation: 'cart'
            });
        })

}



exports.deleteProductList = (req, res, next) => {
    const productListID = req.params.productListID;
    CartRepository.deleteProductList(productListID)
    .then( () => {
        res.redirect('/cart');
    });
};

/* 
exports.addProductList = (req, res, next) => {
    const productData = { ...req.body };
    CartRepository.addProductList(productData)
        .then( result => {
            res.redirect('/cart'); 
                });

};
*/

exports.addProductList = (req, res, next) => {
    const productID = req.body.Product_id;
    CartRepository.addProductList(productID)
    .then( result => {
        res.redirect('/cart');
    });
};


exports.createFormProductList = (req, res, next) => {
    const productID = req.params.productID;
    ProductRepository.getProductById(productID)
    .then(cart => {
        res.render('pages/cart/cart-form', {
            cart: cart,
            formMode: 'createNew',
            pageTitle: 'Dodawanie do koszyka',
            btnLabel: 'Dodaj do koszyka',
            formAction: '/cart/add',
            navLocation: 'cart',
        });
    });
};