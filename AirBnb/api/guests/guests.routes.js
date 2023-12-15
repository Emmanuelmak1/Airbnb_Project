const express = require('express');
const router = express.Router();
const guestsController = require('./guests.controller');

router.get('/', guestsController.getAllGuests);
router.get('/:id', guestsController.getGuestById);
router.post('/', guestsController.addNewGuest);
router.put('/:id', guestsController.updateGuestById);
router.delete('/:id', guestsController.deleteGuestById);


module.exports = router;
