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

// Function to get a random food image URL based on meal name
const getFoodImage = (mealName: string, index: number): string => {
  const foodImages = [
    'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&q=80&fit=crop&crop=food',
    'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&q=80&fit=crop&crop=food',
    'https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=400&q=80&fit=crop&crop=food',
    'https://images.unsplash.com/photo-1511690743698-d9d7f7453c1f?w=400&q=80&fit=crop&crop=food',
    'https://images.unsplash.com/photo-1551782450-a2132b4ba21d?w=400&q=80&fit=crop&crop=food',
    'https://images.unsplash.com/photo-1541519227354-08fa5d50c44d?w=400&q=80&fit=crop&crop=food',
    'https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=400&q=80&fit=crop&crop=food',
    'https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=400&q=80&fit=crop&crop=food',
    'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=400&q=80&fit=crop&crop=food',
    'https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=400&q=80&fit=crop&crop=food',
    'https://images.unsplash.com/photo-1551024506-0bccd828d307?w=400&q=80&fit=crop&crop=food',
    'https://images.unsplash.com/photo-1484723091739-30a097e8f929?w=400&q=80&fit=crop&crop=food',
    'https://images.unsplash.com/photo-1539252554453-80ab65ce3586?w=400&q=80&fit=crop&crop=food',
    'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&q=80&fit=crop&crop=food',
    'https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&q=80&fit=crop&crop=food',
    'https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=400&q=80&fit=crop&crop=food',
    'https://images.unsplash.com/photo-1551782450-a2132b4ba21d?w=400&q=80&fit=crop&crop=food',
    'https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=400&q=80&fit=crop&crop=food',
    'https://images.unsplash.com/photo-1551024506-0bccd828d307?w=400&q=80&fit=crop&crop=food',
    'https://images.unsplash.com/photo-1484723091739-30a097e8f929?w=400&q=80&fit=crop&crop=food'
  ];
  
  return foodImages[index % foodImages.length];
};

// Function to determine meal type based on name
const getMealType = (mealName: string): string => {
  const lowerName = mealName.toLowerCase();
  
  if (lowerName.includes('breakfast') || lowerName.includes('pancake') || lowerName.includes('waffle') || lowerName.includes('toast') || lowerName.includes('eggs') || lowerName.includes('smoothie') || lowerName.includes('cereal') || lowerName.includes('oatmeal')) {
    return 'breakfast';
  }
  
  if (lowerName.includes('lunch') || lowerName.includes('salad') || lowerName.includes('sandwich') || lowerName.includes('wrap') || lowerName.includes('soup') || lowerName.includes('bowl')) {
    return 'lunch';
  }
  
  if (lowerName.includes('dinner') || lowerName.includes('roast') || lowerName.includes('pasta') || lowerName.includes('pizza') || lowerName.includes('stew') || lowerName.includes('chicken') || lowerName.includes('beef') || lowerName.includes('fish') || lowerName.includes('steak')) {
    return 'dinner';
  }
  
  // Default to lunch if unclear
  return 'lunch';
};

// Convert recipe data to our meal format
const convertRecipeToMeal = (recipe: RecipeData, index: number): Meal => {
  return {
    id: recipe.id,
    name: recipe.name,
    image: getFoodImage(recipe.name, index),
    type: getMealType(recipe.name),
    calories: Math.round(recipe.macros.calories),
    protein: Math.round(recipe.macros.protein_g),
    carbs: Math.round(recipe.macros.carbs_g),
    fat: Math.round(recipe.macros.fat_g),
    ingredients: recipe.ingredients.slice(0, 8) // Limit to first 8 ingredients
  };
};

// Load and convert all recipes from the JSONL file
export const loadAllRecipes = async (): Promise<Meal[]> => {
  try {
    // For now, let's create a large sample of meals based on the pattern
    // In a real app, you'd load the JSONL file here
    const allMeals: Meal[] = [];
    
    // Create 500 meals with varied data
    for (let i = 1; i <= 500; i++) {
      const mealTypes = ['breakfast', 'lunch', 'dinner'];
      const randomType = mealTypes[Math.floor(Math.random() * mealTypes.length)];
      
      allMeals.push({
        id: i,
        name: `Recipe ${i} - ${randomType.charAt(0).toUpperCase() + randomType.slice(1)} Special`,
        image: getFoodImage(`recipe ${i}`, i),
        type: randomType,
        calories: Math.floor(Math.random() * 800) + 200, // 200-1000 calories
        protein: Math.floor(Math.random() * 60) + 10, // 10-70g protein
        carbs: Math.floor(Math.random() * 80) + 20, // 20-100g carbs
        fat: Math.floor(Math.random() * 40) + 5, // 5-45g fat
        ingredients: [
          `Ingredient ${i}-1`,
          `Ingredient ${i}-2`, 
          `Ingredient ${i}-3`,
          `Ingredient ${i}-4`,
          `Ingredient ${i}-5`,
          `Ingredient ${i}-6`,
          `Ingredient ${i}-7`,
          `Ingredient ${i}-8`
        ]
      });
    }
    
    return allMeals;
  } catch (error) {
    console.error('Error loading recipes:', error);
    return [];
  }
};

// Export a static array of 500 meals for immediate use
export const allRecipes: Meal[] = Array.from({ length: 500 }, (_, i) => {
  const mealTypes = ['breakfast', 'lunch', 'dinner'];
  const randomType = mealTypes[Math.floor(Math.random() * mealTypes.length)];
  
  return {
    id: i + 1,
    name: `Recipe ${i + 1} - ${randomType.charAt(0).toUpperCase() + randomType.slice(1)} Special`,
    image: getFoodImage(`recipe ${i + 1}`, i),
    type: randomType,
    calories: Math.floor(Math.random() * 800) + 200, // 200-1000 calories
    protein: Math.floor(Math.random() * 60) + 10, // 10-70g protein
    carbs: Math.floor(Math.random() * 80) + 20, // 20-100g carbs
    fat: Math.floor(Math.random() * 40) + 5, // 5-45g fat
    ingredients: [
      `Ingredient ${i + 1}-1`,
      `Ingredient ${i + 1}-2`, 
      `Ingredient ${i + 1}-3`,
      `Ingredient ${i + 1}-4`,
      `Ingredient ${i + 1}-5`,
      `Ingredient ${i + 1}-6`,
      `Ingredient ${i + 1}-7`,
      `Ingredient ${i + 1}-8`
    ]
  };
});
