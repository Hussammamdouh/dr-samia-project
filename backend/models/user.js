const mongoose = require('mongoose');
const bcrypt = require('bcryptjs'); // <-- Ensure bcrypt is required
const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
}, {
  timestamps: true,
});

// Hash the password before saving
userSchema.pre('save', async function(next) {
  if (!this.isModified('password')) {
    return next(); // If password is not modified, skip hashing
  }
  
  this.password = await bcrypt.hash(this.password, 10); // <-- Here you hash the password
  next();
});

// Compare the provided password with the hashed password
userSchema.methods.matchPassword = async function(enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

// Generate JWT token for authentication
userSchema.methods.generateAuthToken = function() {
  return jwt.sign({ id: this._id, isAdmin: this.isAdmin }, process.env.JWT_SECRET, {
    expiresIn: '30d',
  });
};

const User = mongoose.model('User', userSchema);

module.exports = User;
