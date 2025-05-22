const mongoose = require("mongoose");

const adSchema = new mongoose.Schema({
  title: String,
  image_url: String,
  link: String,
  start_date: Date,
  end_date: Date,
});

module.exports = mongoose.model("Ad", adSchema);
