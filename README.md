# 🛒 E-commerce API (Node.js + Express + PostgreSQL)

A simple but scalable **E-commerce Backend API** built with **Node.js, Express, and PostgreSQL (Neon)** following an MVC architecture.

---

## 🚀 Features

* 🛍️ Product Management (CRUD)
* ⚡ RESTful API design
* 🧱 MVC Architecture
* ☁️ Cloud Database (Neon PostgreSQL)
* 🔒 Environment Variables with dotenv

---

## 🛠 Tech Stack

* **Backend:** Node.js, Express.js
* **Database:** PostgreSQL (Neon)
* **Tools:** Git, REST Client / Postman

---

## 📁 Project Structure

```
src/
├── config/
│   └── db.js
├── controllers/
│   └── productController.js
├── routes/
│   └── productRoutes.js
├── app.js

.env
initDb.js
package.json
```

---

## ⚙️ Installation

### 1. Clone the repository

```
git clone https://github.com/yourusername/ecommerce-api.git
cd ecommerce-api
```

---

### 2. Install dependencies

```
npm install
```

---

### 3. Setup environment variables

Create a `.env` file:

```
DATABASE_URL=your_neon_database_url
PORT=3000
```

---

### 4. Run database setup

```
node initDb.js
```

---

### 5. Start the server

```
node src/app.js
```

Server will run at:

```
http://localhost:3000
```

---

## 🧪 API Endpoints

### 📦 Products

#### Create Product

```
POST /api/products
```

#### Get All Products

```
GET /api/products
```

#### Get Single Product

```
GET /api/products/:id
```

#### Update Product

```
PUT /api/products/:id
```

#### Delete Product

```
DELETE /api/products/:id
```

---

## 📌 Sample Request

```
POST /api/products
Content-Type: application/json

{
  "name": "Laptop",
  "price": 50000,
  "stock": 10
}
```

---

## 🔥 Future Improvements

* 👤 User Authentication (JWT)
* 🧾 Order System (cart & checkout)
* 💳 Payment Integration
* 📊 Admin Dashboard
* 🔐 Role-based Access Control

---

## 👨‍💻 Author

**Christopher Castelo**

* Aspiring Backend Developer
* Focused on building scalable APIs

---

## ⭐ Notes

This project is part of my backend development journey, focusing on mastering:

* Express.js
* Database integration
* Real-world API architecture

---

## 📜 License

This project is open-source and available for learning purposes.
