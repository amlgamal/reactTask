A React-based educational project that simulates a small e-commerce system with product listing, filtering, cart management, and admin dashboard functionalities.

This project was built to practice React fundamentals, routing, state management, and CRUD operations in frontend applications.

✨ Features

🏠 Home Page (Products)
  - Displays a list of products fetched from a mock/auth server (stored in a local db file)
📂 Filter products by category
📄 Pagination support for better UX
🛒 Add products to cart
  - Cart icon in navbar reflects current cart items
🛍️ Cart Page
  - View all added products
➕ Increase product quantity
➖ Decrease product quantity
🔄 Reset/clear entire cart
Dynamic updates synced with navbar cart state
⚙️ Admin Dashboard
  - View all products
➕ Add new product via a form (name, category, price)
✏️ Edit existing products (same form, populated with product data via route params)
🗑️ Delete products
Navigation handled using React Router
  
🧠 Concepts Practiced
React Functional Components
React Hooks:
useState
useEffect
React Router (navigation + params handling)
Props drilling & state sharing
CRUD operations in frontend
Component reusability
Basic state management for cart system
🧱 Tech Stack
React.js
React Router DOM
JavaScript (ES6+)
Tailwind
Mock API / Local DB file


📁 Project Structure (Simplified)
src/
│── components/
|      |__ CartItem
|      |__ Navbar
│── pages/
│     ├── Home
│     ├── Cart
│     ├── Admin
│     ├── ProductForm
│
│── db/
│── App.js
│── index.js
🚀 Getting Started

Clone the repo:

git clone https://github.com/amlgamal/reactTask.git

Install dependencies:

npm install

Run the project:

npm run dev

App runs on:

http://localhost:3000
🎯 What I Learned

How to build a mini e-commerce flow in React
Managing shared state between components (cart system)
Working with React Router for navigation and dynamic routes
Handling CRUD operations in frontend-only apps
Improving UI/UX with pagination and filtering

👩‍💻 Author

Aml Gamal
GitHub: @amlgamal
