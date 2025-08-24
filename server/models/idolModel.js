import { pool } from "../config/db.js";

// Find All Idols
const findAll = async ({ limit = 50, offset = 0 } = {}) => {
  const sql = `SELECT * FROM idols ORDER BY created_at DESC LIMIT $1 OFFSET $2;`;
  const result = await pool.query(sql, [limit, offset]);
  return result.rows;
};

export default { findAll };
