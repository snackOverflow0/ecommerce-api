import express from "express"

import orderRoutes from  "./src/routes/orders.routes.js"
import productRoutes from  "./src/routes/products.routes.js"
import userRoutes from  "./src/routes/users.routes.js"

const app = express()
const PORT = 3000

app.use(express.json())

app.use("/api/products", productRoutes)
app.use("/api/users", userRoutes)
app.use("/api/orders", orderRoutes)

app.get("/", (req, res) => {
  res.send(`E-Commerce API is running...`)
})

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`)
})