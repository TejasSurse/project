import React, { useState } from 'react';
import { Clock, Users, ChefHat, Star, Heart, Share2, Printer, ArrowLeft } from 'lucide-react';
import { Recipe } from '../../types';
import Button from '../ui/Button';
import { Link, useParams } from 'react-router-dom';

interface RecipeDetailProps {
  recipe: Recipe;
}

const RecipeDetail: React.FC<RecipeDetailProps> = ({ recipe }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const totalTime = recipe.prepTime + recipe.cookTime;
  
  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <div className="mx-auto max-w-5xl">
      <Link to="/" className="mb-4 inline-flex items-center text-green-600 hover:text-green-700">
        <ArrowLeft className="mr-1 h-4 w-4" />
        Back to recipes
      </Link>
      
      <div className="overflow-hidden rounded-xl bg-white shadow-md">
        <div className="relative h-80 md:h-96">
          <img
            src={recipe.image}
            alt={recipe.title}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          <div className="absolute bottom-0 left-0 p-6">
            <div className="mb-2 flex flex-wrap gap-2">
              {recipe.categories.map((category, index) => (
                <span
                  key={index}
                  className="rounded-full bg-white/20 px-3 py-1 text-sm backdrop-blur-sm text-white"
                >
                  {category}
                </span>
              ))}
            </div>
            <h1 className="mb-2 text-3xl font-bold text-white md:text-4xl">
              {recipe.title}
            </h1>
            <div className="flex items-center text-white">
              <div className="flex items-center mr-4">
                <Star className="mr-1 h-5 w-5 fill-amber-400 text-amber-400" />
                <span className="font-medium">{recipe.rating}</span>
                <span className="ml-1 text-sm opacity-80">({recipe.reviews})</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="p-6">
          <div className="mb-8 flex flex-wrap justify-between gap-4">
            <div className="flex flex-wrap gap-6">
              <div className="flex items-center">
                <Clock className="mr-2 h-5 w-5 text-green-600" />
                <div>
                  <p className="text-sm text-gray-500">Total Time</p>
                  <p className="font-medium">{totalTime} min</p>
                </div>
              </div>
              <div className="flex items-center">
                <ChefHat className="mr-2 h-5 w-5 text-green-600" />
                <div>
                  <p className="text-sm text-gray-500">Difficulty</p>
                  <p className="font-medium capitalize">{recipe.difficulty}</p>
                </div>
              </div>
              <div className="flex items-center">
                <Users className="mr-2 h-5 w-5 text-green-600" />
                <div>
                  <p className="text-sm text-gray-500">Servings</p>
                  <p className="font-medium">{recipe.servings}</p>
                </div>
              </div>
            </div>
            
            <div className="flex gap-2">
              <Button
                variant={isFavorite ? 'primary' : 'outline'}
                size="sm"
                onClick={toggleFavorite}
                className={isFavorite ? 'bg-red-500 hover:bg-red-600' : ''}
              >
                <Heart className={`mr-1 h-4 w-4 ${isFavorite ? 'fill-white' : ''}`} />
                {isFavorite ? 'Saved' : 'Save'}
              </Button>
              <Button variant="outline" size="sm">
                <Share2 className="mr-1 h-4 w-4" />
                Share
              </Button>
              <Button variant="outline" size="sm">
                <Printer className="mr-1 h-4 w-4" />
                Print
              </Button>
            </div>
          </div>
          
          <div className="mb-8">
            <h2 className="mb-3 text-xl font-bold text-gray-900">Description</h2>
            <p className="text-gray-700">{recipe.description}</p>
          </div>
          
          <div className="mb-8">
            <h2 className="mb-4 text-xl font-bold text-gray-900">Ingredients</h2>
            <ul className="space-y-2">
              {recipe.ingredients.map((ingredient, index) => (
                <li key={index} className="flex items-start">
                  <span className="mr-2 mt-1 h-2 w-2 rounded-full bg-green-600"></span>
                  <span>{ingredient}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h2 className="mb-4 text-xl font-bold text-gray-900">Instructions</h2>
            <ol className="space-y-6">
              {recipe.instructions.map((instruction, index) => (
                <li key={index} className="flex">
                  <span className="mr-4 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-green-100 text-green-600 font-bold">
                    {index + 1}
                  </span>
                  <p className="pt-1">{instruction}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetail;