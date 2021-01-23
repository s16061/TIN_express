const express = require('express');
const router = express.Router();

const productControler = require('../controllers/productController');

router.get('/', productControler.showProductList);
router.get('/add', productControler.showAddProductForm);
router.get('/edit/:product.id', productControler.showEditProductForm);
router.get('/details/:product.id', productControler.showProductDetails);
module.exports = router;


