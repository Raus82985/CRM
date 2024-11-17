const mongoose = require("mongoose");

const user = new mongoose.Schema({
  google_id: {
    type: String,
    required: true,
    unique: true,
  },
  
  name: {
    type: String,
    required: true,
  },
  
  email: {
    type: String,
    required: true,
    unique: true,
  },
  
  profile_picture: {
    type: String,
  },
  
  created_at: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("user", user);
