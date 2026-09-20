# 🛒 Smart Cart Redux

A responsive shopping cart application built with React, Redux Toolkit, and React Router DOM.

This project was created to practice managing application state with Redux Toolkit and handling page navigation with React Router.

## 🚀 Features

- 🛍️ Display products
- ➕ Add products to cart
- ❌ Remove products directly from Product Cards
- 🔢 Increase and decrease product quantity
- 💰 Calculate individual product amount based on quantity
- 🧾 Calculate total cart amount
- 🛒 Display cart item count in the Header
- 🔄 Add to Cart / Remove From Cart button changes dynamically
- 📭 Empty cart message
- 🧭 React Router navigation
- ⬅️ Previous navigation from Cart page
- 📱 Responsive layout
- 🎨 Responsive product and cart UI

## 🛠️ Technologies Used

- React
- Redux Toolkit
- React Redux
- React Router DOM
- JavaScript
- HTML
- CSS
- Vite

## 📂 Project Structure

```text
src/
├── components/
│   ├── Header.jsx
│   ├── Banner.jsx
│   └── ProductCard.jsx
│
├── pages/
│   ├── Home.jsx
│   └── Cart.jsx
│
├── redux/
│   ├── Store.js
│   └── CartSlice.js
│
├── data/
│   └── productsData.json
│
├── App.jsx
├── main.jsx
└── App.css