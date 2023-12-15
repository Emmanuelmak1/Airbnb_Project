
const mongoose = require('mongoose');
const Property = require('./property.model');

const getAllProperties = async (req, res) => {
  try {
    const properties = await Property.find();
    res.json(properties);
  } catch (error) {
    console.error('Error fetching properties:', error);
    res.status(500).send('Internal Server Error');
  }
};

const getPropertyById = async (req, res) => {
  const { id } = req.params;
  try {
    
    const property = await Property.findOne({ propertyId: id });

    
    if (!property) {
      return res.status(404).json({ message: 'Property not found' });
    }

    
    res.json(property);
  } catch (error) {
    console.error('Error fetching Property by ID:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};



const addNewProperty = async (req, res) => {
  try {
    const newPropertyData = req.body;
    const newProperty = await Property.create(newPropertyData);
    res.status(201).json(newProperty);
  } catch (error) {
    console.error('Error adding a new property:', error);
    res.status(500).send('Internal Server Error');
  }
};

const updatePropertyById = async (req, res) => {
  const propertyId = req.params.id;

  try {
    const updatedProperty = await Property.findByIdAndUpdate(propertyId, req.body, { new: true });

    if (!updatedProperty) {
      return res.status(404).json({ message: 'Property not found' });
    }

    res.json(updatedProperty);
  } catch (error) {
    console.error(`Error updating property by ID ${propertyId}:`, error);
    res.status(500).send('Internal Server Error');
  }
};

const deletePropertyById = async (req, res) => {
  const propertyId = req.params.id;

  try {
    const deletedProperty = await Property.findByIdAndDelete(propertyId);

    if (!deletedProperty) {
      return res.status(404).json({ message: 'Property not found' });
    }

    res.json(deletedProperty);
  } catch (error) {
    console.error(`Error deleting property by ID ${propertyId}:`, error);
    res.status(500).send('Internal Server Error');
  }
};
  
  module.exports = {
    getAllProperties,
    getPropertyById,
    addNewProperty,
    updatePropertyById,
    deletePropertyById,
  };
  