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
}

export const mealsData: Meal[] = [
  // Original 5 meals
  {
    id: 1,
    name: "Grilled Chicken Salad",
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400",
    type: "lunch",
    calories: 350,
    protein: 25,
    carbs: 15,
    fat: 20,
    ingredients: ["Chicken breast", "Mixed greens", "Cherry tomatoes", "Cucumber", "Olive oil", "Lemon"]
  },
  {
    id: 2,
    name: "Avocado Toast",
    image: "https://images.unsplash.com/photo-1541519227354-08fa5d50c44d?w=400",
    type: "breakfast",
    calories: 280,
    protein: 12,
    carbs: 35,
    fat: 15,
    ingredients: ["Whole grain bread", "Avocado", "Egg", "Salt", "Pepper", "Red pepper flakes"]
  },
  {
    id: 3,
    name: "Beef Stir Fry",
    image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=400",
    type: "dinner",
    calories: 420,
    protein: 30,
    carbs: 25,
    fat: 22,
    ingredients: ["Beef strips", "Broccoli", "Bell peppers", "Soy sauce", "Garlic", "Ginger", "Rice"]
  },
  {
    id: 4,
    name: "Greek Yogurt Bowl",
    image: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d?w=400",
    type: "breakfast",
    calories: 320,
    protein: 20,
    carbs: 40,
    fat: 8,
    ingredients: ["Greek yogurt", "Berries", "Granola", "Honey", "Chia seeds"]
  },
  {
    id: 5,
    name: "Salmon with Quinoa",
    image: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=400",
    type: "dinner",
    calories: 450,
    protein: 35,
    carbs: 30,
    fat: 18,
    ingredients: ["Salmon fillet", "Quinoa", "Asparagus", "Lemon", "Dill", "Olive oil"]
  },

  // Breakfast meals (6-25)
  {
    id: 6,
    name: "Pancakes with Berries",
    image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=400",
    type: "breakfast",
    calories: 380,
    protein: 15,
    carbs: 55,
    fat: 12,
    ingredients: ["Flour", "Eggs", "Milk", "Butter", "Blueberries", "Strawberries", "Maple syrup"]
  },
  {
    id: 7,
    name: "Overnight Oats",
    image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=400",
    type: "breakfast",
    calories: 290,
    protein: 18,
    carbs: 35,
    fat: 8,
    ingredients: ["Oats", "Almond milk", "Chia seeds", "Banana", "Almonds", "Honey"]
  },
  {
    id: 8,
    name: "Breakfast Burrito",
    image: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d?w=400",
    type: "breakfast",
    calories: 420,
    protein: 22,
    carbs: 40,
    fat: 18,
    ingredients: ["Tortilla", "Scrambled eggs", "Black beans", "Cheese", "Salsa", "Avocado"]
  },
  {
    id: 9,
    name: "Smoothie Bowl",
    image: "https://images.unsplash.com/photo-1511690743698-d9d7f7453c1f?w=400",
    type: "breakfast",
    calories: 250,
    protein: 12,
    carbs: 45,
    fat: 6,
    ingredients: ["Frozen berries", "Banana", "Spinach", "Almond milk", "Granola", "Coconut flakes"]
  },
  {
    id: 10,
    name: "Eggs Benedict",
    image: "https://images.unsplash.com/photo-1551024506-0bccd828d307?w=400",
    type: "breakfast",
    calories: 520,
    protein: 28,
    carbs: 25,
    fat: 35,
    ingredients: ["English muffin", "Poached eggs", "Canadian bacon", "Hollandaise sauce", "Butter"]
  },
  {
    id: 11,
    name: "French Toast",
    image: "https://images.unsplash.com/photo-1484723091739-30a097e8f929?w=400",
    type: "breakfast",
    calories: 350,
    protein: 18,
    carbs: 42,
    fat: 12,
    ingredients: ["Bread", "Eggs", "Milk", "Cinnamon", "Vanilla", "Butter", "Syrup"]
  },
  {
    id: 12,
    name: "Breakfast Sandwich",
    image: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d?w=400",
    type: "breakfast",
    calories: 380,
    protein: 25,
    carbs: 30,
    fat: 18,
    ingredients: ["Bagel", "Fried egg", "Bacon", "Cheese", "Lettuce", "Tomato"]
  },
  {
    id: 13,
    name: "Chia Pudding",
    image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=400",
    type: "breakfast",
    calories: 220,
    protein: 8,
    carbs: 25,
    fat: 10,
    ingredients: ["Chia seeds", "Coconut milk", "Vanilla", "Honey", "Berries", "Nuts"]
  },
  {
    id: 14,
    name: "Waffles",
    image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=400",
    type: "breakfast",
    calories: 400,
    protein: 12,
    carbs: 48,
    fat: 18,
    ingredients: ["Waffle mix", "Eggs", "Milk", "Butter", "Strawberries", "Whipped cream"]
  },
  {
    id: 15,
    name: "Breakfast Hash",
    image: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d?w=400",
    type: "breakfast",
    calories: 320,
    protein: 20,
    carbs: 25,
    fat: 16,
    ingredients: ["Potatoes", "Onions", "Bell peppers", "Sausage", "Eggs", "Cheese"]
  },
  {
    id: 16,
    name: "Protein Smoothie",
    image: "https://images.unsplash.com/photo-1511690743698-d9d7f7453c1f?w=400",
    type: "breakfast",
    calories: 280,
    protein: 25,
    carbs: 20,
    fat: 8,
    ingredients: ["Protein powder", "Banana", "Almond milk", "Peanut butter", "Spinach", "Ice"]
  },
  {
    id: 17,
    name: "Breakfast Bowl",
    image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=400",
    type: "breakfast",
    calories: 340,
    protein: 18,
    carbs: 38,
    fat: 12,
    ingredients: ["Quinoa", "Sweet potato", "Black beans", "Avocado", "Egg", "Salsa"]
  },
  {
    id: 18,
    name: "Cinnamon Rolls",
    image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=400",
    type: "breakfast",
    calories: 450,
    protein: 8,
    carbs: 65,
    fat: 18,
    ingredients: ["Dough", "Cinnamon", "Brown sugar", "Butter", "Cream cheese", "Powdered sugar"]
  },
  {
    id: 19,
    name: "Breakfast Tacos",
    image: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d?w=400",
    type: "breakfast",
    calories: 320,
    protein: 22,
    carbs: 28,
    fat: 14,
    ingredients: ["Corn tortillas", "Scrambled eggs", "Cheese", "Salsa", "Cilantro", "Lime"]
  },
  {
    id: 20,
    name: "Granola Parfait",
    image: "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?w=400",
    type: "breakfast",
    calories: 280,
    protein: 15,
    carbs: 35,
    fat: 8,
    ingredients: ["Greek yogurt", "Granola", "Berries", "Honey", "Nuts", "Coconut"]
  },

  // Lunch meals (21-40)
  {
    id: 21,
    name: "Caesar Salad",
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=400",
    type: "lunch",
    calories: 320,
    protein: 18,
    carbs: 20,
    fat: 22,
    ingredients: ["Romaine lettuce", "Croutons", "Parmesan cheese", "Caesar dressing", "Lemon"]
  },
  {
    id: 22,
    name: "Turkey Sandwich",
    image: "https://images.unsplash.com/photo-1539252554453-80ab65ce3586?w=400",
    type: "lunch",
    calories: 380,
    protein: 25,
    carbs: 35,
    fat: 15,
    ingredients: ["Whole grain bread", "Turkey slices", "Lettuce", "Tomato", "Mayo", "Cheese"]
  },
  {
    id: 23,
    name: "Quinoa Bowl",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400",
    type: "lunch",
    calories: 420,
    protein: 22,
    carbs: 45,
    fat: 16,
    ingredients: ["Quinoa", "Chickpeas", "Cucumber", "Tomatoes", "Feta cheese", "Olive oil"]
  },
  {
    id: 24,
    name: "Chicken Wrap",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400",
    type: "lunch",
    calories: 350,
    protein: 28,
    carbs: 25,
    fat: 18,
    ingredients: ["Tortilla", "Grilled chicken", "Lettuce", "Tomato", "Avocado", "Ranch dressing"]
  },
  {
    id: 25,
    name: "Veggie Burger",
    image: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=400",
    type: "lunch",
    calories: 380,
    protein: 20,
    carbs: 45,
    fat: 12,
    ingredients: ["Veggie patty", "Whole grain bun", "Lettuce", "Tomato", "Onion", "Pickles"]
  }
];
