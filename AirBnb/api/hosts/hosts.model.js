
const mongoose = require('mongoose');

const hostSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  properties_managed: {
    type: [Number],
    default: [],
  },
});

const Host = mongoose.model('Host', hostSchema);

module.exports = Host;
