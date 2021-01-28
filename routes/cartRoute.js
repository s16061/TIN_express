const express = require('express');
const router = express.Router();

const cartControler = require('../controllers/cartController');

router.get('/', cartControler.showCartList);
router.get('/delete/:productListID', cartControler.deleteProductList);

module.exports = router;


