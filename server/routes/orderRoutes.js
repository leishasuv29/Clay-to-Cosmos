import { Router } from "express";
import {
  createOrder,
  getOrderById,
  getAllOrders,
  updateOrder,
  deleteOrder,
} from "../controllers/orderController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = Router();

router.post("/", protect, createOrder);       // Create order
router.get("/", protect, getAllOrders);       // Get all orders
router.get("/:id", protect, getOrderById);    // Get one order
router.put("/:id", protect, updateOrder);     // Update order
router.delete("/:id", protect, deleteOrder);  // Delete order

export default router;
