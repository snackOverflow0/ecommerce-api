import pool from "../config/db.js";

export const createOrder = async (req, res) => {
  const client = await pool.connect();

  try {
    const { user_id, items } = req.body;

    await client.query("BEGIN");

    let total = 0;

    // 1. Calculate total
    for (let item of items) {
      const product = await client.query(
        "SELECT * FROM products WHERE id = $1",
        [item.product_id]
      );

      const price = product.rows[0].price;
      total += price * item.quantity;
    }

    // 2. Create order
    const orderResult = await client.query(
      "INSERT INTO orders (user_id, total) VALUES ($1, $2) RETURNING *",
      [user_id, total]
    );

    const orderId = orderResult.rows[0].id;

    // 3. Insert order items
    for (let item of items) {
      const product = await client.query(
        "SELECT * FROM products WHERE id = $1",
        [item.product_id]
      );

      await client.query(
        "INSERT INTO order_items (order_id, product_id, quantity, price) VALUES ($1, $2, $3, $4)",
        [orderId, item.product_id, item.quantity, product.rows[0].price]
      );
    }

    await client.query("COMMIT");

    res.json({ message: "Order created", total });
  } catch (error) {
    await client.query("ROLLBACK");
    res.status(500).json({ error: error.message });
  } finally {
    client.release();
  }
};