const ProductRepository = require('../repository/sequelize/ProductRepository');




exports.showProductList = (req, res, next) => {
    ProductRepository.getProducts()
        .then(products => {
            res.render('pages/product-list', {
                products: products,
                navLocation: 'product'
            });
        });
}

exports.showAddProductForm = (req, res, next) => {
    res.render('pages/product-form', {
    product: {},
        pageTitle: 'Nowy produkt',
        formMode: 'createNew',
        btnLabel: 'Dodaj produkt',
        formAction: '/products/add',
        navLocation: 'product'
    });
}