const express = require('express');
const router = express.Router();

router.use('/guests', require('./guests/guests.routes'));
router.use('/payments', require('./payments/payments.routes'));
router.use('/properties', require('./properties/properties.routes'));
router.use('/hosts', require('./hosts/hosts.routes'));

module.exports = router;
