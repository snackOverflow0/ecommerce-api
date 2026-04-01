import { products } from "../data/products.js"

// GET all
export const getProducts = (req, res) => {
  res.json(products)
}

// GET one
export const getProductById = (req, res) => {
  const product = products.find(p => p.id === req.params.id)

  if(!product){
    res.status(404).json({ message: "Product not found" })
  }

  res.json(product)
}

// CREATE
export const createProduct = (req, res) => {
  const newProduct = {
    id: Date.now(),
    ...req.body
  }

  products.push(newProduct)
  res.status(201).json(newProduct)
}

// UPDATE
export const updateProduct = (req, res) => {
  const index = products.find(p => p.id === req.params.id)

  if(index === -1){
    return res.status(404).json({ message: "Product not found" })
  }

  products[index] = {
    ...products[index],
    ...req.body
  }

  res.json(products[index])
}

// DELETE
export const deleteProduct = (req, res) => {
  const index = products.find(p => p.id === req.params.id)

  if(index === -1){
    return res.status(404).json({ message: "Product not found" })
  }

  const deleted = products.splice(index, 1)
  res.json(deleted, { message: "Product deleted" })
}