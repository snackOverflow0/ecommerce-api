import pool from "../config/db.js";

// CREATE PRODUCT
export const createProduct = async (req, res) => {
  try {
    const { name, price, stock } = req.body;

    const result = await pool.query(
      "INSERT INTO products (name, price, stock) VALUES ($1, $2, $3) RETURNING *",
      [name, price, stock]
    );

    res.json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// GET ALL PRODUCTS
export const getProducts = async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM products");
    res.json(result.rows);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// GET SINGLE PRODUCT
export const getProduct = async (req, res) => {
  try {
    const { id } = req.params;

    const result = await pool.query(
      "SELECT * FROM products WHERE id = $1",
      [id]
    );

    res.json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// UPDATE PRODUCT
export const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, price, stock } = req.body;

    const result = await pool.query(
      "UPDATE products SET name=$1, price=$2, stock=$3 WHERE id=$4 RETURNING *",
      [name, price, stock, id]
    );

    res.json(result.rows[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// DELETE PRODUCT
export const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;

    await pool.query("DELETE FROM products WHERE id=$1", [id]);

    res.json({ message: "Deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};