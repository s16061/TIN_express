const express = require('express');
const router = express.Router();

const ProductApiController = require('../../api/ProductAPI');

router.get('/', ProductApiController.getProducts);
router.get('/:productID', ProductApiController.getProductByID);
router.post('/', ProductApiController.createProduct);
router.put('/:productID', ProductApiController.updateProduct);
router.delete('/:productID', ProductApiController.deleteProduct);



module.exports = router;