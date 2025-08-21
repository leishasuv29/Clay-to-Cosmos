import dotenv from "dotenv";
import pkg from "pg";

dotenv.config();
const { Pool } = pkg;

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: process.env.DATABASE_URL.includes("neon.tech")
    ? { rejectUnauthorized: false } // Neon requires SSL
    : false, // local Postgres
});

(async () => {
  try {
    const res = await pool.query("SELECT NOW()");
    console.log("✅ DB connected:", res.rows[0]);
  } catch (err) {
    console.error("❌ DB connection error:", err.message);
  }
})();

export { pool };
