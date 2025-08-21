import { Router } from "express";
import { getAllIdols } from "../controllers/idolController.js";

const router = Router();

router.get("/", getAllIdols);

export default router;
