// src/models/Restaurant.js
const mongoose = require('mongoose');

const RestaurantSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  menu: [
    {
      itemName: String,
      description: String,
      price: Number,
    },
  ],
  address: {
    street: String,
    city: String,
    state: String,
    zipCode: String,
  },
  contact: {
    phone: String,
    email: String,
  },
  openingHours: {
    type:String
  },
 
  
});

module.exports = mongoose.model('hotel', RestaurantSchema);
