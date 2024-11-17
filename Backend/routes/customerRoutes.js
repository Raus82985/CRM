const express = require('express'); 
const router = express.Router(); 
const customerController = require('../controllers/customerController'); 

// Route for creating a new customer
router.post('/', customerController.createCustomer); // Used by frontend to create a new customer in the system

// Route to get all customers
router.get('/', customerController.getAllCustomers);

module.exports = router; 
 