const express = require('express');
const router = express.Router();
const hostsController = require('./hosts.controller');

router.get('/', hostsController.getAllHosts);
router.get('/:id', hostsController.getHostById);
router.post('/', hostsController.addNewHost);
router.put('/:id', hostsController.updateHostById);
router.delete('/:id', hostsController.deleteHostById);

module.exports = router;
