# 🛒 E-commerce API (Express.js)

A simple E-commerce backend API built using Express.js with a clean MVC structure (Routes + Controllers).
This project is designed for learning backend fundamentals before integrating a database.

## 🚀 Features

* Products API (CRUD)
* Users API
* Orders API
* Order total calculation
* MVC structure (Routes + Controllers)
* In-memory data (no database yet)

## 🛠 Tech Stack

* Node.js
* Express.js

## 📁 Project Structure

```
src/
├── app.js
├── routes/
├── controllers/
├── data/
```

## ▶️ Run Locally

```bash
npm install
npm run dev
```

Server runs at:

```
http://localhost:3000
```

## 📌 API Endpoints

### Products

* GET /api/products
* GET /api/products/:id
* POST /api/products
* PUT /api/products/:id
* DELETE /api/products/:id

### Users

* GET /api/users
* POST /api/users

### Orders

* GET /api/orders
* POST /api/orders

## 📬 Testing

Use VS Code REST Client (`test.rest`) to test endpoints.

## 🔥 Future Improvements

* Add PostgreSQL + Prisma
* Authentication (JWT)
* Validation middleware
* Error handling middleware

---

👨‍💻 Built by Christopher
