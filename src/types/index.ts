export interface Recipe {
  id: string;
  title: string;
  description: string;
  image: string;
  prepTime: number;
  cookTime: number;
  servings: number;
  difficulty: 'easy' | 'medium' | 'hard';
  categories: string[];
  tags: string[];
  ingredients: string[];
  instructions: string[];
  rating: number;
  reviews: number;
  isFeatured: boolean;
  isPopular: boolean;
}

export type Category = {
  id: string;
  name: string;
  icon: string;
};