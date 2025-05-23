import React from 'react';
import { Search, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  return (
    <div className="relative mb-12 overflow-hidden rounded-2xl bg-gradient-to-r from-green-600 to-green-800 px-4 py-16 text-white sm:px-6 md:px-12 lg:px-16">
      <div className="absolute inset-0 opacity-20">
        <svg
          className="h-full w-full"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1000 1000"
          preserveAspectRatio="none"
        >
          <defs>
            <pattern
              id="pattern"
              width="100"
              height="100"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="1" cy="1" r="1" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#pattern)" />
        </svg>
      </div>
      
      <div className="relative mx-auto max-w-3xl text-center">
        <h1 className="mb-4 text-3xl font-bold leading-tight sm:text-4xl md:text-5xl lg:text-6xl">
          Discover Delicious Recipes for Every Occasion
        </h1>
        <p className="mb-8 text-lg text-white/90 md:text-xl">
          Your smart companion for cooking amazing meals. Find recipes, get step-by-step instructions, and become a better chef.
        </p>
        
        <div className="mb-8 flex justify-center">
          <div className="relative w-full max-w-lg">
            <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search for a recipe..."
              className="h-14 w-full rounded-full bg-white pl-12 pr-24 text-gray-800 shadow-lg focus:outline-none focus:ring-2 focus:ring-green-400"
            />
            <button
              type="button"
              className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-green-500 px-6 py-2 font-medium text-white transition-colors hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2"
            >
              Search
            </button>
          </div>
        </div>
        
        <div className="flex flex-wrap justify-center gap-3">
          <Link to="/categories/quick" className="inline-flex items-center rounded-full bg-white/20 px-4 py-2 text-sm font-medium backdrop-blur-sm hover:bg-white/30">
            Quick & Easy
          </Link>
          <Link to="/categories/vegetarian" className="inline-flex items-center rounded-full bg-white/20 px-4 py-2 text-sm font-medium backdrop-blur-sm hover:bg-white/30">
            Vegetarian
          </Link>
          <Link to="/categories/dessert" className="inline-flex items-center rounded-full bg-white/20 px-4 py-2 text-sm font-medium backdrop-blur-sm hover:bg-white/30">
            Desserts
          </Link>
          <Link to="/categories/dinner" className="inline-flex items-center rounded-full bg-white/20 px-4 py-2 text-sm font-medium backdrop-blur-sm hover:bg-white/30">
            Dinner Ideas
          </Link>
          <Link to="/categories" className="inline-flex items-center rounded-full bg-white/20 px-4 py-2 text-sm font-medium backdrop-blur-sm hover:bg-white/30">
            All Categories
            <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;