const express = require('express');
const router = express.Router();
const paymentsController = require('./payments.controller');

router.get('/', paymentsController.getAllPayments);
router.get('/:id', paymentsController.getPaymentById);
router.post('/', paymentsController.addNewPayment);
router.put('/:id', paymentsController.updatePaymentById);
router.delete('/:id', paymentsController.deletePaymentById);

module.exports = router;
