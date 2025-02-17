const express = require('express');
const userController = require('../controllers/userController');

const router = express.Router();

// Create a new user
router.post('/users', userController.createUser);

// Get all users
router.get('/users', userController.getAllUsers);

// Get user by ID
router.get('/users/:id', userController.getUserById);

// Update user by ID
router.put('/users/:id', userController.updateUser);

// Delete user by ID
router.delete('/users/:id', userController.deleteUser);

module.exports = router;
