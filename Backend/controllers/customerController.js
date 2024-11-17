const Customer = require('../models/customer');

exports.createCustomer = async (req, res) => {
  const { name, email, phone, total_spending = 0, visits = 0 } = req.body;  // Frontend sends customer data
  try {
    const customer = new Customer({ name, email, phone, total_spending, visits });
    await customer.save();  // Save new customer in the database
    res.status(201).json({ message: 'Customer added successfully', customerId: customer._id });  // Return customer ID to frontend
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Controller to get all customers
exports.getAllCustomers = async (req, res) => {
  try {
    const customers = await Customer.find(); // Fetch all customers from the database
    res.status(200).json({ success: true, data: customers });
  } catch (error) {
    console.error('Error fetching customers:', error.message);
    res.status(500).json({ success: false, error: 'Internal Server Error' });
  }
};
