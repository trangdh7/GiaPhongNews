const User = require("../../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
// Đăng ký người dùng
exports.register = async (req, res) => {
  const {
    username,
    full_name,
    email,
    password,
    confirm_password,
    phone,
    gender,
    birthdate,
    address,
    role,
    avatar,
    department,
    status,
  } = req.body;

  try {
    if (password !== confirm_password) {
      return res.status(400).json({ message: "Mật khẩu xác nhận không khớp" });
    }

    const existingUser = await User.findOne({ $or: [{ email }, { username }] });
    if (existingUser) {
      return res
        .status(400)
        .json({ message: "Email hoặc tên tài khoản đã tồn tại" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      username,
      full_name,
      password: hashedPassword,
      email,
      phone,
      gender,
      birthdate: new Date(birthdate),
      address,
      role: role || "reader",
      avatar: avatar || "",
      status: status || "pending",
      created_at: new Date(),
      updated_at: new Date(),
    });

    await newUser.save();

    res.status(201).json({
      message: "Đăng ký thành công",
      user: {
        id: newUser._id,
        username: newUser.username,
        full_name: newUser.full_name,
        email: newUser.email,
        role: newUser.role,
        status: newUser.status,
      },
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Lỗi server khi đăng ký" });
  }
};

// Đăng nhập người dùng
exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ message: "Email không tồn tại" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(401).json({ message: "Sai mật khẩu" });

    const token = jwt.sign(
      { userId: user._id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: "2h" }
    );

    res.status(200).json({
      message: "Đăng nhập thành công",
      token,
      user: {
        id: user._id,
        username: user.username,
        email: user.email,
        role: user.role,
        status: user.status,
      },
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Lỗi server khi đăng nhập" });
  }
};
