const express = require('express');
const router = express.Router();

const accountControler = require('../controllers/accountController');

router.get('/', accountControler.showAccount);
router.get('/edit:accountID', accountControler.showEditAccount);


module.exports = router;


