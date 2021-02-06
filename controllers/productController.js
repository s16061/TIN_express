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
        formMode: 'createNew',
        formAction: '/products/add',
        navLocation: 'product',
        validationErrors: []
    });
}

exports.showEditProductForm = (req, res, next) => {
    const productID = req.params.productID;
    ProductRepository.getProductById(productID)
        .then(product => {
            res.render('pages/product-form', {
                product: product,
                formMode: 'edit',
                formAction: '/products/edit',
                navLocation: 'product',
                validationErrors: []
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
                formAction: '/products/details',
                navLocation: 'product',
                validationErrors: []
            });
        });
}

exports.createProduct = (req, res, next) => {
    const productData = { ...req.body };
    ProductRepository.createProduct(productData)
        .then( result => {
            res.redirect('/products'); 
        })
        .catch(err => {
            res.render('pages/product-form', {
                product: {},
                    formMode: 'createNew',
                    formAction: '/products/add',
                    navLocation: 'product',
                    validationErrors: err.errors
                });
            });
};

exports.updateProduct = (req, res, next) => {
    const productID = req.body.id;
    const ProductData = { ...req.body };
    ProductRepository.updateProduct(productID, ProductData)
    .then( result => {
        res.redirect('/products');
    });
};

exports.deleteProduct = (req, res, next) => {
    const productID = req.params.productID;
    ProductRepository.deleteProduct(productID)
    .then( () => {
        res.redirect('/products');
    });
};


exports.showCartList = (req, res, next) => {

    ProductRepository.getProductList() 
    .then(products => {
        res.render('pages/cart', {
            products: products,
            navLocation: 'product'
        });
    })

}

exports.addProductList2 = (req, res, next) => {
    const productID = { ...req.body };
    CartRepository.addProductList(productID)
    .then( result => {
        res.redirect('/cart');
    });
};

