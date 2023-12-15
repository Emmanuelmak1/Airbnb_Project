const express = require('express');
const router = express.Router();
const propertiesController = require('./properties.controller');

router.get('/', propertiesController.getAllProperties);
router.get('/:id', propertiesController.getPropertyById);
router.post('/', propertiesController.addNewProperty);
router.put('/:id', propertiesController.updatePropertyById);
router.delete('/:id', propertiesController.deletePropertyById);

module.exports = router;
