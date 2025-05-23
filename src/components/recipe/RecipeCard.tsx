import React from 'react';
import { Clock, Users, Star } from 'lucide-react';
import { Recipe } from '../../types';
import { Link } from 'react-router-dom';

interface RecipeCardProps {
  recipe: Recipe;
  className?: string;
}

const RecipeCard: React.FC<RecipeCardProps> = ({ recipe, className = '' }) => {
  const totalTime = recipe.prepTime + recipe.cookTime;
  
  return (
    <Link 
      to={`/recipe/${recipe.id}`}
      className={`group block overflow-hidden rounded-lg bg-white shadow-md transition-all duration-300 hover:shadow-lg ${className}`}
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={recipe.image}
          alt={recipe.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {recipe.isFeatured && (
          <div className="absolute left-0 top-0 bg-green-600 px-2 py-1 text-xs font-medium text-white">
            Featured
          </div>
        )}
      </div>
      
      <div className="p-4">
        <div className="mb-2 flex items-center justify-between">
          <div className="flex items-center text-amber-500">
            <Star className="mr-1 h-4 w-4 fill-amber-500" />
            <span className="mr-1 text-sm font-medium">{recipe.rating}</span>
            <span className="text-xs text-gray-500">({recipe.reviews})</span>
          </div>
          <div className="flex gap-3 text-sm text-gray-500">
            <div className="flex items-center">
              <Clock className="mr-1 h-4 w-4" />
              <span>{totalTime} min</span>
            </div>
            <div className="flex items-center">
              <Users className="mr-1 h-4 w-4" />
              <span>{recipe.servings}</span>
            </div>
          </div>
        </div>
        
        <h3 className="mb-1 text-lg font-bold text-gray-900 line-clamp-1">
          {recipe.title}
        </h3>
        
        <p className="mb-3 text-sm text-gray-600 line-clamp-2">
          {recipe.description}
        </p>
        
        <div className="flex flex-wrap gap-1">
          {recipe.categories.slice(0, 2).map((category, index) => (
            <span 
              key={index}
              className="rounded-full bg-gray-100 px-2 py-1 text-xs font-medium text-gray-700"
            >
              {category}
            </span>
          ))}
          {recipe.categories.length > 2 && (
            <span className="rounded-full bg-gray-100 px-2 py-1 text-xs font-medium text-gray-700">
              +{recipe.categories.length - 2}
            </span>
          )}
        </div>
      </div>
    </Link>
  );
};

export default RecipeCard;