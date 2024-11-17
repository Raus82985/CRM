const CommunicationsLog = require('../models/communicationLog');

exports.createCommunicationLog = async (req, res) => {
  const { campaign_id, customer_id, status } = req.body;  // Frontend sends campaign log data
  try {
    const log = new CommunicationsLog({ campaign_id, customer_id, status });
    await log.save();  // Save the log in the database
    res.status(201).json({ message: 'Communication log created', logId: log._id });  // Return log ID to frontend
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
