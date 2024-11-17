const mongoose = require("mongoose");

const customer = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
    unique: true,
  },
  phone: {
    type: String,
    required: true,
  },

  total_spending: {
    type: Number,
    required: true,
  },

  visits: {
    type: Number,
    required: true,
  },

  last_visit_date: {
    type: Date,
    default: Date.now,
  },


  created_at: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("customer", customer);
