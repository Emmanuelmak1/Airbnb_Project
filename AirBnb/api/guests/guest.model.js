const mongoose = require('mongoose');

// This is the Guest schema

const guestSchema = new mongoose.Schema({
  guestId: {
    type: String,

  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  phone: {
    type: String,
    
  },
});

// Creating the Guest model
const Guest = mongoose.model('Guest', guestSchema);

module.exports = Guest;
