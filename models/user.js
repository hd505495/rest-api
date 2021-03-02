const mongoose = require('mongoose');

// geolocation schema
const geoSchema = new mongoose.Schema({
  type: {
    type: String,
    default: "Point"
  },
  coordinates: {
    type: [Number],
    index: "2dsphere"
  }
})

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name field required']
  },
  username: {
    type: String,
    required: [true, 'Username field required']
  },
  email: {
    type: String,
    required: [true, 'Email field required']
  },
  geometry: geoSchema
});

module.exports = new mongoose.model('User', userSchema);
