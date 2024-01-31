// src/models/User.js
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
    
  },
  phoneNumber: {
    type: String,
 
  },
  address: {
    street: String,
    city: String,
    state: String,
    zipCode: String,
  },
  orders: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Order' }],
  
});

module.exports = mongoose.model('User', UserSchema);
