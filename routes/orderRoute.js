const express = require('express');
const router = express.Router();

const orderControler = require('../controllers/orderController');

router.get('/', orderControler.getOrderList);

module.exports = router;

