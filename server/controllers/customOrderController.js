import CustomOrder from "../models/customOrderModel.js";

// Create new custom order (Customer only)
export const createCustomOrder = async (req, res) => {
  const {
    description,
    size,
    material,
    delivery_by,
    advance_amount,
    advance_paid,
    payment_id,
    payment_status,
  } = req.body;
  const user_id = req.user.user_id;
  const image_url = req.file?.path;
  if (!description || !size || !material || !delivery_by) {
    return res
      .status(404)
      .json({ message: "Missing fields! Please fill all required data." });
  }
  try {
    const order = await CustomOrder.createCustomOrder({
      user_id,
      description,
      image_url,
      size,
      material,
      delivery_by,
      advance_amount: advance_amount ? advance_amount : 0,
      advance_paid: advance_paid ? advance_paid : false,
      payment_id: payment_id ? payment_id : null,
      payment_status: payment_status ? payment_status : "unpaid",
    });
    res.status(201).json({message: "Successfully created!", order});
  } catch (err) {
    console.error("Create custom order error:", err);
    res.status(500).json({ message: "Server error" });
  }
};

// Get all custom orders (can filter by user/artisan)
export const getCustomOrders = async (req, res) => {
  try {
    const { user_id, artisan_id } = req.query;
    const orders = await CustomOrder.findAll({ user_id, artisan_id });
    res.json(orders);
  } catch (err) {
    console.error("Get custom orders error:", err.message);
    res.status(500).json({ message: "Server error" });
  }
};

// Get custom order by id
export const getCustomOrderById = async (req, res) => {
  try {
    const order = await CustomOrder.findById(req.params.id);
    if (!order)
      return res.status(404).json({ message: "Custom order not found" });

    // Restrict access: customer can only see their own, artisan only their assigned ones
    if (
      (req.user.role === "customer" && order.user_id !== req.user.user_id) ||
      (req.user.role === "artisan" && order.artisan_id !== req.user.user_id)
    ) {
      return res
        .status(403)
        .json({ message: "Not authorized to view this order" });
    }

    res.json(order);
  } catch (err) {
    console.error("Get custom order error:", err.message);
    res.status(500).json({ message: "Server error" });
  }
};

// Update custom order (Artisan only, on assigned orders)
export const updateCustomOrder = async (req, res) => {
  try {
    const order = await CustomOrder.findById(req.params.id);
    if (!order)
      return res.status(404).json({ message: "Custom order not found" });

    if (req.user.role !== "artisan" || order.artisan_id !== req.user.user_id) {
      return res
        .status(403)
        .json({ message: "Not authorized to update this order" });
    }

    const updated = await CustomOrder.updateCustomOrder(
      req.params.id,
      req.body
    );
    res.json(updated);
  } catch (err) {
    console.error("Update custom order error:", err.message);
    res.status(500).json({ message: "Server error" });
  }
};

// Delete custom order (Customer only, on their own orders)
export const deleteCustomOrder = async (req, res) => {
  try {
    const order = await CustomOrder.findById(req.params.id);
    if (!order)
      return res.status(404).json({ message: "Custom order not found" });

    if (req.user.role !== "customer" || order.user_id !== req.user.user_id) {
      return res
        .status(403)
        .json({ message: "Not authorized to delete this order" });
    }

    const result = await CustomOrder.deleteCustomOrder(req.params.id);
    res.json(result);
  } catch (err) {
    console.error("Delete custom order error:", err.message);
    res.status(500).json({ message: "Server error" });
  }
};
