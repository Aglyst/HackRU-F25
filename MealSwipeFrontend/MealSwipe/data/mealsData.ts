export interface Meal {
  id: number;
  name: string;
  image: string;
  type: string;
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
  ingredients: string[];
  dietaryRestrictions?: string[];
}

import { loadAllRecipes, allRecipes } from './recipeService';

export { allRecipes as mealsData };

export const getMealsByType = (type: string): Meal[] => {
  return allRecipes.filter(meal => meal.type === type);
};

export const getMealById = (id: number): Meal | undefined => {
  return allRecipes.find(meal => meal.id === id);
};

// Initialize the recipes when this module is imported
loadAllRecipes().then(() => {
  console.log('Meals data initialized');
});
