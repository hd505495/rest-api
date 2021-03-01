const mongoose = require('mongoose');

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
  }

  // geoJSON location info
});

module.exports = new mongoose.model('User', userSchema);
