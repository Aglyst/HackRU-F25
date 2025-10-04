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
const getFoodImage = (mealName: string): string => {
  const foodKeywords = [
    'chicken', 'beef', 'pork', 'fish', 'salmon', 'tuna', 'shrimp', 'crab',
    'pasta', 'pizza', 'burger', 'sandwich', 'salad', 'soup', 'stew',
    'rice', 'quinoa', 'bread', 'toast', 'pancake', 'waffle', 'eggs',
    'cheese', 'yogurt', 'smoothie', 'fruit', 'vegetable', 'potato',
    'pasta', 'noodles', 'ramen', 'tacos', 'burrito', 'wrap'
  ];
  
  const lowerName = mealName.toLowerCase();
  const matchedKeyword = foodKeywords.find(keyword => lowerName.includes(keyword));
  
  if (matchedKeyword) {
    return `https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&q=80&fit=crop&crop=food`;
  }
  
  // Default food image
  return `https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&q=80&fit=crop&crop=food`;
};

// Function to determine meal type based on name
const getMealType = (mealName: string): string => {
  const lowerName = mealName.toLowerCase();
  
  if (lowerName.includes('breakfast') || lowerName.includes('pancake') || lowerName.includes('waffle') || lowerName.includes('toast') || lowerName.includes('eggs') || lowerName.includes('smoothie')) {
    return 'breakfast';
  }
  
  if (lowerName.includes('lunch') || lowerName.includes('salad') || lowerName.includes('sandwich') || lowerName.includes('wrap')) {
    return 'lunch';
  }
  
  if (lowerName.includes('dinner') || lowerName.includes('roast') || lowerName.includes('pasta') || lowerName.includes('pizza') || lowerName.includes('stew') || lowerName.includes('soup')) {
    return 'dinner';
  }
  
  // Default to lunch if unclear
  return 'lunch';
};

// Convert recipe data to our meal format
export const convertRecipeToMeal = (recipe: RecipeData): Meal => {
  return {
    id: recipe.id,
    name: recipe.name,
    image: getFoodImage(recipe.name),
    type: getMealType(recipe.name),
    calories: Math.round(recipe.macros.calories),
    protein: Math.round(recipe.macros.protein_g),
    carbs: Math.round(recipe.macros.carbs_g),
    fat: Math.round(recipe.macros.fat_g),
    ingredients: recipe.ingredients.slice(0, 8) // Limit to first 8 ingredients
  };
};

// Sample of converted meals (first 25 recipes)
export const convertedMeals: Meal[] = [
  {
    id: 1,
    name: "Miso-Butter Roast Chicken With Acorn Squash Panzanella",
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400&q=80&fit=crop&crop=food",
    type: "dinner",
    calories: 820,
    protein: 62,
    carbs: 62,
    fat: 36,
    ingredients: ["1 (3½–4-lb.) whole chicken", "2¾ tsp. kosher salt, divided, plus more", "2 small acorn squash (about 3 lb. total)", "2 Tbsp. finely chopped sage", "1 Tbsp. finely chopped rosemary", "6 Tbsp. unsalted butter, melted, plus 3 Tbsp. room temperature", "¼ tsp. ground allspice", "Pinch of crushed red pepper flakes"]
  },
  {
    id: 2,
    name: "Crispy Salt and Pepper Potatoes",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&q=80&fit=crop&crop=food",
    type: "lunch",
    calories: 400,
    protein: 40,
    carbs: 40,
    fat: 9,
    ingredients: ["2 large egg whites", "1 pound new potatoes (about 1 inch in diameter)", "2 teaspoons kosher salt", "¾ teaspoon finely ground black pepper", "1 teaspoon finely chopped rosemary", "1 teaspoon finely chopped thyme", "1 teaspoon finely chopped parsley"]
  },
  {
    id: 3,
    name: "Thanksgiving Mac and Cheese",
    image: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=400&q=80&fit=crop&crop=food",
    type: "dinner",
    calories: 670,
    protein: 84,
    carbs: 21,
    fat: 28,
    ingredients: ["1 cup evaporated milk", "1 cup whole milk", "1 tsp. garlic powder", "1 tsp. onion powder", "1 tsp. smoked paprika", "½ tsp. freshly ground black pepper", "1 tsp. kosher salt, plus more", "2 lb. extra-sharp cheddar, coarsely grated"]
  },
  {
    id: 4,
    name: "Italian Sausage and Bread Stuffing",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&q=80&fit=crop&crop=food",
    type: "dinner",
    calories: 840,
    protein: 105,
    carbs: 21,
    fat: 37,
    ingredients: ["1 (¾- to 1-pound) round Italian loaf, cut into 1-inch cubes (8 cups)", "2 tablespoons olive oil, divided", "2 pounds sweet Italian sausage, casings removed, divided", "1 stick unsalted butter, cut into pieces", "3 medium onions, chopped", "4 large celery ribs, chopped", "5 garlic cloves, minced", "4 large eggs, lightly beaten"]
  },
  {
    id: 5,
    name: "Newton's Law",
    image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?w=400&q=80&fit=crop&crop=food",
    type: "lunch",
    calories: 410,
    protein: 21,
    carbs: 41,
    fat: 18,
    ingredients: ["1 teaspoon dark brown sugar", "1 teaspoon hot water", "1 ½ oz. bourbon", "½ oz. fresh lemon juice", "2 teaspoons apple butter (storebought or homemade)", "Garnish: orange twist and freshly grated or ground cinnamon"]
  }
];
