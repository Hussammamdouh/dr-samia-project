const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const productRoutes = require('./routes/productRoutes');
const orderRoutes = require('./routes/orderRoutes');
const { errorHandler } = require('./middleware/errorMiddleware');

// Swagger setup
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

dotenv.config();
connectDB();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Swagger configuration
const swaggerOptions = {
  swaggerDefinition: {
    info: {
      title: 'E-Commerce API',
      version: '1.0.0',
      description: 'API Documentation for E-Commerce Backend',
      contact: {
        name: 'Your Name',
        email: 'your-email@example.com',
      },
    },
    servers: [
      {
        url: 'http://localhost:5000/api', // Base URL for API
      },
    ],
  },
  apis: ['./routes/*.js', './controllers/*.js'], // Path to the API docs in your files
};

const swaggerSpec = swaggerJsdoc(swaggerOptions);

// Serve Swagger Docs
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/products', productRoutes);
app.use('/api/orders', orderRoutes);

// Error handler middleware
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);

  // Automatically open the Swagger documentation page
  // Correct the import for 'open' when using dynamic import
  import('open').then((mod) => {
    const open = mod.default; // Access the default export (the function)
    open('http://localhost:5000/api-docs'); // This will open the Swagger UI in your default browser
  }).catch((err) => {
    console.error('Failed to open browser:', err);
  });
});
