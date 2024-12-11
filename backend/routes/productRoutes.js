const express = require('express');
const router = express.Router();
const { protect, admin } = require('../middleware/authMiddleware');
const { getProducts, getProductById, createProduct } = require('../controllers/productController');

/**
 * @swagger
 * /api/products:
 *   get:
 *     summary: Get all products
 *     description: Retrieve a list of all products.
 *     responses:
 *       200:
 *         description: A list of products
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Product'
 */
router.route('/').get(getProducts);

/**
 * @swagger
 * /api/products/{id}:
 *   get:
 *     summary: Get product by ID
 *     description: Retrieve product details by product ID.
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: Product ID
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Product details retrieved successfully
 *       404:
 *         description: Product not found
 */
router.route('/:id').get(getProductById);

/**
 * @swagger
 * /api/products:
 *   post:
 *     summary: Create a new product
 *     description: Create a new product (admin only).
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: body
 *         name: product
 *         description: Product details to create
 *         schema:
 *           type: object
 *           required:
 *             - name
 *             - price
 *             - category
 *             - countInStock
 *           properties:
 *             name:
 *               type: string
 *               example: "Laptop"
 *             price:
 *               type: number
 *               example: 999.99
 *             category:
 *               type: string
 *               example: "Electronics"
 *             countInStock:
 *               type: number
 *               example: 50
 *     responses:
 *       201:
 *         description: Product created successfully
 *       400:
 *         description: Invalid input or missing required fields
 */
router.route('/').post(protect, admin, createProduct);

module.exports = router;
