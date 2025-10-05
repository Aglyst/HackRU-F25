import * as FileSystem from 'expo-file-system';
import { Asset } from 'expo-asset';
import { Meal } from './mealsData';

interface RecipeData {
  id: number;
  name: string;
  minutes: number | null;
  calories: number | null;
  ingredients: string[];
  steps: string[];
  text_blob: string;
  macros: {
    calories: number;
    protein_g: number;
    carbs_g: number;
    fat_g: number;
  };
}

// Food images for different meal types
const foodImages = [
  // Breakfast
  'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&q=80&fit=crop&crop=food',
  // Lunch
  'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&q=80&fit=crop&crop=food',
  // Dinner
  'https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=400&q=80&fit=crop&crop=food'
];

// Function to get a food image based on meal type
const getFoodImage = (mealType: string): string => {
  const typeIndex = ['breakfast', 'lunch', 'dinner'].indexOf(mealType);
  return foodImages[typeIndex >= 0 ? typeIndex : 0];
};

// Function to determine meal type based on name and ingredients
const getMealType = (recipe: RecipeData): string => {
  const lowerName = recipe.name.toLowerCase();
  const ingredients = recipe.ingredients.join(' ').toLowerCase();
  
  // Check for breakfast items
  if (lowerName.includes('pancake') || lowerName.includes('waffle') || 
      lowerName.includes('toast') || lowerName.includes('yogurt') || 
      lowerName.includes('oatmeal') || lowerName.includes('smoothie') ||
      lowerName.includes('breakfast') || ingredients.includes('egg') ||
      ingredients.includes('bacon') || ingredients.includes('pancake')) {
    return 'breakfast';
  } 
  // Check for lunch items
  else if (lowerName.includes('salad') || lowerName.includes('sandwich') || 
           lowerName.includes('soup') || lowerName.includes('wrap') ||
           lowerName.includes('lunch') || ingredients.includes('salad') ||
           ingredients.includes('sandwich') || ingredients.includes('soup')) {
    return 'lunch';
  } 
  // Default to dinner
  else {
    return 'dinner';
  }
};

// Convert recipe data to our meal format
const convertRecipeToMeal = (recipe: RecipeData): Meal => {
  const mealType = getMealType(recipe);
  
  return {
    id: recipe.id,
    name: recipe.name,
    image: getFoodImage(mealType),
    type: mealType,
    calories: Math.round(recipe.macros.calories) || 0,
    protein: Math.round(recipe.macros.protein_g) || 0,
    carbs: Math.round(recipe.macros.carbs_g) || 0,
    fat: Math.round(recipe.macros.fat_g) || 0,
    ingredients: recipe.ingredients
  };
};

// Load and convert all recipes from the JSONL file
export const loadAllRecipes = async (): Promise<Meal[]> => {
  try {
    // Load the JSONL file
    const fileUri = Asset.fromModule(require('./recipes_top500_with_macros.jsonl')).uri;
    const fileContent = await FileSystem.readAsStringAsync(fileUri);
    
    // Parse JSONL file (each line is a separate JSON object)
    const recipes = fileContent
      .split('\n')
      .filter(line => line.trim() !== '')
      .map(line => JSON.parse(line) as RecipeData);
    
    // Convert to Meal format
    return recipes.map(recipe => convertRecipeToMeal(recipe));
  } catch (error) {
    console.error('Error loading recipes:', error);
    return [];
  }
};

// This will be populated when the app loads
export let allRecipes: Meal[] = [];

// Initialize the recipes when the module loads
(async () => {
  allRecipes = await loadAllRecipes();
  console.log(`Loaded ${allRecipes.length} recipes`);
})();
