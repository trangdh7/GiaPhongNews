// config/db.js
const mongoose = require("mongoose");
require("dotenv").config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("✅ Đã kết nối MongoDB");
  } catch (err) {
    console.error("❌ Lỗi kết nối MongoDB:", err);
    process.exit(1);
  }
};

module.exports = connectDB;
