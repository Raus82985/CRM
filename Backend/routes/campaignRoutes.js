const express = require('express'); 
const router = express.Router(); 
const campaignController = require('../controllers/campaignController'); 

// Route for creating a campaign
router.post('/', campaignController.createCampaign); // Used by frontend to create a new campaign with a segment and message

// Route for sending campaign messages to customers
router.post('/send_message', campaignController.sendCampaignMessages); // Used by frontend to trigger the sending of messages to the campaign audience

// Route for getting campaign statistics (e.g., number of sent/failed messages)
router.get('/stats/:campaignId', campaignController.getCampaignStats); // Used by frontend to get statistics of a particular campaign (successful and failed message counts)

// New route for fetching active campaigns
router.get('/active', campaignController.getActiveCampaigns);
module.exports = router;  