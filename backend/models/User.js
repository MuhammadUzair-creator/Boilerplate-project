const mongoose = require('mongoose');

// Define the schema for the User model
const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true, // Ensure email is unique
    lowercase: true, // Normalize email to lowercase
    trim: true, // Trim any extra spaces
  },
  password: {
    type: String,
    required: true,
  },
});

// Create the User model based on the schema
const User = mongoose.model('User', userSchema);

module.exports = User;
