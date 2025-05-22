const mongoose = require('mongoose');

const categorySchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: String,
  created_at: Date,
  updated_at: Date
});

module.exports = mongoose.model('Category', categorySchema);