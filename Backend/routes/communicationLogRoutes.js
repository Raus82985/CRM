const express = require('express'); 
const router = express.Router(); 
const communicationLogController = require('../controllers/communicationLogController'); 

// Route for creating a communication log entry (to log the result of a campaign message sent to a customer)
router.post('/', communicationLogController.createCommunicationLog); // Used by backend to log communication results after a campaign message is sent (SENT or FAILED)

module.exports = router; 
