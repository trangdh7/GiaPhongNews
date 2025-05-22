const mongoose = require('mongoose');

const reporterSchema = new mongoose.Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  full_name: String,
  pen_name: String,
  email: { type: String, required: true, unique: true },
  phone: String,
  departments: { type: String, enum: ["news", "sports"] },
  profile_image: String,
  bio: String,
  status: { type: String, enum: ["active", "inactive", "banned"] },
  created_at: Date,
  updated_at: Date,
});

module.exports = mongoose.model('Reporter', reporterSchema);