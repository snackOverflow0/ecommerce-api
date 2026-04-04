import pool from "../config/db.js"

// CREATE USER
export const createUser = async (req, res) => {
  try {
    const { email, password } = req.body

    const result = await pool.query(
      "INSERT INTO users (email, password) VALUES ($1, $2) RETURNING *",
      [email, password]
    )

    res.json(result[0])
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

// GET ALL USERS
export const getUsers = async (req, res) => {
  const result = await pool.query("SELECT * FROM users")
  res.json(result.rows)
}