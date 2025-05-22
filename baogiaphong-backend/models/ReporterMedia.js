const mongoose = require('mongoose');

const reporterMediaSchema = new mongoose.Schema({
  reporter_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Reporter' },
  media_type: { type: String, enum: ['facebook', 'twitter', 'instagram', 'youtube', 'linkedin'] },
  media_url: String,
  created_at: Date
});

module.exports = mongoose.model('ReporterMedia', reporterMediaSchema);