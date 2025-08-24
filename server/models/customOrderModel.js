import { pool } from "../config/db.js";

// Create a custom order
const createCustomOrder = async ({
  user_id,
  artisan_id,
  description,
  image_url,
  size,
  material,
  price,
  delivery_by,
  advance_amount,
  advance_paid,
  payment_id,
  payment_status,
  order_status,
}) => {
  const result = await pool.query(
    `INSERT INTO custom_orders 
      (user_id, artisan_id, description, image_url, size, material, price, delivery_by, advance_amount, advance_paid, payment_id, payment_status, order_status)
     VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13)
     RETURNING *`,
    [
      user_id,
      artisan_id,
      description,
      image_url,
      size,
      material,
      price,
      delivery_by,
      advance_amount,
      advance_paid,
      payment_id,
      payment_status,
      order_status,
    ]
  );
  return result.rows[0];
};

// Find all custom orders (optionally filter by user or artisan)
const findAll = async ({ user_id, artisan_id } = {}) => {
  let sql = `SELECT * FROM custom_orders WHERE 1=1`;
  const values = [];
  let idx = 1;

  if (user_id) {
    sql += ` AND user_id = $${idx++}`;
    values.push(user_id);
  }
  if (artisan_id) {
    sql += ` AND artisan_id = $${idx++}`;
    values.push(artisan_id);
  }

  sql += ` ORDER BY created_at DESC`;

  const result = await pool.query(sql, values);
  return result.rows;
};

// Find custom order by id
const findById = async (id) => {
  const result = await pool.query(`SELECT * FROM custom_orders WHERE id = $1`, [id]);
  return result.rows[0];
};

// Update custom order
const updateCustomOrder = async (id, updates) => {
  if (!updates || Object.keys(updates).length === 0) {
    return findById(id); // nothing to update
  }

  const fields = [];
  const values = [];
  let idx = 1;

  for (const [key, value] of Object.entries(updates)) {
    fields.push(`${key} = $${idx++}`);
    values.push(value);
  }

  values.push(id);

  const sql = `
    UPDATE custom_orders
    SET ${fields.join(", ")}
    WHERE id = $${idx}
    RETURNING *`;
  const result = await pool.query(sql, values);
  return result.rows[0];
};

// Delete custom order
const deleteCustomOrder = async (id) => {
  const result = await pool.query(
    `DELETE FROM custom_orders WHERE id = $1 RETURNING *`,
    [id]
  );
  if (result.rowCount === 0) return null;
  return { message: "Custom order deleted successfully" };
};

export default {
  createCustomOrder,
  findAll,
  findById,
  updateCustomOrder,
  deleteCustomOrder,
};
