// models/payment.js
const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema({
  OrderID: { type: mongoose.Schema.Types.ObjectId, ref: 'Order' },
  PaymentDate: Date,
  Amount: Number,
  PaymentMethod: String,
});

const Payment = mongoose.model('Payment', paymentSchema);

module.exports = Payment;
