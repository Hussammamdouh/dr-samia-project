const express = require('express');
const router = express.Router();
const { getProducts, getProductById, createProduct } = require('../controllers/productController');
const { protect } = require('../middleware/authMiddleware');

router.route('/').get(getProducts);
router.route('/:id').get(getProductById);

// Admin Route
router.route('/').post(protect, createProduct);

module.exports = router;
