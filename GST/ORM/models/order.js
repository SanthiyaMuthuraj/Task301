
const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
    required: true,
  },
  restaurant: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'hotel',
    required: true,
  },
  items: [
    {
      itemName: String,
      quantity: {
        type: Number,
        default: 1,
      },
      price: Number,
    },
  ],
  status: {
    type: String,
    enum: ['Pending', 'Confirmed', 'In Progress', 'Out for Delivery', 'Delivered', 'Cancelled'],
    default: 'Pending',
  },
  totalAmount: {
    type: Number,
    default: 0,
  },
  deliveryAddress: {
    street: String,
    city: String,
    state: String,
    zipCode: String,
  },
  paymentMethod: {
    type: String,
    enum: ['Credit Card', 'Debit Card', 'Digital Wallet', 'Cash on Delivery'],
  },
}, { timestamps: true });

module.exports = mongoose.model('Order', OrderSchema);
