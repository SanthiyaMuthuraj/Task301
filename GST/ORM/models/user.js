
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  UserId:Int,
  UserName: String,
  Password: String,
  Email: String,
  Phone: String,
  Address: String,
});

const User = mongoose.model('User', userSchema);

module.exports = User;
