import { pool } from "../config/db.js";

// Find All Idols
const findAll = async ({ limit = 50, offset = 0 } = {}) => {
  const sql = `
      SELECT id, image_url, created_at
      FROM idols
      ORDER BY created_at DESC
    `;
  const result = await pool.query(sql);
  return result.rows;
};

export default { findAll };
