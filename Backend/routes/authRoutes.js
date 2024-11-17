const express = require('express'); 
const router = express.Router(); 
const authController = require('../controllers/authController'); 

// Route for Google Authentication
router.post('/google', authController.googleAuth); // Used by frontend to authenticate users using Google OAuth

module.exports = router; 
