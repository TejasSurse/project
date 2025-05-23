import React from 'react';
import Hero from '../components/home/Hero';
import CategorySection from '../components/home/CategorySection';
import RecipeList from '../components/recipe/RecipeList';
import { recipes, categories } from '../data/recipes';

const Home: React.FC = () => {
  // Filter featured and popular recipes
  const featuredRecipes = recipes.filter((recipe) => recipe.isFeatured);
  const popularRecipes = recipes.filter((recipe) => recipe.isPopular);
  
  return (
    <>
      <Hero />
      
      <CategorySection categories={categories} />
      
      <section className="py-12">
        <RecipeList
          recipes={featuredRecipes}
          title="Featured Recipes"
          className="mb-12"
        />
        
        <RecipeList
          recipes={popularRecipes}
          title="Popular Recipes"
        />
      </section>
    </>
  );
};

export default Home;