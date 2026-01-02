const express = require("express");
const cors = require("cors");
const pool = require("../config/db"); // PostgreSQL connection

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Root route
app.get("/", (req, res) => {
  res.send("Backend is running");
});

// Get all employees
app.get("/employees", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM employees");
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Get all departments
app.get("/departments", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM departments");
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = app;