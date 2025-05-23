import React from 'react';
import { useParams } from 'react-router-dom';
import RecipeList from '../components/recipe/RecipeList';
import { recipes, categories } from '../data/recipes';

const CategoryPage: React.FC = () => {
  const { categoryName } = useParams<{ categoryName?: string }>();
  
  let filteredRecipes = recipes;
  let categoryTitle = 'All Recipes';
  
  if (categoryName) {
    const normalizedCategoryName = categoryName.toLowerCase();
    
    filteredRecipes = recipes.filter((recipe) =>
      recipe.categories.some((category) => 
        category.toLowerCase() === normalizedCategoryName
      )
    );
    
    const matchedCategory = categories.find(
      (cat) => cat.name.toLowerCase() === normalizedCategoryName
    );
    
    if (matchedCategory) {
      categoryTitle = matchedCategory.name + ' Recipes';
    } else {
      categoryTitle = categoryName.charAt(0).toUpperCase() + categoryName.slice(1) + ' Recipes';
    }
  }
  
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">{categoryTitle}</h1>
        <p className="text-gray-600">
          {filteredRecipes.length} {filteredRecipes.length === 1 ? 'recipe' : 'recipes'} found
        </p>
      </div>
      
      {filteredRecipes.length > 0 ? (
        <RecipeList recipes={filteredRecipes} />
      ) : (
        <div className="flex h-40 items-center justify-center rounded-lg bg-gray-50 text-center">
          <p className="text-gray-500">No recipes found in this category.</p>
        </div>
      )}
    </div>
  );
};

export default CategoryPage;