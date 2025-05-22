const mongoose = require('mongoose');

const leaderSchema = new mongoose.Schema({
  name: String,
  position: String,
  image: String,
  level: { type: String, enum: ['level1', 'level2', 'level3', 'level4', 'level5'] },
  birth_date: Date,
  hometown: String,
  ethnicity: String,
  profession: String,
  political_theory: String,
  positions: String,
  timeline: String,
  created_at: Date,
  updated_at: Date
});

module.exports = mongoose.model('Leader', leaderSchema);