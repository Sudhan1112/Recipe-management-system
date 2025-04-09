import React from 'react';
import RecipeForm from '../components/RecipeForm';

const AddRecipe = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Add New Recipe</h1>
      <RecipeForm />
    </div>
  );
};

export default AddRecipe;