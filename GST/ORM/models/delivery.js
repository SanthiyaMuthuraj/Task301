// models/delivery.js
const mongoose = require('mongoose');

const deliverySchema = new mongoose.Schema({
  OrderID: { type: mongoose.Schema.Types.ObjectId, ref: 'Order' },
  DeliveryPersonID: { type: mongoose.Schema.Types.ObjectId, ref: 'DeliveryPerson' },
  DeliveryStatus: String,
  EstimatedDeliveryTime: Date,
  ActualDeliveryTime: Date,
});

const Delivery = mongoose.model('Delivery', deliverySchema);

module.exports = Delivery;
