import { Router } from "express";
import { getAllIdols } from "../controllers/idolController.js";

const router = Router();

router.get("/all", getAllIdols);

export default router;
