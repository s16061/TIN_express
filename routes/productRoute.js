const express = require('express');
const router = express.Router();

const productControler = require('../controllers/productController');

router.get('/', productControler.showProductList);
router.get('/add', productControler.showAddProductForm);

module.exports = router;


