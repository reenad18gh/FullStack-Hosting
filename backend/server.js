const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const { Pool } = require("pg");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

// Database connection
const pool = new Pool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT || 5432
});

// Routes
app.get("/api/products", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM products");
    res.json(result.rows);
  } catch (err) {
    res.status(500).send("Database error");
  }
});

app.post("/api/orders", async (req, res) => {
  const { name, address, items } = req.body;
  console.log("Order received:", { name, address, items });
  res.json({ message: "Order confirmed" });
});

app.listen(port, () => console.log(`Server running on port ${port}`));
