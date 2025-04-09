# 🍲 Recipe Management System

A **personalized recipe management system** built with the **MERN stack** (MongoDB, Express, React, Node.js). This full-stack app lets you **add, edit, view, and delete** recipes with a sleek, mobile-friendly interface 💅.

![Project Overview](https://your-image-url-here.com/overview.png)

---

## 🔥 Features

- ➕ Add new recipes with:
  - Title 📝
  - Description 🧾
  - Ingredients 🛒
  - Instructions 📖
  - Cooking Time ⏱️
  - Difficulty Level 💪
  - Servings 🍽️
  - Category 🍱
  - Tags 🏷️
- ✏️ Edit existing recipes
- 👀 View detailed recipe information
- 🔍 Search recipes by title, description, or tags
- 🧠 Filter recipes by category
- 📱 Responsive design with **Tailwind CSS**
- 🔔 Friendly notifications via **React-Toastify**

---

## ⚙️ Tech Stack

- **Frontend**: React.js, React Router, Axios, Tailwind CSS, React-Toastify  
- **Backend**: Node.js, Express.js  
- **Database**: MongoDB  

---

## 🚀 Live Demo

- 🌐 **Frontend**: [https://your-frontend-url.netlify.app](https://your-frontend-url.netlify.app)
- 🛠️ **Backend**: [https://your-backend-url.onrender.com](https://your-backend-url.onrender.com)

---

## 🧩 Project Structure

```
recipe-management-system/
├── client/
│   ├── public/
│   │   ├── index.html
│   │   └── favicon.ico
│   ├── src/
│   │   ├── components/
│   │   │   ├── RecipeCard.jsx
│   │   │   ├── RecipeForm.jsx
│   │   │   ├── RecipeDetail.jsx
│   │   │   ├── SearchBar.jsx
│   │   │   └── Navbar.jsx
│   │   ├── pages/
│   │   │   ├── Home.jsx
│   │   │   ├── AddRecipe.jsx
│   │   │   ├── EditRecipe.jsx
│   │   │   └── RecipeView.jsx
│   │   ├── services/
│   │   │   └── api.js
│   │   ├── App.jsx
│   │   ├── index.jsx
│   │   └── index.css
│   ├── package.json
│   └── tailwind.config.js
├── server/
│   ├── models/
│   │   └── Recipe.js
│   ├── routes/
│   │   └── recipes.js
│   ├── config/
│   │   └── db.js
│   ├── package.json
│   └── server.js
└── README.md
```

---

## 🛠️ Setup Instructions

### 📋 Prerequisites

- Node.js (v14 or higher) 🧱
- MongoDB (local install or [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)) ☁️

### 🧑‍🍳 Installation Steps

1. **Clone the repo**:
   ```bash
   git clone <repository-url>
   cd recipe-management-system
   ```

2. **Install backend dependencies**:
   ```bash
   cd server
   npm install
   ```

3. **Install frontend dependencies**:
   ```bash
   cd ../client
   npm install
   ```

4. **Configure DB connection**:
   - Open `server/config/db.js`
   - Update the MongoDB URI if needed 🔐

### 🏃 Running the App Locally

1. **Start the backend**:
   ```bash
   cd server
   npm run dev
   ```

2. **Start the frontend**:
   ```bash
   cd ../client
   npm start
   ```

3. **Visit**: `http://localhost:5173` 🌐

---

## 🧠 Usage

- **🏠 Home Page**: Browse all recipes, search and filter easily  
- **➕ Add Recipe**: Create a recipe with rich details  
- **🔍 View Recipe**: See a full breakdown of a recipe  
- **✏️ Edit Recipe**: Modify any recipe you’ve added  

---

## 🚧 Future Enhancements

- 🔐 User authentication & role-based access
- 🧾 Recipe category management
- ❤️ Favorite recipes list
- 🔗 Shareable recipe links
- ⭐ Ratings & 💬 Comments
- 🗓️ Weekly meal planner
- 🛍️ Auto-generated shopping list

---

Let me know if you want to plug in **your real image URLs and deployment links**, Sudhan — I can tweak that for you in a sec 😎.
