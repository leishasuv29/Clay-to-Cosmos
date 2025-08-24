import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import idolRoutes from "./routes/idolRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import orderRoutes from "./routes/orderRoutes.js"; 
import customOrderRoutes from "./routes/customOrderRoutes.js";
import cookieParser from "cookie-parser";
import morgan from "morgan";

dotenv.config();

const app = express();
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true, 
  })
);

app.use(express.json());
app.use(cookieParser());
app.use(morgan("dev"));

// Test route
app.get("/", (req, res) => {
  res.send("Clay to Cosmos Backend is running 🚀");
});

// Routes
app.use("/api/idols", idolRoutes);
app.use("/api/users", userRoutes);
app.use("/api/orders", orderRoutes); 
app.use("/api/custom-orders", customOrderRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
