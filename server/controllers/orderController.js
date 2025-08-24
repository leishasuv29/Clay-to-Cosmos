import Order from "../models/orderModel.js";

// Create order
export const createOrder = async (req, res) => {
  try {
    const order = await Order.createOrder(req.body);
    res.status(201).json(order);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get single order
export const getOrderById = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id);
    if (!order) return res.status(404).json({ message: "Order not found" });
    res.json(order);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get all orders
export const getAllOrders = async (req, res) => {
  try {
    const orders = await Order.findAll();
    res.json(orders);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Update order
export const updateOrder = async (req, res) => {
  try {
    const updated = await Order.updateOrder(req.params.id, req.body);
    res.json(updated);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Delete order
export const deleteOrder = async (req, res) => {
  try {
    const deleted = await Order.deleteOrder(req.params.id);
    if (!deleted) return res.status(404).json({ message: "Order not found" });
    res.json(deleted);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
