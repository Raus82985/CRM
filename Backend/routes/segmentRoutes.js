const express = require('express'); 
const router = express.Router(); 
const segmentController = require('../controllers/segmentController'); 

// Route to create a new audience segment
router.post('/', segmentController.createSegment); // Used by frontend to create a new audience segment

// Route to get customers based on an audience segment's conditions
router.get('/:id/customers', segmentController.getSegmentCustomers); // Used by frontend to fetch customers of a specific audience segment

// New route for fetching all segments
router.get('/', segmentController.getAllSegments);

module.exports = router; 