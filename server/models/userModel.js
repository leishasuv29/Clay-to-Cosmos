import { pool } from "../config/db.js";

// Create a new user
const createUser = async (name, email, hashedPassword, contact) => {
  const result = await pool.query(
    `INSERT INTO users (name, email, password, contact) 
     VALUES ($1, $2, $3, $4) 
     RETURNING user_id, name, email, contact, created_at`,
    [name, email, hashedPassword, contact]
  );
  return result.rows[0];
};

// Find user by email
const findByEmail = async (email) => {
  const result = await pool.query("SELECT * FROM users WHERE email = $1", [email]);
  return result.rows[0];
};

// Find user by ID
const findById = async (user_id) => {
  const result = await pool.query(
    "SELECT user_id, name, email, contact, created_at FROM users WHERE user_id = $1",
    [user_id]
  );
  return result.rows[0];
};

export default {
  createUser,
  findByEmail,
  findById,
};