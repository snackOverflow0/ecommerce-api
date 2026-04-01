import { orders } from "../data/orders.js"
import { products } from "../data/products.js"

// GET orders
export const getOrders = (req, res) => {
  res.json(products)
}

// CREATE order
export const createOrder = (req, res) => {
  const { userId, items } = req.body

  let total = 0

  for (let item of items){
    const product = products.find(p => p.id === req.params.id)

    if(!product){
      return res.status(404).json({ message: "Product not found" })
    }

    total += product.price * item.quantity
  }

  const newOrder = {
    id: Date.now(),
    userId,
    items,
    total,
    status: "pending"
  }
}