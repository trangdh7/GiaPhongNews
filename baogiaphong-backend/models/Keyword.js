const mongoose = require('mongoose');

const keywordSchema = new mongoose.Schema({
  keyword: String,
  created_at: Date
});

module.exports = mongoose.model('Keyword', keywordSchema);