const mongoose = require('mongoose');

const propertySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  hostId: {
    type: String,
    required: true,
  },
  price_per_night: {
    type: Number,
    required: true,
  },
  amenities: {
    type: [String],
    default: [],
  },
  
});

const Property = mongoose.model('Property', propertySchema);

module.exports = Property;
