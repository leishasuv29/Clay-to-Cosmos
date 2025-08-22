import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/userModel.js";

const generateToken = (user_id) => {
  return jwt.sign({ user_id }, process.env.JWT_SECRET || "secretkey", { expiresIn: "30d" });
};

export const registerUser = async (req, res) => {
  const { name, email, password, contact } = req.body;

  try {
    const existing = await User.findByEmail(email);
    if (existing) return res.status(400).json({ message: "User already exists" });

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.createUser(name, email, hashedPassword, contact);

    res.status(201).json({ ...user, token: generateToken(user.user_id) });
  } catch (err) {
    console.error("Register error:", err.message);
    res.status(500).json({ message: "Server error" });
  }
};

export const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findByEmail(email);
    if (user && (await bcrypt.compare(password, user.password))) {
      res.json({
        user_id: user.user_id,
        name: user.name,
        email: user.email,
        contact: user.contact,
        token: generateToken(user.user_id),
      });
    } else {
      res.status(401).json({ message: "Invalid email or password" });
    }
  } catch (err) {
    console.error("Login error:", err.message);
    res.status(500).json({ message: "Server error" });
  }
};

export const getProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user?.user_id);
    if (!user) return res.status(404).json({ message: "User not found" });

    res.json(user);
  } catch (err) {
    console.error("Profile error:", err.message);
    res.status(500).json({ message: "Server error" });
  }
};