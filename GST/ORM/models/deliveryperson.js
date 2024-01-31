// models/deliveryperson.js
const mongoose = require('mongoose');

const deliveryPersonSchema = new mongoose.Schema({
  Name: String,
  Phone: String,
  VehicleDetails: String,
});

const DeliveryPerson = mongoose.model('DeliveryPerson', deliveryPersonSchema);

module.exports = DeliveryPerson;
