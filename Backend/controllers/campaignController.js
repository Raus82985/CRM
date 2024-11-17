const Campaign = require('../models/campaign');
const CommunicationsLog = require('../models/communicationLog');
const Customer = require('../models/customer');
const AudienceSegment = require('../models/audienceSegement');

exports.createCampaign = async (req, res) => {
  const { segment_id, name, message } = req.body;  // Frontend sends campaign data
  try {
    const campaign = new Campaign({ segment_id, name, message });
    await campaign.save();  // Save the new campaign in the database
    res.status(201).json({ message: 'Campaign created', campaignId: campaign._id });  // Return campaign ID to frontend
  } catch (err) {
    res.status(500).json({ error: err.message });  // Handle internal errors
  }
};


exports.getActiveCampaigns = async (req, res) => {
  try {
    const campaigns = await Campaign.find(); // Add a condition if 'active' field exists in schema
    res.status(200).json(campaigns);
  } catch (err) {
    console.error('Error fetching campaigns:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};


exports.sendCampaignMessages = async (req, res) => {
  const { campaign_id } = req.body;  // Frontend sends campaign ID to send messages
  try {
    const campaign = await Campaign.findById(campaign_id);  // Retrieve campaign data from the database
    if (!campaign) {
      return res.status(400).json({ error: 'Campaign not found' });
    }

    const segment = await AudienceSegment.findById(campaign.segment_id);  // Get audience segment for campaign
    if (!segment) {
      return res.status(400).json({ error: 'Audience segment not found' });
    }

    const customers = await Customer.find(segment.conditions);  // Retrieve customers based on segment conditions
    if (customers.length === 0) {
      return res.status(400).json({ error: 'No valid customers found' });
    }

    const communicationLogs = [];
    for (let customer of customers) {
      const status = Math.random() < 0.9 ? 'SENT' : 'FAILED';  // Simulate success/failure of message
      const log = new CommunicationsLog({
        campaign_id,
        customer_id: customer._id,
        status  // Save communication status in the log
      });
      await log.save();  // Save each log entry
      communicationLogs.push(log);
    }

    res.status(200).json({ message: 'Messages sent', communicationLogs });  // Return logs to frontend
  } catch (err) {
    res.status(500).json({ error: 'Internal server error' });
  }
};

exports.getCampaignStats = async (req, res) => {
  try {
    const logs = await CommunicationsLog.find({ campaign_id: req.params.campaignId });  // Get logs for the specified campaign
    const sent = logs.filter(log => log.status === 'SENT').length;  // Count successfully sent messages
    const failed = logs.filter(log => log.status === 'FAILED').length;  // Count failed messages
    res.status(200).json({ sent, failed });  // Return campaign stats to frontend
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
