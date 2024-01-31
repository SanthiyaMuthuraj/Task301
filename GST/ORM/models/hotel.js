// models/restaurant.js
const mongoose = require('mongoose');

const restaurantSchema = new mongoose.Schema({
  RestaurantID:Int,
  Name: String,
  Description: String,
  Location: String,
  Rating: Number,
  DeliveryTime: Number,
});

const Restaurant = mongoose.model('Restaurant', restaurantSchema);

module.exports = Restaurant;
