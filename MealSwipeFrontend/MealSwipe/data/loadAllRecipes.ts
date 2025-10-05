import { Meal } from './mealsData';
import { recipes } from './recipeData';

// Embedded recipes as a fallback
// const embeddedRecipes = [
//   {
//     id: 1,
//     name: 'Burst Cherry Tomato Pasta',
//     minutes: 20,
//     calories: 450,
//     ingredients: ['pasta', 'cherry tomatoes', 'garlic', 'olive oil', 'basil', 'parmesan'],
//     steps: ['Cook pasta', 'Sauté garlic and tomatoes', 'Combine and serve'],
//     text_blob: 'Burst Cherry Tomato Pasta is a quick and delicious meal...',
//     macros: { calories: 450, protein_g: 15, carbs_g: 60, fat_g: 18 }
//   },
//   {
//     id: 2,
//     name: 'Avocado Toast with Egg',
//     minutes: 10,
//     calories: 350,
//     ingredients: ['bread', 'avocado', 'eggs', 'salt', 'pepper', 'red pepper flakes'],
//     steps: ['Toast bread', 'Mash avocado', 'Fry egg', 'Assemble and season'],
//     text_blob: 'A simple and nutritious breakfast option...',
//     macros: { calories: 350, protein_g: 12, carbs_g: 30, fat_g: 22 }
//   },
//   {
//     id: 3,
//     name: 'Chicken Caesar Salad',
//     minutes: 25,
//     calories: 380,
//     ingredients: ['chicken breast', 'romaine lettuce', 'parmesan', 'croutons', 'caesar dressing'],
//     steps: ['Grill chicken', 'Chop lettuce', 'Toss with dressing and toppings'],
//     text_blob: 'Classic Caesar salad with grilled chicken...',
//     macros: { calories: 380, protein_g: 35, carbs_g: 20, fat_g: 18 }
//   },
//   {
//     id: 4,
//     name: 'Vegetable Stir Fry',
//     minutes: 15,
//     calories: 320,
//     ingredients: ['mixed vegetables', 'tofu', 'soy sauce', 'garlic', 'ginger', 'sesame oil'],
//     steps: ['Stir-fry vegetables', 'Add tofu and sauce', 'Cook until heated through'],
//     text_blob: 'Quick and healthy vegetable stir fry...',
//     macros: { calories: 320, protein_g: 18, carbs_g: 35, fat_g: 14 }
//   },
//   {
//     id: 5,
//     name: 'Berry Smoothie Bowl',
//     minutes: 5,
//     calories: 280,
//     ingredients: ['mixed berries', 'banana', 'yogurt', 'granola', 'honey'],
//     steps: ['Blend fruits and yogurt', 'Pour into bowl', 'Top with granola and honey'],
//     text_blob: 'Refreshing and nutritious smoothie bowl...',
//     macros: { calories: 280, protein_g: 8, carbs_g: 55, fat_g: 5 }
//   }
// ];

export interface RecipeData {
  id: number;
  name: string;
  minutes: number | null;
  calories: number | null;
  ingredients: string[];
  steps: string[];
  text_blob: string;
  imageUrl?: string;
  macros: {
    calories: number;
    protein_g: number;
    carbs_g: number;
    fat_g: number;
  };
  mealType: "breakfast" | "lunch" | "dinner";
  dietaryRestrictions: string[]; // e.g., ["vegetarian", "gluten-free"]
}

// // Food images for different meal types
// const foodImages = [
//   // Breakfast
//   'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&q=80&fit=crop&crop=food',
//   // Lunch
//   'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&q=80&fit=crop&crop=food',
//   // Dinner
//   'https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=400&q=80&fit=crop&crop=food'
// ];

// // Function to get a food image based on meal type
// const getFoodImage = (mealType: string): string => {
//   const typeIndex = ['breakfast', 'lunch', 'dinner'].indexOf(mealType);
//   return foodImages[typeIndex >= 0 ? typeIndex : 0];
// };

// Function to determine meal type based on name and ingredients
// const getMealType = (recipe: RecipeData): string => {
//   const lowerName = recipe.name.toLowerCase();
//   const ingredients = recipe.ingredients.join(' ').toLowerCase();
  
//   // Check for breakfast items
//   if (lowerName.includes('pancake') || lowerName.includes('waffle') || 
//       lowerName.includes('toast') || lowerName.includes('yogurt') || 
//       lowerName.includes('oatmeal') || lowerName.includes('smoothie') ||
//       lowerName.includes('breakfast') || ingredients.includes('egg') ||
//       ingredients.includes('bacon') || ingredients.includes('pancake')) {
//     return 'breakfast';
//   } 
//   // Check for lunch items
//   else if (lowerName.includes('salad') || lowerName.includes('sandwich') || 
//            lowerName.includes('soup') || lowerName.includes('wrap') ||
//            lowerName.includes('lunch') || ingredients.includes('salad') ||
//            ingredients.includes('sandwich') || ingredients.includes('soup')) {
//     return 'lunch';
//   } 
//   // Default to dinner
//   else {
//     return 'dinner';
//   }
// };

// A simple food placeholder image
// const PLACEHOLDER_IMAGE = 'https://via.placeholder.com/300x200.png?text=No+Image+Available';

// Convert recipe data to our meal format
const convertRecipeToMeal = (recipe: RecipeData): Meal => {
  const mealType = getMealType(recipe);
  
  return {
    id: recipe.id,
    name: recipe.name,
    // Use the provided image URL or fall back to placeholder
    image: recipe.imageUrl || PLACEHOLDER_IMAGE,
    type: mealType,
    calories: Math.round(recipe.macros.calories) || 0,
    protein: Math.round(recipe.macros.protein_g) || 0,
    carbs: Math.round(recipe.macros.carbs_g) || 0,
    fat: Math.round(recipe.macros.fat_g) || 0,
    ingredients: recipe.ingredients
  };
};

// Helper function to load recipes
const loadRecipes = async (): Promise<RecipeData[]> => {
  try {
    // First, try to use newRecipes
    if (recipes && recipes.length > 0) {
      console.log(`Using ${recipes.length} recipes from newRecipes`);
      return recipes;
    }
    
    // Fall back to embedded recipes if available
    // if (embeddedRecipes && embeddedRecipes.length > 0) {
    //   console.log('Falling back to embedded recipes');
    //   return embeddedRecipes;
    // }
    
    throw new Error('No recipes available');
  } catch (error) {
    console.error('Error loading recipes:', error);
    throw error;
  }
};
// Load and convert all recipes
export const loadAllRecipes = async (): Promise<Meal[]> => {
  try {
    console.log('Loading recipes...');
    
    // Try to load recipes
    const recipes = await loadRecipes();
    console.log(`Successfully loaded ${recipes.length} recipes`);
    
    // Convert to Meal format and return a random selection of recipes
    return recipes
      .map(recipe => convertRecipeToMeal(recipe))
      .sort(() => 0.5 - Math.random())
      .slice(0, 50);
  } catch (error) {
    console.error('Error loading recipes, falling back to sample recipes:', error);
    
    // Fall back to the sample recipes if there's an error
    return recipes.map(recipe => convertRecipeToMeal(recipe));
  }
};
// This will be populated when the app loads
export let allRecipes: Meal[] = [];

// Initialize with our new recipes
loadAllRecipes().then(recipes => {
  allRecipes = recipes;
});
