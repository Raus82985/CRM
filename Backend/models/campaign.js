const mongoose = require("mongoose");

const campaign = new mongoose.Schema({
  segment_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "audienceSegment",
    required: true,
  },

  name: {
    type: String,
    required: true,
  },

  message: {
    type: String,
    required: true,
  },
  
  created_at: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("campaign", campaign);
