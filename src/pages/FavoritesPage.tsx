import React, { useState, useEffect } from 'react';
import RecipeList from '../components/recipe/RecipeList';
import { Recipe } from '../types';
import { recipes } from '../data/recipes';

const FavoritesPage: React.FC = () => {
  // In a real app, favorites would be stored in a database or local storage
  // For this demo, we'll just use some random recipes as favorites
  const [favorites, setFavorites] = useState<Recipe[]>([]);
  
  useEffect(() => {
    // Simulate loading favorites
    // In a real app, this would be fetched from an API or local storage
    const randomFavorites = recipes
      .sort(() => 0.5 - Math.random())
      .slice(0, 3);
    
    setFavorites(randomFavorites);
  }, []);
  
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">My Favorite Recipes</h1>
        <p className="text-gray-600">
          Your saved recipes for quick access
        </p>
      </div>
      
      {favorites.length > 0 ? (
        <RecipeList recipes={favorites} />
      ) : (
        <div className="flex flex-col items-center justify-center rounded-lg bg-gray-50 py-16 text-center">
          <p className="mb-4 text-lg text-gray-500">
            You haven't saved any recipes yet.
          </p>
          <p className="text-gray-500">
            Browse recipes and click the heart icon to add them to your favorites.
          </p>
        </div>
      )}
    </div>
  );
};

export default FavoritesPage;