const mongoose = require("mongoose");

const communicationsLog = new mongoose.Schema({
  campaign_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "campaign",
    required: true,
  },

  customer_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "customer",
    required: true,
  },

  status: {
    type: String,
    enum: ["SENT", "FAILED"],
    required: true,
  },

  sent_at: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("communicationsLog", communicationsLog);
