const express = require('express');
const router = express.Router();

const productControler = require('../controllers/productController');

router.get('/', productControler.showProductList);
router.get('/cart', productControler.showCartList);
router.get('/add', productControler.showAddProductForm);
router.post('/add', productControler.createProduct);
router.post('/edit', productControler.updateProduct);
router.get('/delete/:productID', productControler.deleteProduct);
router.get('/edit/:productID', productControler.showEditProductForm);
router.get('/details/:productID', productControler.showProductDetails);
module.exports = router;


