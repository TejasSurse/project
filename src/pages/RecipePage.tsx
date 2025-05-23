import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import RecipeDetail from '../components/recipe/RecipeDetail';
import RecipeList from '../components/recipe/RecipeList';
import { recipes } from '../data/recipes';

const RecipePage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  
  const recipe = recipes.find((r) => r.id === id);
  
  if (!recipe) {
    return <Navigate to="/" />;
  }
  
  // Get similar recipes (same category, excluding current recipe)
  const similarRecipes = recipes
    .filter((r) => 
      r.id !== recipe.id && 
      r.categories.some((cat) => recipe.categories.includes(cat))
    )
    .slice(0, 4);
  
  return (
    <div className="space-y-12">
      <RecipeDetail recipe={recipe} />
      
      {similarRecipes.length > 0 && (
        <div className="py-8">
          <RecipeList
            recipes={similarRecipes}
            title="You Might Also Like"
          />
        </div>
      )}
    </div>
  );
};

export default RecipePage;