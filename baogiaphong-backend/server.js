const express = require("express");
const app = express();
require("dotenv").config();
const connectDB = require("./config/db");
const User = require("./models/User");
const cors = require("cors");
const mongoose = require("mongoose");
const morgan = require("morgan");
// Kết nối MongoDB
connectDB();

app.use(express.json());
app.use(cors());
app.use(morgan("dev"));
// Thêm routes đăng nhập / đăng ký
app.use("/auth", require("./routers/authRoutes"));

app.get("/", (req, res) => {
  res.send("Backend đang chạy với MongoDB!");
});

// Lấy danh sách người dùng
app.get("/users", async (req, res) => {
  try {
    const users = await User.find({});
    res.json(users);
  } catch (err) {
    res.status(500).json({ error: "Lỗi truy vấn MongoDB" });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server đang chạy tại http://localhost:${PORT}`);
});
