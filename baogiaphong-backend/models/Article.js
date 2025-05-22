const mongoose = require('mongoose');

const articleSchema = new mongoose.Schema({
  title: { type: String, required: true },
  slug: String,
  summary: String,
  content: String,
  image: String,
  category_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Category' },
  author_id: { type: String, ref: 'User' },
  status: { type: String, enum: ['draft', 'pending', 'published', 'archived'] },
  views: { type: Number, default: 0 },
  created_at: Date,
  updated_at: Date,
  published_at: Date,
  archived_at: Date
});

module.exports = mongoose.model('Article', articleSchema);