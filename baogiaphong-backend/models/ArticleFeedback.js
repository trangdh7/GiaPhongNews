const mongoose = require('mongoose');

const feedbackSchema = new mongoose.Schema({
  article_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Article' },
  editor_id: { type: String, ref: 'User' },
  feedback: String,
  status: { type: String, enum: ['pending', 'approved', 'rejected'] },
  created_at: Date,
  updated_at: Date
});

module.exports = mongoose.model('ArticleFeedback', feedbackSchema);