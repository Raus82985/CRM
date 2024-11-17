const mongoose = require("mongoose");

const audienceSegment = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  conditions: {
    type: Object,
    required: true,
  }, // Store segment conditions as a JSON object

  audience_size: {
    type: Number,
    default: 0,
  },
  
  created_at: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("audienceSegment", audienceSegment);
