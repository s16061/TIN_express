const express = require('express');
const router = express.Router();

const accountControler = require('../controllers/accountController');

router.get('/', accountControler.showAccount);

module.exports = router;


