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

exports.showEditProductForm = (req, res, next) => {
    const productID = req.params.productID;
    ProductRepository.getProductById(productID)
        .then(product => {
            res.render('pages/product-form', {
                product: product,
                formMode: 'edit',
                pageTitle: 'Edycja produktu',
                btnLabel: 'Edytuj produkt',
                formAction: '/products/edit',
                navLocation: 'product'
            });
        });
};

exports.showProductDetails = (req, res, next) => {
    const productID = req.params.productID;
    ProductRepository.getProductById(productID)
        .then(product => {
            res.render('pages/product-form', {
                product: product,
                formMode: 'showDetails',
                pageTitle: 'Szczegóły produktu',
                formAction: '',
                navLocation: 'product'
            });
        });
}