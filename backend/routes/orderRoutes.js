const express = require('express');
const router = express.Router();
const { protect, admin } = require('../middleware/authMiddleware');
const {
  createOrder,
  getOrders,
  getOrderById,
  updateOrderStatus,
} = require('../controllers/orderController');

/**
 * @swagger
 * /api/orders:
 *   post:
 *     summary: Create a new order
 *     description: Place a new order with items and shipping details.
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: body
 *         name: order
 *         description: The order details
 *         schema:
 *           type: object
 *           required:
 *             - orderItems
 *             - shippingAddress
 *             - paymentMethod
 *             - totalPrice
 *           properties:
 *             orderItems:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   product:
 *                     type: string
 *                     example: 60c72b2f9eb2ad002f2b0d19
 *                   quantity:
 *                     type: integer
 *                     example: 2
 *             shippingAddress:
 *               type: object
 *               properties:
 *                 address:
 *                   type: string
 *                   example: "123 Main St"
 *                 city:
 *                   type: string
 *                   example: "New York"
 *                 postalCode:
 *                   type: string
 *                   example: "10001"
 *                 country:
 *                   type: string
 *                   example: "USA"
 *             paymentMethod:
 *               type: string
 *               example: "PayPal"
 *             totalPrice:
 *               type: number
 *               example: 99.99
 *     responses:
 *       201:
 *         description: Order created successfully
 *       400:
 *         description: Invalid input or missing required fields
 */
router.route('/').post(protect, createOrder);

/**
 * @swagger
 * /api/orders:
 *   get:
 *     summary: Get all orders
 *     description: Get a list of all orders.
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: A list of orders
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Order'
 */
router.route('/').get(protect, admin, getOrders);

/**
 * @swagger
 * /api/orders/{id}:
 *   get:
 *     summary: Get order by ID
 *     description: Retrieve order details by order ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Order ID
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Order details retrieved successfully
 *       404:
 *         description: Order not found
 */
router.route('/:id').get(protect, admin, getOrderById);

/**
 * @swagger
 * /api/orders/{id}/status:
 *   put:
 *     summary: Update order status
 *     description: Update the status of an order (e.g., from 'Pending' to 'Shipped').
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Order ID
 *         schema:
 *           type: string
 *       - in: body
 *         name: status
 *         description: The new order status
 *         schema:
 *           type: object
 *           required:
 *             - status
 *           properties:
 *             status:
 *               type: string
 *               example: "Shipped"
 *     responses:
 *       200:
 *         description: Order status updated successfully
 *       404:
 *         description: Order not found
 *       400:
 *         description: Invalid status
 */
router.route('/:id/status').put(protect, admin, updateOrderStatus);

module.exports = router;
