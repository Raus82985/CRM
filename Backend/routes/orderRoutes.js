const express = require('express');
const router = express.Router(); 
const orderController = require('../controllers/orderController'); 

// Route for creating a new order
router.post('/', orderController.createOrder); // Used by frontend to create a new order for a customer

module.exports = router; 
