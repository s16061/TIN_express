const express = require('express');
const router = express.Router();

const cartControler = require('../controllers/cartController');
const productControler = require('../controllers/productController');


router.get('/', cartControler.showCartList);
router.get('/delete/:productListID', cartControler.deleteProductList);
//router.get('/add/:productID', cartControler.createFormProductList);
router.post('/add/:productID', cartControler.addProductList);



module.exports = router;


