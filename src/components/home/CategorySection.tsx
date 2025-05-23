import React from 'react';
import { DivideIcon as LucideIcon } from 'lucide-react';
import * as LucideIcons from 'lucide-react';
import { Link } from 'react-router-dom';
import { Category } from '../../types';

interface CategoryCardProps {
  category: Category;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ category }) => {
  // Dynamically get the icon from Lucide
  const IconComponent = LucideIcons[category.icon as keyof typeof LucideIcons] as LucideIcon;
  
  return (
    <Link
      to={`/categories/${category.name.toLowerCase()}`}
      className="group flex flex-col items-center rounded-lg bg-white p-6 text-center shadow-md transition-all duration-300 hover:shadow-lg"
    >
      <div className="mb-3 flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-green-600 transition-colors duration-300 group-hover:bg-green-600 group-hover:text-white">
        {IconComponent && <IconComponent className="h-8 w-8" />}
      </div>
      <h3 className="text-lg font-semibold text-gray-900">{category.name}</h3>
    </Link>
  );
};

interface CategorySectionProps {
  categories: Category[];
}

const CategorySection: React.FC<CategorySectionProps> = ({ categories }) => {
  return (
    <section className="py-12">
      <div className="mb-8 text-center">
        <h2 className="mb-2 text-3xl font-bold text-gray-900">Recipe Categories</h2>
        <p className="mx-auto max-w-2xl text-gray-600">
          Browse through our collection of recipes by category to find exactly what you're looking for.
        </p>
      </div>
      
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-8">
        {categories.map((category) => (
          <CategoryCard key={category.id} category={category} />
        ))}
      </div>
      
      <div className="mt-8 text-center">
        <Link
          to="/categories"
          className="inline-flex items-center rounded-full bg-green-600 px-6 py-3 font-medium text-white transition-colors hover:bg-green-700"
        >
          View All Categories
        </Link>
      </div>
    </section>
  );
};

export default CategorySection;