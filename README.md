# 🍴Recipe Management System  
A personalized recipe management system built with the MERN stack (MongoDB, Express, React, Node.js). This full-stack app lets you add, edit, view, and delete recipes with a sleek, mobile-friendly interface.

**🏠 Home Page**  
![image](https://github.com/user-attachments/assets/ccc0a8b0-68e7-4033-bcab-510c4fefbd06)

**➕ Add Recipe Page**  
![image](https://github.com/user-attachments/assets/ad8d3f5c-ab7f-43a3-9de4-b67d76986df9)

**📖 View Recipe Page**  
![image](https://github.com/user-attachments/assets/087ca2a4-6289-4e1e-b05e-448d288263bd)

**✏️ Edit Recipe Page**  
![image](https://github.com/user-attachments/assets/9861b709-e73b-4f55-9e20-f3edba93a1bf)

---

## 🚀 Features  
- ➕ Add new recipes with:  
  - 📝 Title  
  - 🧾 Description  
  - 🥕 Ingredients  
  - 🧑‍🍳 Instructions  
  - ⏱️ Cooking Time  
  - 🎚️ Difficulty Level  
  - 🍽️ Servings  
  - 🗂️ Category  
  - 🔖 Tags  
- ✏️ Edit existing recipes  
- 👁️ View detailed recipe info  
- 🔍 Search recipes by title, description, or tags  
- 🧃 Filter recipes by category  
- 📱 Responsive design with Tailwind CSS  
- 🔔 Toast notifications via React-Toastify  

---

## 🛠️ Tech Stack  
- **Frontend**: React.js, React Router, Axios, Tailwind CSS, React-Toastify  
- **Backend**: Node.js, Express.js  
- **Database**: MongoDB  

---

## 🌐 Live Demo  
- **Frontend**: [https://recipe-management-system-zeta.vercel.app](https://recipe-management-system-zeta.vercel.app)  
- **Backend**: [https://recipe-management-system-hkt4.onrender.com](https://recipe-management-system-hkt4.onrender.com)  

---

## 🗂️ Project Structure  
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

## 🧑‍💻 Setup Instructions

### ✅ Prerequisites  
- Node.js (v14 or higher)  
- MongoDB (local install or MongoDB Atlas)

### ⚙️ Installation Steps  
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
   - Update the MongoDB URI if needed

### 🧪 Running the App Locally  
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

3. **Visit**: `http://localhost:5173`  

---

## 🧑‍🍳 Usage  
- **🏠 Home Page**: Browse all recipes, search and filter easily  
- **➕ Add Recipe**: Create a recipe with rich details  
- **📖 View Recipe**: See a full breakdown of a recipe  
- **✏️ Edit Recipe**: Modify any recipe you've added  

---

## 🔮 Future Enhancements  
- 🔐 User authentication & role-based access.  
- 🗃️ Recipe category management.
- ❤️ Favorite recipes list.
- 🔗 Shareable recipe links.
- ⭐ Ratings & 💬 Comments.
- 🗓️ Weekly meal planner.  
- 🛒 Auto-generated shopping list.
---


coming up with new things...
