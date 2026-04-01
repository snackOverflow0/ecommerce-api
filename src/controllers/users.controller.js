import { users } from "../data/users.js"

export const getUsers = (req, res) => {
  res.json(users)
}

export const createUser = (req, res) => {
  const newUser = {
    id: Date.now(),
    ...req.body
  }

  users.push(newUser)
  res.status(201).json(newUser)
}

