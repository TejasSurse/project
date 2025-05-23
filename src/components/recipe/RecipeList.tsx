import React from 'react';
import RecipeCard from './RecipeCard';
import { Recipe } from '../../types';

interface RecipeListProps {
  recipes: Recipe[];
  title?: string;
  className?: string;
}

const RecipeList: React.FC<RecipeListProps> = ({
  recipes,
  title,
  className = '',
}) => {
  if (recipes.length === 0) {
    return (
      <div className="flex h-40 items-center justify-center rounded-lg bg-gray-50 text-center">
        <p className="text-gray-500">No recipes found.</p>
      </div>
    );
  }

  return (
    <div className={className}>
      {title && (
        <h2 className="mb-4 text-2xl font-bold text-gray-900">{title}</h2>
      )}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {recipes.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </div>
  );
};

export default RecipeList;