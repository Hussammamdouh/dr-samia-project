const express = require('express');
const router = express.Router();
const { protect } = require('../middleware/authMiddleware');
const {
  createOrder,
  getOrders,
  getOrderById,
  updateOrderStatus,
} = require('../controllers/orderController');

router.route('/').post(protect, createOrder).get(protect, getOrders);
router.route('/:id').get(protect, getOrderById).put(protect, updateOrderStatus);

module.exports = router;
