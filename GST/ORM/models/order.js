// models/order.js
const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  UserID: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  RestaurantID: { type: mongoose.Schema.Types.ObjectId, ref: 'Restaurant' },
  OrderDate: Date,
  TotalAmount: Number,
  OrderStatus: {
    type: String,
    enum: ['Pending', 'Processing', 'Delivered', 'Cancelled'],
    default: 'Pending',
  },
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
