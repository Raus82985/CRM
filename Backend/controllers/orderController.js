const Order = require('../models/order');
const Customer = require('../models/customer');

exports.createOrder = async (req, res) => {
  const { customer_id, amount } = req.body;  // Frontend sends order data
  try {
    const order = new Order({ customer_id, amount });
    await order.save();  // Save the order in the database

    await Customer.findByIdAndUpdate(customer_id, {
      $inc: { total_spending: amount },  // Increment total spending for the customer
      $set: { last_visit_date: new Date() },  // Update the last visit date
    });

    res.status(201).json({ message: 'Order created successfully', orderId: order._id });  // Return order ID to frontend
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
