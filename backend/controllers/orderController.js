const Order = require('../models/Order');

const createOrder = async (req, res) => {
  const {
    orderItems,
    shippingAddress,
    paymentMethod,
    totalPrice,
  } = req.body;

  if (orderItems && orderItems.length === 0) {
    res.status(400).json({ message: 'No order items' });
    return;
  }

  const order = new Order({
    orderItems,
    shippingAddress,
    paymentMethod,
    totalPrice,
    user: req.user._id,
  });

  try {
    const createdOrder = await order.save();
    res.status(201).json(createdOrder);
  } catch (err) {
    res.status(500).json({ message: 'Error creating order' });
  }
};

// Update Order Status (Admin Only)
const updateOrderStatus = async (req, res) => {
  const { status } = req.body;

  const order = await Order.findById(req.params.id);

  if (!order) {
    res.status(404).json({ message: 'Order not found' });
    return;
  }

  order.orderStatus = status || order.orderStatus;
  try {
    const updatedOrder = await order.save();
    res.json(updatedOrder);
  } catch (err) {
    res.status(500).json({ message: 'Error updating order status' });
  }
};

const getOrders = async (req, res) => {
  try {
    const orders = await Order.find({}).populate('user', 'name email');
    res.json(orders);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

const getOrderById = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id).populate('user', 'name email');
    if (!order) {
      res.status(404).json({ message: 'Order not found' });
    }
    res.json(order);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = { createOrder, getOrders, getOrderById, updateOrderStatus };
