import { pool } from "../config/db.js";

// Create new order
const createOrder = async (orderData) => {
  const {
    user_id,
    price,
    delivery_by,
    advance_amount,
    advance_paid,
    payment_id,
    payment_status,
    order_status,
  } = orderData;

  const sql = `
    INSERT INTO orders 
      (user_id, price, delivery_by, advance_amount, advance_paid, payment_id, payment_status, order_status)
    VALUES 
      ($1, $2, $3, $4, $5, $6, $7, $8)
    RETURNING *;
  `;

  const result = await pool.query(sql, [
    user_id,
    price,
    delivery_by,
    advance_amount,
    advance_paid,
    payment_id,
    payment_status,
    order_status,
  ]);

  return result.rows[0];
};

// Get order by ID
const findById = async (order_id) => {
  const sql = `SELECT * FROM orders WHERE order_id = $1`;
  const result = await pool.query(sql, [order_id]);
  return result.rows[0];
};

// Get all orders (limit + offset optional)
const findAll = async ({ limit = 50, offset = 0 } = {}) => {
  const sql = `
    SELECT * FROM orders
    ORDER BY created_at DESC
    LIMIT $1 OFFSET $2
  `;
  const result = await pool.query(sql, [limit, offset]);
  return result.rows;
};

// Update order status / payment status
const updateOrder = async (order_id, updates) => {
  const fields = [];
  const values = [];
  let i = 1;

  for (const key in updates) {
    fields.push(`${key} = $${i}`);
    values.push(updates[key]);
    i++;
  }

  values.push(order_id);

  const sql = `
    UPDATE orders
    SET ${fields.join(", ")}
    WHERE order_id = $${i}
    RETURNING *;
  `;

  const result = await pool.query(sql, values);
  return result.rows[0];
};

// Delete order
const deleteOrder = async (order_id) => {
  const sql = `DELETE FROM orders WHERE order_id = $1 RETURNING *`;
  const result = await pool.query(sql, [order_id]);
  return result.rows[0];
};

export default {
  createOrder,
  findById,
  findAll,
  updateOrder,
  deleteOrder,
};
