const mongoose = require("mongoose");

const order = new mongoose.Schema({
  customer_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "customer",
    required: true,
  },

  amount: {
    type: Number,
    required: true,
  },

  order_date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("order", order);
