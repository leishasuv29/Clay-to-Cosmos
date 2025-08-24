import CustomOrder from "../models/customOrderModel.js";

// @desc    Create new custom order (Customer only)
export const createCustomOrder = async (req, res) => {
  try {
    const order = await CustomOrder.createCustomOrder({
      user_id: req.user.user_id, // customer from JWT
      artisan_id: req.body.artisan_id,
      description: req.body.description,
      image_url: req.body.image_url,
      size: req.body.size,
      material: req.body.material,
      price: req.body.price,
      delivery_by: req.body.delivery_by,
      advance_amount: req.body.advance_amount,
      advance_paid: req.body.advance_paid || false,
      payment_id: req.body.payment_id || null,
      payment_status: req.body.payment_status || "pending",
      order_status: req.body.order_status || "pending",
    });
    res.status(201).json(order);
  } catch (err) {
    console.error("Create custom order error:", err.message);
    res.status(500).json({ message: "Server error" });
  }
};

// @desc    Get all custom orders (can filter by user/artisan)
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

// @desc    Get custom order by id
export const getCustomOrderById = async (req, res) => {
  try {
    const order = await CustomOrder.findById(req.params.id);
    if (!order) return res.status(404).json({ message: "Custom order not found" });

    // Restrict access: customer can only see their own, artisan only their assigned ones
    if (
      req.user.role === "customer" && order.user_id !== req.user.user_id ||
      req.user.role === "artisan" && order.artisan_id !== req.user.user_id
    ) {
      return res.status(403).json({ message: "Not authorized to view this order" });
    }

    res.json(order);
  } catch (err) {
    console.error("Get custom order error:", err.message);
    res.status(500).json({ message: "Server error" });
  }
};

// @desc    Update custom order (Artisan only, on assigned orders)
export const updateCustomOrder = async (req, res) => {
  try {
    const order = await CustomOrder.findById(req.params.id);
    if (!order) return res.status(404).json({ message: "Custom order not found" });

    if (req.user.role !== "artisan" || order.artisan_id !== req.user.user_id) {
      return res.status(403).json({ message: "Not authorized to update this order" });
    }

    const updated = await CustomOrder.updateCustomOrder(req.params.id, req.body);
    res.json(updated);
  } catch (err) {
    console.error("Update custom order error:", err.message);
    res.status(500).json({ message: "Server error" });
  }
};

// @desc    Delete custom order (Customer only, on their own orders)
export const deleteCustomOrder = async (req, res) => {
  try {
    const order = await CustomOrder.findById(req.params.id);
    if (!order) return res.status(404).json({ message: "Custom order not found" });

    if (req.user.role !== "customer" || order.user_id !== req.user.user_id) {
      return res.status(403).json({ message: "Not authorized to delete this order" });
    }

    const result = await CustomOrder.deleteCustomOrder(req.params.id);
    res.json(result);
  } catch (err) {
    console.error("Delete custom order error:", err.message);
    res.status(500).json({ message: "Server error" });
  }
};
