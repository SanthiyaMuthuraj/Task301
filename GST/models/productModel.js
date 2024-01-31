const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: String,
    totalAmount: Number,
    taxSlab: Number,
    gstAmount: Number,
    netPrice: Number
});

module.exports = mongoose.model('Product', productSchema);
