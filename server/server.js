import express from 'express';
import cors from 'cors';
import connectDB from './config/db.js'; 

const app = express();

connectDB();

app.use(cors());
app.use(express.json({ extended: false }));

import recipeRoutes from './routes/recipes.js';
app.use('/api/recipes', recipeRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
