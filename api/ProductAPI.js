const ProductRepository = require('../repository/sequelize/ProductRepository');

exports.getProducts = (req, res, next) => {
    ProductRepository.getProducts()
        .then(product => {
            res.status(200).json(product);
        })
        .catch(err => {
           console.log(err);
        });
};

exports.getProductByID = (req, res, next) => {
    const productID = req.params.productID;
    ProductRepository.getProductById(productID)
        .then(product => {
            if(!product) {
                res.status(404).json({
                    message: 'Product with id: '+productID+' not found'
                })
            } else {
                res.status(200).json(product);
            }
        });
};

exports.createProduct = (req, res, next) => {
    ProductRepository.createProduct(req.body)
        .then(newObj => {
           res.status(201).json(newObj);
        })
        .catch((err)=>{console.log(err)})
};

exports.updateProduct = (req, res, next) => {
    const productID = req.params.productID;
    ProductRepository.updateProduct(productID, req.body)
        .then(result => {
           res.status(200).json({message: 'Product updated!', product: result});
        })
        .catch(err => {
            if (!err.statusCode) {
                err.statusCode = 500;
            }
            next(err);
        });

};

exports.deleteProduct = (req, res, next) => {
    const productID = req.params.productID;
    ProductRepository.deleteProduct(productID)
        .then(result => {
            res.status(200).json({message: 'Removed product', product: result});
        })
        .catch(err => {
            if (!err.statusCode) {
                err.statusCode = 500;
            }
            next(err);
        });
};



