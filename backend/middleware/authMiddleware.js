const jwt = require('jsonwebtoken');
const User = require('../models/User');

const protect = async (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1]; // Bearer token

  if (!token) {
    return res.status(401).json({ message: 'Not authorized, no token' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = await User.findById(decoded.id).select('-password');

    if (req.user.isAdmin) {
      next(); // Allow admin to proceed
    } else {
      res.status(401).json({ message: 'Not authorized as admin' });
    }
  } catch (err) {
    res.status(401).json({ message: 'Not authorized' });
  }
};

module.exports = { protect };
