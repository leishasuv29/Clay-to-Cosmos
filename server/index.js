import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import idolRoutes from './routes/idolRoutes.js'

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Test route
app.get("/", (req, res) => {
  res.send("Clay to Cosmos Backend is running 🚀");
});

//Routes
app.use('/idols', idolRoutes)


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
