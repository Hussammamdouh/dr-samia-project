const Product = require('../models/Product');

const getProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    res.json(product);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

const createProduct = async (req, res) => {
  const { name, image, price, description, category, countInStock } = req.body;

  const product = new Product({
    name,
    image,
    price,
    description,
    category,
    countInStock,
  });

  try {
    const createdProduct = await product.save();
    res.status(201).json(createdProduct);
  } catch (err) {
    res.status(400).json({ message: 'Error creating product' });
  }
};

module.exports = { getProducts, getProductById, createProduct };
