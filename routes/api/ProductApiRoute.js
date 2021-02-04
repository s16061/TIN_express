const express = require('express');
const router = express.Router();

const ProductApiController = require('../../api/ProductAPI');

router.get('/', ProductApiController.showCartList);

router.post('/', ProductApiController.createProduct);
router.put('/:productID', ProductApiController.updateProduct);
router.delete('/:productID', ProductApiController.deleteProduct);
router.put('/productlist/:productID', ProductApiController.addProductList);





module.exports = router;