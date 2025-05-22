const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    username: { type: String, required: true, unique: true },
    full_name: { type: String, required: true }, 
    password: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phone: { type: String }, 
    gender: { type: String, enum: ["Nam", "Nữ", "Khác"] }, 
    birthdate: { type: Date }, 
    address: { type: String }, 
    role: {
      type: String,
      enum: ["admin", "editor", "reporter", "reader"],
      default: "reader",
    },
    avatar: String,
    department: {
      type: String,
      enum: ["news", "sports", "science", "politics", "economy", "culture"],
    },
    status: {
      type: String,
      enum: ["pending", "active", "suspended"],
      default: "pending",
    },
    approved_by: String,
  },
  {
    timestamps: true, // Automatically adds createdAt and updatedAt
  }
);

module.exports = mongoose.model("User", userSchema);
