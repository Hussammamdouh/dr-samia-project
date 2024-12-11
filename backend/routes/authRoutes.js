const express = require('express');
const router = express.Router();
const { registerUser, loginUser, loginAdmin } = require('../controllers/authController');  // Import loginAdmin

/**
 * @swagger
 * /api/auth/register:
 *   post:
 *     summary: Register a new user
 *     description: Create a new user with email, password, and other details.
 *     parameters:
 *       - in: body
 *         name: user
 *         description: The user to register
 *         schema:
 *           type: object
 *           required:
 *             - email
 *             - password
 *           properties:
 *             name:
 *               type: string
 *               example: John Doe
 *             email:
 *               type: string
 *               example: john@example.com
 *             password:
 *               type: string
 *               example: password123
 *     responses:
 *       201:
 *         description: User created successfully
 *       400:
 *         description: Invalid input or existing user
 */
router.route('/register').post(registerUser);

/**
 * @swagger
 * /api/auth/login:
 *   post:
 *     summary: Login a user
 *     description: Log in with email and password and receive a JWT token.
 *     parameters:
 *       - in: body
 *         name: credentials
 *         description: The credentials of the user for login
 *         schema:
 *           type: object
 *           required:
 *             - email
 *             - password
 *           properties:
 *             email:
 *               type: string
 *               example: hussam.mamdouh@aiesec.net
 *             password:
 *               type: string
 *               example: 12345678
 *     responses:
 *       200:
 *         description: Login successful, returns a token
 *       401:
 *         description: Invalid email or password
 */
router.route('/login').post(loginUser);

/**
 * @swagger
 * /api/auth/admin-login:
 *   post:
 *     summary: Admin Login
 *     description: Log in with admin email and password and receive a JWT token.
 *     parameters:
 *       - in: body
 *         name: credentials
 *         description: Admin credentials for login
 *         schema:
 *           type: object
 *           required:
 *             - email
 *             - password
 *           properties:
 *             email:
 *               type: string
 *               example: shadymamdouh@gmail.com
 *             password:
 *               type: string
 *               example: 12345678
 *     responses:
 *       200:
 *         description: Admin login successful, returns an admin token
 *       401:
 *         description: Invalid email or password, or not an admin
 *       403:
 *         description: Unauthorized, user is not an admin
 */
router.route('/admin-login').post(loginAdmin);

module.exports = router;
