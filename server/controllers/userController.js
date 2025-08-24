import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/userModel.js";

const generateToken = (user_id, role) => {
  return jwt.sign({ user_id, role }, process.env.JWT_SECRET, {
    expiresIn: "30d",
  });
};

export const registerUser = async (req, res) => {
  const { name, email, password, contact, role } = req.body;
  if (!role) role = "customer";

  try {
    const existing = await User.findByEmail(email);
    if (existing)
      return res.status(400).json({ message: "User already exists" });

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.createUser(name, email, hashedPassword, contact, role);
    const token = generateToken(user.user_id, user.role);

    res.cookie("token", token, {
      httpOnly: true,
      secure: false, // set true in production with HTTPS
      sameSite: "lax",
    });
    return res.status(201).json({ user, token });
  } catch (err) {
    console.error("Register error:", err.message);
    return res.status(500).json({ message: "Server error" });
  }
};

export const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findByEmail(email);
    if (user && (await bcrypt.compare(password, user.password))) {
      const token = generateToken(user.user_id, user.role);
      console.log(token);
      res.cookie("token", token, {
        httpOnly: true,
        secure: false, // set true in production with HTTPS
        sameSite: "lax",
      });
      return res.status(200).json({
        user: {
          user_id: user.user_id,
          name: user.name,
          email: user.email,
          contact: user.contact,
          role: user.role,
        },
        token,
      });
    } else {
      return res.status(401).json({ message: "Invalid email or password" });
    }
  } catch (err) {
    console.error("Login error:", err.message);
    return res.status(500).json({ message: "Server error" });
  }
};

export const getProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user?.user_id);
    if (!user) return res.status(404).json({ message: "User not found" });

    return res.status(200).json(user);
  } catch (err) {
    console.error("Profile error:", err.message);
    return res.status(500).json({ message: "Server error" });
  }
};
