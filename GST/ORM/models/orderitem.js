// models/menu.js
const mongoose = require('mongoose');

const menuSchema = new mongoose.Schema({
  RestaurantID: { type: mongoose.Schema.Types.ObjectId, ref: 'Restaurant' },
  Name: String,
  Description: String,
  Price: Number,
});

const Menu = mongoose.model('Menu', menuSchema);

module.exports = Menu;
