import { Router } from "express";
import {
  createCustomOrder,
  getCustomOrders,
  getCustomOrderById,
  updateCustomOrder,
  deleteCustomOrder,
} from "../controllers/customOrderController.js";
import { protect } from "../middleware/authMiddleware.js";
import { authorizeRoles } from "../middleware/roleMiddleware.js";
import upload from "../middleware/uploadImage.js";

const router = Router();

// Customers can place custom orders
router.post("/", protect, authorizeRoles("customer"), upload.single('image'), createCustomOrder);

// Both customers & artisans can view orders (filtered in controller if needed)
router.get("/", protect, getCustomOrders);

// View specific custom order
router.get("/:id", protect, getCustomOrderById);

// Only artisans can update order (accept/reject/progress/deliver)
router.put("/:id", protect, authorizeRoles("artisan"), updateCustomOrder);

// Customers can cancel their own orders
router.delete("/:id", protect, authorizeRoles("customer"), deleteCustomOrder);

export default router;
