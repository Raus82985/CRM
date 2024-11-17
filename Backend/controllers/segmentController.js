const AudienceSegment = require('../models/audienceSegement');
const Customer = require('../models/customer');

exports.createSegment = async (req, res) => {
  const { name, conditions } = req.body;  // Frontend sends segment creation data
  if (!name || !conditions) {
    return res.status(400).json({ error: 'Name and conditions are required' });  // Validation for missing fields
  }
 
  let len = 0;
  try {
    const customers = await Customer.find(conditions);  // Retrieve customers based on segment conditions
    if(customers) len = customers.length;
  } catch (error) {
    res.status(500).json({error: err.message})
  }
  
  try {
    const segment = new AudienceSegment({ name, conditions, audience_size: len });
    await segment.save();  // Save the new audience segment
    res.status(201).json({ message: 'Audience segment created', segmentId: segment._id });  // Return segment ID to frontend
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getSegmentCustomers = async (req, res) => {
  const segmentId = req.params.id;  // Frontend provides the segment ID to get customers
  try {
    const segment = await AudienceSegment.findById(segmentId);  // Fetch the segment data
    if (!segment) {
      return res.status(404).json({ error: 'Segment not found' });  // Return 404 if segment doesn't exist
    }
    
    const conditions = segment.conditions;  // Retrieve the conditions for filtering customers
    const customers = await Customer.find(conditions);  // Retrieve customers based on segment conditions
    res.status(200).json({ audience_size: customers.length, customers });  // Return customer data to frontend
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.getAllSegments = async (req, res) => {
  try {
    const segments = await AudienceSegment.find(); // Fetch all audience segments
    res.status(200).json(segments);
  } catch (err) {
    console.error('Error fetching audience segments:', err);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};