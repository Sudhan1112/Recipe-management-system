import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="flex items-center space-x-2">
            <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M6 3a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 00-1 1v10a1 1 0 001 1h6a1 1 0 001-1V7a1 1 0 00-1-1H7zm6 3a1 1 0 01-1 1H8a1 1 0 110-2h4a1 1 0 011 1zm-1 3a1 1 0 100-2H8a1 1 0 100 2h4z" clipRule="evenodd" />
            </svg>
            <span className="text-xl font-bold text-gray-800">Recipe Manager</span>
          </Link>
          
          <div className="flex items-center space-x-4">
            <Link to="/" className="text-gray-600 hover:text-blue-600">
              Home
            </Link>
            <Link
              to="/add-recipe"
              className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg"
            >
              Add Recipe
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;