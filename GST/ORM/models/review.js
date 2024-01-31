// models/review.js
const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
  UserID: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  RestaurantID: { type: mongoose.Schema.Types.ObjectId, ref: 'Restaurant' },
  Rating: Number,
  Comment: String,
  ReviewDate: Date,
});

const Review = mongoose.model('Review', reviewSchema);

module.exports = Review;
