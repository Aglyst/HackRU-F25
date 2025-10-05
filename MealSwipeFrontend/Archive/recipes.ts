// import { RecipeData } from './loadAllRecipes';

// export const recipesData: RecipeData[] = [
//   {
//     id: 1,
//     name: "Classic Pancakes",
//     minutes: 20,
//     calories: 350,
//     ingredients: ["flour", "sugar", "baking powder", "milk", "egg", "butter"],
//     steps: ["Mix dry ingredients", "Add wet ingredients", "Cook on griddle"],
//     text_blob: "Fluffy classic pancakes perfect for breakfast",
//     macros: {
//       calories: 350,
//       protein_g: 8,
//       carbs_g: 45,
//       fat_g: 14
//     }
//   },
//   {
//     id: 2,
//     name: "Caesar Salad",
//     minutes: 15,
//     calories: 280,
//     ingredients: ["romaine lettuce", "croutons", "parmesan", "caesar dressing", "lemon juice"],
//     steps: ["Chop lettuce", "Toss with dressing", "Add toppings"],
//     text_blob: "Classic caesar salad with homemade dressing",
//     macros: {
//       calories: 280,
//       protein_g: 12,
//       carbs_g: 18,
//       fat_g: 19
//     }
//   },
//   {
//     id: 3,
//     name: "Spaghetti Carbonara",
//     minutes: 30,
//     calories: 650,
//     ingredients: ["spaghetti", "pancetta", "eggs", "parmesan", "black pepper"],
//     steps: ["Cook pasta", "Fry pancetta", "Mix with egg sauce"],
//     text_blob: "Creamy Italian pasta dish with pancetta",
//     macros: {
//       calories: 650,
//       protein_g: 25,
//       carbs_g: 75,
//       fat_g: 28
//     }
//   },
//   {
//     id: 4,
//     name: "Greek Yogurt Parfait",
//     minutes: 5,
//     calories: 220,
//     ingredients: ["greek yogurt", "honey", "granola", "mixed berries"],
//     steps: ["Layer yogurt", "Add toppings", "Drizzle with honey"],
//     text_blob: "Healthy breakfast or snack with yogurt and fruits",
//     macros: {
//       calories: 220,
//       protein_g: 15,
//       carbs_g: 30,
//       fat_g: 5
//     }
//   },
//   {
//     id: 5,
//     name: "Grilled Chicken Sandwich",
//     minutes: 25,
//     calories: 420,
//     ingredients: ["chicken breast", "whole wheat bread", "lettuce", "tomato", "mayo"],
//     steps: ["Grill chicken", "Toast bread", "Assemble sandwich"],
//     text_blob: "Healthy grilled chicken sandwich with fresh veggies",
//     macros: {
//       calories: 420,
//       protein_g: 35,
//       carbs_g: 40,
//       fat_g: 15
//     }
//   },
//   {
//     id: 6,
//     name: "Vegetable Stir Fry",
//     minutes: 20,
//     calories: 320,
//     ingredients: ["broccoli", "bell peppers", "carrots", "soy sauce", "garlic", "ginger", "sesame oil"],
//     steps: ["Chop vegetables", "Stir-fry in oil", "Add sauce and serve"],
//     text_blob: "Quick and healthy vegetable stir fry with Asian flavors",
//     macros: {
//       calories: 320,
//       protein_g: 12,
//       carbs_g: 45,
//       fat_g: 10
//     }
//   },
//   {
//     id: 7,
//     name: "Beef Tacos",
//     minutes: 30,
//     calories: 380,
//     ingredients: ["ground beef", "taco seasoning", "tortillas", "lettuce", "cheese", "sour cream"],
//     steps: ["Brown beef", "Add seasoning", "Assemble tacos"],
//     text_blob: "Classic beef tacos with all the fixings",
//     macros: {
//       calories: 380,
//       protein_g: 25,
//       carbs_g: 30,
//       fat_g: 18
//     }
//   },
//   {
//     id: 8,
//     name: "Avocado Toast",
//     minutes: 10,
//     calories: 280,
//     ingredients: ["whole grain bread", "avocado", "lemon juice", "red pepper flakes", "salt"],
//     steps: ["Toast bread", "Mash avocado", "Spread on toast and season"],
//     text_blob: "Simple and nutritious avocado toast",
//     macros: {
//       calories: 280,
//       protein_g: 8,
//       carbs_g: 25,
//       fat_g: 18
//     }
//   },
//   {
//     id: 9,
//     name: "Chicken Alfredo Pasta",
//     minutes: 35,
//     calories: 620,
//     ingredients: ["fettuccine", "chicken breast", "heavy cream", "parmesan", "garlic", "butter"],
//     steps: ["Cook pasta", "Sear chicken", "Make sauce", "Combine and serve"],
//     text_blob: "Creamy chicken alfredo pasta",
//     macros: {
//       calories: 620,
//       protein_g: 40,
//       carbs_g: 65,
//       fat_g: 28
//     }
//   },
//   {
//     id: 10,
//     name: "Berry Smoothie Bowl",
//     minutes: 5,
//     calories: 290,
//     ingredients: ["frozen mixed berries", "banana", "almond milk", "granola", "chia seeds", "honey"],
//     steps: ["Blend fruits", "Pour into bowl", "Add toppings"],
//     text_blob: "Refreshing smoothie bowl with mixed berries",
//     macros: {
//       calories: 290,
//       protein_g: 10,
//       carbs_g: 50,
//       fat_g: 8
//     }
//   },
//   {
//     id: 11,
//     name: "Shrimp Scampi",
//     minutes: 25,
//     calories: 380,
//     ingredients: ["shrimp", "linguine", "garlic", "white wine", "lemon", "parsley", "butter"],
//     steps: ["Cook pasta", "Sauté shrimp", "Make sauce", "Combine and serve"],
//     text_blob: "Garlicky shrimp scampi with pasta",
//     macros: {
//       calories: 380,
//       protein_g: 30,
//       carbs_g: 40,
//       fat_g: 14
//     }
//   },
//   {
//     id: 12,
//     name: "Quinoa Salad",
//     minutes: 20,
//     calories: 320,
//     ingredients: ["quinoa", "cucumber", "cherry tomatoes", "red onion", "feta", "olive oil", "lemon juice"],
//     steps: ["Cook quinoa", "Chop vegetables", "Mix with dressing"],
//     text_blob: "Fresh and healthy quinoa salad",
//     macros: {
//       calories: 320,
//       protein_g: 12,
//       carbs_g: 35,
//       fat_g: 16
//     }
//   },
//   {
//     id: 13,
//     name: "Beef Burger",
//     minutes: 25,
//     calories: 550,
//     ingredients: ["ground beef", "hamburger buns", "cheese", "lettuce", "tomato", "onion", "pickles"],
//     steps: ["Form patties", "Grill burgers", "Toast buns", "Assemble"],
//     text_blob: "Classic beef burger with all the fixings",
//     macros: {
//       calories: 550,
//       protein_g: 35,
//       carbs_g: 40,
//       fat_g: 28
//     }
//   },
//   {
//     id: 14,
//     name: "Mushroom Risotto",
//     minutes: 45,
//     calories: 420,
//     ingredients: ["arborio rice", "mushrooms", "vegetable broth", "white wine", "parmesan", "onion", "butter"],
//     steps: ["Sauté mushrooms", "Toast rice", "Add broth gradually", "Stir in cheese"],
//     text_blob: "Creamy mushroom risotto",
//     macros: {
//       calories: 420,
//       protein_g: 12,
//       carbs_g: 60,
//       fat_g: 16
//     }
//   },
//   {
//     id: 15,
//     name: "Chicken Quesadilla",
//     minutes: 20,
//     calories: 450,
//     ingredients: ["chicken breast", "tortillas", "cheese", "bell peppers", "onions", "sour cream", "salsa"],
//     steps: ["Cook chicken", "Sauté vegetables", "Assemble and grill quesadilla"],
//     text_blob: "Cheesy chicken quesadilla with peppers and onions",
//     macros: {
//       calories: 450,
//       protein_g: 35,
//       carbs_g: 35,
//       fat_g: 20
//     }
//   },
//   {
//     id: 16,
//     name: "Greek Salad",
//     minutes: 15,
//     calories: 280,
//     ingredients: ["cucumber", "tomatoes", "red onion", "feta cheese", "kalamata olives", "olive oil", "oregano"],
//     steps: ["Chop vegetables", "Combine ingredients", "Drizzle with oil and season"],
//     text_blob: "Fresh Greek salad with feta and olives",
//     macros: {
//       calories: 280,
//       protein_g: 10,
//       carbs_g: 15,
//       fat_g: 20
//     }
//   },
//   {
//     id: 17,
//     name: "Pork Chops with Apples",
//     minutes: 35,
//     calories: 380,
//     ingredients: ["pork chops", "apples", "onion", "thyme", "butter", "apple cider vinegar"],
//     steps: ["Sear pork chops", "Sauté apples and onions", "Make pan sauce"],
//     text_blob: "Juicy pork chops with caramelized apples",
//     macros: {
//       calories: 380,
//       protein_g: 40,
//       carbs_g: 20,
//       fat_g: 18
//     }
//   },
//   {
//     id: 18,
//     name: "Vegetable Curry",
//     minutes: 40,
//     calories: 350,
//     ingredients: ["chickpeas", "coconut milk", "curry paste", "vegetable broth", "sweet potato", "spinach", "rice"],
//     steps: ["Sauté vegetables", "Add curry paste", "Simmer with coconut milk", "Serve over rice"],
//     text_blob: "Hearty vegetable curry with chickpeas",
//     macros: {
//       calories: 350,
//       protein_g: 12,
//       carbs_g: 50,
//       fat_g: 14
//     }
//   },
//   {
//     id: 19,
//     name: "Breakfast Burrito",
//     minutes: 20,
//     calories: 420,
//     ingredients: ["eggs", "tortilla", "black beans", "cheese", "avocado", "salsa", "sour cream"],
//     steps: ["Scramble eggs", "Warm beans", "Assemble burrito"],
//     text_blob: "Hearty breakfast burrito with eggs and beans",
//     macros: {
//       calories: 420,
//       protein_g: 22,
//       carbs_g: 40,
//       fat_g: 22
//     }
//   },
//   {
//     id: 20,
//     name: "Lemon Garlic Salmon",
//     minutes: 25,
//     calories: 380,
//     ingredients: ["salmon fillets", "lemon", "garlic", "olive oil", "asparagus", "potatoes"],
//     steps: ["Season salmon", "Roast with vegetables", "Drizzle with lemon garlic sauce"],
//     text_blob: "Healthy lemon garlic salmon with roasted vegetables",
//     macros: {
//       calories: 380,
//       protein_g: 35,
//       carbs_g: 25,
//       fat_g: 18
//     }
//   },
//   {
//     id: 21,
//     name: "Chicken Noodle Soup",
//     minutes: 45,
//     calories: 280,
//     ingredients: ["chicken breast", "egg noodles", "carrots", "celery", "onion", "chicken broth", "herbs"],
//     steps: ["Sauté vegetables", "Add broth and chicken", "Simmer until cooked"],
//     text_blob: "Comforting homemade chicken noodle soup",
//     macros: {
//       calories: 280,
//       protein_g: 30,
//       carbs_g: 25,
//       fat_g: 8
//     }
//   },
//   {
//     id: 22,
//     name: "Caprese Salad",
//     minutes: 10,
//     calories: 250,
//     ingredients: ["tomatoes", "fresh mozzarella", "basil", "balsamic glaze", "olive oil"],
//     steps: ["Slice tomatoes and mozzarella", "Arrange with basil", "Drizzle with oil and balsamic"],
//     text_blob: "Classic Italian caprese salad",
//     macros: {
//       calories: 250,
//       protein_g: 12,
//       carbs_g: 10,
//       fat_g: 18
//     }
//   },
//   {
//     id: 23,
//     name: "Beef and Broccoli",
//     minutes: 30,
//     calories: 380,
//     ingredients: ["flank steak", "broccoli", "soy sauce", "garlic", "ginger", "brown sugar", "sesame oil"],
//     steps: ["Stir-fry beef", "Cook broccoli", "Make sauce", "Combine and serve over rice"],
//     text_blob: "Chinese-style beef and broccoli stir-fry",
//     macros: {
//       calories: 380,
//       protein_g: 35,
//       carbs_g: 20,
//       fat_g: 18
//     }
//   },
//   {
//     id: 24,
//     name: "Spinach and Feta Omelet",
//     minutes: 15,
//     calories: 320,
//     ingredients: ["eggs", "spinach", "feta cheese", "onion", "olive oil", "salt", "pepper"],
//     steps: ["Sauté vegetables", "Pour beaten eggs", "Add cheese and fold"],
//     text_blob: "Fluffy omelet with spinach and feta",
//     macros: {
//       calories: 320,
//       protein_g: 22,
//       carbs_g: 8,
//       fat_g: 24
//     }
//   },
//   {
//     id: 25,
//     name: "Vegetable Lasagna",
//     minutes: 75,
//     calories: 380,
//     ingredients: ["lasagna noodles", "ricotta cheese", "mozzarella", "tomato sauce", "zucchini", "mushrooms", "spinach"],
//     steps: ["Layer noodles, sauce, and vegetables", "Bake until bubbly"],
//     text_blob: "Hearty vegetable lasagna with three cheeses",
//     macros: {
//       calories: 380,
//       protein_g: 25,
//       carbs_g: 45,
//       fat_g: 16
//     }
//   },
//   {
//     id: 26,
//     name: "Teriyaki Chicken Bowl",
//     minutes: 30,
//     calories: 420,
//     ingredients: ["chicken thighs", "rice", "broccoli", "carrots", "teriyaki sauce", "sesame seeds", "green onions"],
//     steps: ["Cook rice", "Stir-fry chicken and vegetables", "Add teriyaki sauce", "Garnish with sesame seeds"],
//     text_blob: "Savory teriyaki chicken with steamed vegetables",
//     macros: {
//       calories: 420,
//       protein_g: 35,
//       carbs_g: 50,
//       fat_g: 12
//     }
//   },
//   {
//     id: 27,
//     name: "Mediterranean Wrap",
//     minutes: 15,
//     calories: 350,
//     ingredients: ["whole wheat tortilla", "hummus", "grilled chicken", "cucumber", "tomato", "red onion", "feta cheese"],
//     steps: ["Spread hummus on tortilla", "Layer ingredients", "Roll up tightly"],
//     text_blob: "Fresh Mediterranean flavors in a portable wrap",
//     macros: {
//       calories: 350,
//       protein_g: 28,
//       carbs_g: 35,
//       fat_g: 14
//     }
//   },
//   {
//     id: 28,
//     name: "Butternut Squash Soup",
//     minutes: 40,
//     calories: 280,
//     ingredients: ["butternut squash", "onion", "garlic", "vegetable broth", "coconut milk", "nutmeg", "salt", "pepper"],
//     steps: ["Roast squash", "Sauté onions and garlic", "Blend with broth and seasonings"],
//     text_blob: "Creamy butternut squash soup with warm spices",
//     macros: {
//       calories: 280,
//       protein_g: 5,
//       carbs_g: 35,
//       fat_g: 12
//     }
//   },
//   {
//     id: 29,
//     name: "BBQ Pulled Pork Sandwich",
//     minutes: 480,
//     calories: 520,
//     ingredients: ["pork shoulder", "BBQ sauce", "hamburger buns", "coleslaw", "pickles", "onion powder", "garlic powder"],
//     steps: ["Slow cook pork with seasonings", "Shred and mix with BBQ sauce", "Serve on buns with coleslaw"],
//     text_blob: "Tender pulled pork with tangy BBQ sauce",
//     macros: {
//       calories: 520,
//       protein_g: 40,
//       carbs_g: 55,
//       fat_g: 22
//     }
//   },
//   {
//     id: 30,
//     name: "Mushroom and Spinach Omelet",
//     minutes: 15,
//     calories: 290,
//     ingredients: ["eggs", "mushrooms", "spinach", "onion", "cheddar cheese", "butter", "salt", "pepper"],
//     steps: ["Sauté vegetables", "Pour beaten eggs", "Add cheese and fold"],
//     text_blob: "Fluffy omelet with mushrooms and spinach",
//     macros: {
//       calories: 290,
//       protein_g: 20,
//       carbs_g: 8,
//       fat_g: 22
//     }
//   },
//   {
//     id: 31,
//     name: "Chicken Caesar Wrap",
//     minutes: 20,
//     calories: 380,
//     ingredients: ["grilled chicken", "romaine lettuce", "parmesan cheese", "caesar dressing", "tortilla", "croutons"],
//     steps: ["Assemble ingredients on tortilla", "Drizzle with dressing", "Roll up and serve"],
//     text_blob: "Classic caesar salad in a convenient wrap",
//     macros: {
//       calories: 380,
//       protein_g: 30,
//       carbs_g: 30,
//       fat_g: 18
//     }
//   },
//   {
//     id: 32,
//     name: "Vegetable Fried Rice",
//     minutes: 25,
//     calories: 350,
//     ingredients: ["cooked rice", "eggs", "mixed vegetables", "soy sauce", "sesame oil", "green onions", "garlic"],
//     steps: ["Scramble eggs", "Stir-fry vegetables", "Add rice and seasonings"],
//     text_blob: "Quick and easy vegetable fried rice",
//     macros: {
//       calories: 350,
//       protein_g: 12,
//       carbs_g: 50,
//       fat_g: 12
//     }
//   },
//   {
//     id: 33,
//     name: "Baked Salmon with Asparagus",
//     minutes: 25,
//     calories: 400,
//     ingredients: ["salmon fillets", "asparagus", "lemon", "olive oil", "garlic powder", "dill", "salt", "pepper"],
//     steps: ["Season salmon and asparagus", "Bake until cooked through", "Squeeze lemon before serving"],
//     text_blob: "Healthy baked salmon with roasted asparagus",
//     macros: {
//       calories: 400,
//       protein_g: 35,
//       carbs_g: 10,
//       fat_g: 25
//     }
//   },
//   {
//     id: 34,
//     name: "Chicken Fajitas",
//     minutes: 30,
//     calories: 380,
//     ingredients: ["chicken breast", "bell peppers", "onion", "fajita seasoning", "tortillas", "sour cream", "salsa"],
//     steps: ["Sauté chicken and vegetables", "Season with fajita mix", "Serve with warm tortillas"],
//     text_blob: "Sizzling chicken fajitas with peppers and onions",
//     macros: {
//       calories: 380,
//       protein_g: 32,
//       carbs_g: 35,
//       fat_g: 14
//     }
//   },
//   {
//     id: 35,
//     name: "Greek Yogurt Parfait",
//     minutes: 5,
//     calories: 240,
//     ingredients: ["greek yogurt", "honey", "granola", "mixed berries", "chia seeds", "almonds"],
//     steps: ["Layer yogurt and toppings", "Drizzle with honey"],
//     text_blob: "Creamy yogurt parfait with fresh fruit and crunch",
//     macros: {
//       calories: 240,
//       protein_g: 18,
//       carbs_g: 30,
//       fat_g: 8
//     }
//   },
//   {
//     id: 36,
//     name: "Beef Stir Fry",
//     minutes: 25,
//     calories: 380,
//     ingredients: ["sirloin steak", "broccoli", "carrots", "bell peppers", "soy sauce", "ginger", "garlic"],
//     steps: ["Slice beef thinly", "Stir-fry with vegetables", "Add sauce and serve over rice"],
//     text_blob: "Quick and flavorful beef stir fry",
//     macros: {
//       calories: 380,
//       protein_g: 35,
//       carbs_g: 20,
//       fat_g: 18
//     }
//   },
//   {
//     id: 37,
//     name: "Egg Salad Sandwich",
//     minutes: 15,
//     calories: 320,
//     ingredients: ["hard-boiled eggs", "mayonnaise", "mustard", "celery", "green onions", "whole wheat bread"],
//     steps: ["Chop eggs and mix with other ingredients", "Spread on bread"],
//     text_blob: "Classic egg salad sandwich",
//     macros: {
//       calories: 320,
//       protein_g: 18,
//       carbs_g: 25,
//       fat_g: 18
//     }
//   },
//   {
//     id: 38,
//     name: "Vegetable Tempura",
//     minutes: 30,
//     calories: 280,
//     ingredients: ["assorted vegetables", "flour", "cornstarch", "baking powder", "ice water", "dipping sauce"],
//     steps: ["Prepare batter", "Dip vegetables and fry until golden", "Serve with sauce"],
//     text_blob: "Light and crispy Japanese-style tempura",
//     macros: {
//       calories: 280,
//       protein_g: 5,
//       carbs_g: 35,
//       fat_g: 15
//     }
//   },
//   {
//     id: 39,
//     name: "Chicken and Rice Casserole",
//     minutes: 60,
//     calories: 420,
//     ingredients: ["chicken breast", "rice", "cream of mushroom soup", "chicken broth", "mixed vegetables", "cheese"],
//     steps: ["Mix all ingredients", "Bake until bubbly and golden"],
//     text_blob: "Comforting chicken and rice casserole",
//     macros: {
//       calories: 420,
//       protein_g: 30,
//       carbs_g: 45,
//       fat_g: 16
//     }
//   },
//   {
//     id: 40,
//     name: "Avocado and Egg Toast",
//     minutes: 10,
//     calories: 320,
//     ingredients: ["sourdough bread", "avocado", "eggs", "red pepper flakes", "salt", "pepper"],
//     steps: ["Toast bread", "Mash avocado", "Fry eggs", "Assemble and season"],
//     text_blob: "Simple and nutritious avocado toast with eggs",
//     macros: {
//       calories: 320,
//       protein_g: 15,
//       carbs_g: 25,
//       fat_g: 20
//     }
//   },
//   {
//     id: 41,
//     name: "Beef and Bean Chili",
//     minutes: 45,
//     calories: 380,
//     ingredients: ["ground beef", "kidney beans", "tomatoes", "onion", "chili powder", "garlic", "beef broth"],
//     steps: ["Brown beef with onions", "Add remaining ingredients", "Simmer for 30 minutes"],
//     text_blob: "Hearty beef and bean chili",
//     macros: {
//       calories: 380,
//       protein_g: 28,
//       carbs_g: 30,
//       fat_g: 18
//     }
//   },
//   {
//     id: 42,
//     name: "Caprese Panini",
//     minutes: 15,
//     calories: 420,
//     ingredients: ["ciabatta bread", "fresh mozzarella", "tomato", "basil", "balsamic glaze", "olive oil"],
//     steps: ["Assemble sandwich", "Grill until cheese melts", "Drizzle with balsamic"],
//     text_blob: "Warm and melty caprese panini",
//     macros: {
//       calories: 420,
//       protein_g: 20,
//       carbs_g: 35,
//       fat_g: 25
//     }
//   },
//   {
//     id: 43,
//     name: "Shrimp Tacos",
//     minutes: 25,
//     calories: 320,
//     ingredients: ["shrimp", "corn tortillas", "cabbage slaw", "avocado", "lime", "cilantro", "sour cream"],
//     steps: ["Season and cook shrimp", "Warm tortillas", "Assemble tacos with toppings"],
//     text_blob: "Fresh and zesty shrimp tacos",
//     macros: {
//       calories: 320,
//       protein_g: 25,
//       carbs_g: 30,
//       fat_g: 12
//     }
//   },
//   {
//     id: 44,
//     name: "Vegetable Paella",
//     minutes: 50,
//     calories: 380,
//     ingredients: ["arborio rice", "vegetable broth", "saffron", "bell peppers", "peas", "artichokes", "olive oil"],
//     steps: ["Sauté vegetables", "Add rice and broth", "Simmer until cooked through"],
//     text_blob: "Spanish-style vegetable paella",
//     macros: {
//       calories: 380,
//       protein_g: 10,
//       carbs_g: 60,
//       fat_g: 14
//     }
//   },
//   {
//     id: 50,
//     name: "Turkey and Avocado Wrap",
//     minutes: 10,
//     calories: 350,
//     ingredients: ["sliced turkey", "avocado", "sprouts", "tomato", "whole wheat tortilla", "mustard"],
//     steps: ["Spread avocado on tortilla", "Layer ingredients", "Roll up tightly"],
//     text_blob: "Healthy turkey and avocado wrap",
//     macros: {
//       calories: 350,
//       protein_g: 25,
//       carbs_g: 30,
//       fat_g: 16
//     }
//   },
//   {
//     id: 46,
//     name: "Mushroom Risotto",
//     minutes: 45,
//     calories: 420,
//     ingredients: ["arborio rice", "mushrooms", "white wine", "vegetable broth", "parmesan", "onion", "butter"],
//     steps: ["Sauté mushrooms and onions", "Toast rice", "Gradually add broth", "Stir in cheese"],
//     text_blob: "Creamy mushroom risotto",
//     macros: {
//       calories: 420,
//       protein_g: 12,
//       carbs_g: 55,
//       fat_g: 18
//     }
//   },
//   {
//     id: 47,
//     name: "Greek Yogurt with Honey and Nuts",
//     minutes: 5,
//     calories: 220,
//     ingredients: ["greek yogurt", "honey", "walnuts", "almonds", "cinnamon"],
//     steps: ["Spoon yogurt into bowl", "Drizzle with honey", "Top with nuts and cinnamon"],
//     text_blob: "Creamy yogurt with sweet honey and crunchy nuts",
//     macros: {
//       calories: 220,
//       protein_g: 15,
//       carbs_g: 20,
//       fat_g: 10
//     }
//   },
//   {
//     id: 48,
//     name: "Chicken and Vegetable Stir Fry",
//     minutes: 25,
//     calories: 350,
//     ingredients: ["chicken breast", "broccoli", "carrots", "snow peas", "soy sauce", "garlic", "ginger"],
//     steps: ["Stir-fry chicken", "Add vegetables", "Toss with sauce"],
//     text_blob: "Quick and healthy chicken stir fry",
//     macros: {
//       calories: 350,
//       protein_g: 35,
//       carbs_g: 25,
//       fat_g: 12
//     }
//   },
//   {
//     id: 49,
//     name: "Tuna Salad",
//     minutes: 10,
//     calories: 280,
//     ingredients: ["canned tuna", "mayonnaise", "celery", "red onion", "lemon juice", "dill", "salt", "pepper"],
//     steps: ["Drain tuna", "Mix with other ingredients", "Chill before serving"],
//     text_blob: "Classic tuna salad with fresh herbs",
//     macros: {
//       calories: 280,
//       protein_g: 25,
//       carbs_g: 5,
//       fat_g: 18
//     }
//   },
//   {
//     id: 50,
//     name: "Vegetable Curry with Coconut Milk",
//     minutes: 35,
//     calories: 320,
//     ingredients: ["mixed vegetables", "coconut milk", "curry paste", "onion", "garlic", "ginger", "rice"],
//     steps: ["Sauté vegetables and aromatics", "Add curry paste and coconut milk", "Simmer until vegetables are tender"],
//     text_blob: "Creamy vegetable curry with coconut milk",
//     macros: {
//       calories: 320,
//       protein_g: 8,
//       carbs_g: 40,
//       fat_g: 16
//     }
//   },
//   {
//     id: 51,
//     name: "Vegetable Lasagna",
//     minutes: 60,
//     calories: 420,
//     ingredients: ["lasagna noodles", "ricotta cheese", "spinach", "zucchini", "mushrooms", "marinara sauce", "mozzarella"],
//     steps: ["Layer noodles and vegetables", "Add cheese and sauce", "Bake until bubbly"],
//     text_blob: "Hearty vegetable lasagna packed with fresh veggies and cheese",
//     macros: {
//       calories: 420,
//       protein_g: 22,
//       carbs_g: 50,
//       fat_g: 18
//     }
//   },
//   {
//     id: 52,
//     name: "Honey Garlic Salmon",
//     minutes: 20,
//     calories: 380,
//     ingredients: ["salmon fillets", "honey", "soy sauce", "garlic", "lemon juice", "olive oil"],
//     steps: ["Make glaze", "Baste salmon", "Bake until flaky"],
//     text_blob: "Sweet and savory glazed salmon with garlic",
//     macros: {
//       calories: 380,
//       protein_g: 35,
//       carbs_g: 15,
//       fat_g: 22
//     }
//   },
//   {
//     id: 53,
//     name: "Mushroom Risotto",
//     minutes: 45,
//     calories: 450,
//     ingredients: ["arborio rice", "mushrooms", "vegetable broth", "white wine", "parmesan", "onion", "butter"],
//     steps: ["Sauté mushrooms", "Toast rice", "Gradually add broth", "Stir in cheese"],
//     text_blob: "Creamy mushroom risotto with parmesan",
//     macros: {
//       calories: 450,
//       protein_g: 12,
//       carbs_g: 60,
//       fat_g: 18
//     }
//   },
//   {
//     id: 54,
//     name: "Chicken Quesadilla",
//     minutes: 15,
//     calories: 380,
//     ingredients: ["chicken breast", "tortillas", "cheddar cheese", "bell peppers", "onion", "taco seasoning"],
//     steps: ["Cook chicken", "Assemble quesadilla", "Cook until crispy"],
//     text_blob: "Cheesy chicken quesadilla with peppers and onions",
//     macros: {
//       calories: 380,
//       protein_g: 30,
//       carbs_g: 25,
//       fat_g: 20
//     }
//   },
//   {
//     id: 55,
//     name: "Greek Salad",
//     minutes: 10,
//     calories: 280,
//     ingredients: ["cucumber", "tomatoes", "red onion", "kalamata olives", "feta cheese", "olive oil", "oregano"],
//     steps: ["Chop vegetables", "Toss with dressing", "Top with feta"],
//     text_blob: "Fresh Greek salad with feta and olives",
//     macros: {
//       calories: 280,
//       protein_g: 8,
//       carbs_g: 15,
//       fat_g: 22
//     }
//   },
//   {
//     id: 56,
//     name: "Beef and Broccoli Stir Fry",
//     minutes: 25,
//     calories: 420,
//     ingredients: ["flank steak", "broccoli", "soy sauce", "garlic", "ginger", "brown sugar", "sesame oil"],
//     steps: ["Stir-fry beef", "Add vegetables", "Toss with sauce"],
//     text_blob: "Classic beef and broccoli in savory sauce",
//     macros: {
//       calories: 420,
//       protein_g: 35,
//       carbs_g: 20,
//       fat_g: 22
//     }
//   },
//   {
//     id: 57,
//     name: "Caprese Sandwich",
//     minutes: 10,
//     calories: 380,
//     ingredients: ["ciabatta bread", "fresh mozzarella", "tomatoes", "basil leaves", "balsamic glaze", "olive oil"],
//     steps: ["Slice ingredients", "Layer on bread", "Drizzle with balsamic"],
//     text_blob: "Fresh caprese sandwich with balsamic glaze",
//     macros: {
//       calories: 380,
//       protein_g: 18,
//       carbs_g: 35,
//       fat_g: 20
//     }
//   },
//   {
//     id: 58,
//     name: "Shrimp and Grits",
//     minutes: 30,
//     calories: 450,
//     ingredients: ["shrimp", "stone-ground grits", "bacon", "cheddar cheese", "green onions", "lemon"],
//     steps: ["Cook grits", "Sauté shrimp and bacon", "Combine and serve"],
//     text_blob: "Creamy shrimp and grits with cheddar and bacon",
//     macros: {
//       calories: 450,
//       protein_g: 28,
//       carbs_g: 40,
//       fat_g: 20
//     }
//   },
//   {
//     id: 59,
//     name: "Vegetable Curry",
//     minutes: 35,
//     calories: 320,
//     ingredients: ["coconut milk", "chickpeas", "sweet potatoes", "spinach", "curry powder", "onion", "garlic"],
//     steps: ["Sauté vegetables", "Add spices and coconut milk", "Simmer until tender"],
//     text_blob: "Hearty vegetable curry with chickpeas and spinach",
//     macros: {
//       calories: 320,
//       protein_g: 12,
//       carbs_g: 40,
//       fat_g: 15
//     }
//   },
//   {
//     id: 60,
//     name: "Pork Tenderloin with Apples",
//     minutes: 40,
//     calories: 380,
//     ingredients: ["pork tenderloin", "apples", "onion", "apple cider vinegar", "thyme", "mustard"],
//     steps: ["Sear pork", "Sauté apples and onions", "Make pan sauce"],
//     text_blob: "Juicy pork tenderloin with caramelized apples",
//     macros: {
//       calories: 380,
//       protein_g: 35,
//       carbs_g: 25,
//       fat_g: 16
//     }
//   },
//   {
//     id: 61,
//     name: "Miso Ramen",
//     minutes: 30,
//     calories: 480,
//     ingredients: ["ramen noodles", "miso paste", "vegetable broth", "tofu", "mushrooms", "green onions", "nori"],
//     steps: ["Make broth", "Cook noodles", "Add toppings"],
//     text_blob: "Hearty miso ramen with tofu and vegetables",
//     macros: {
//       calories: 480,
//       protein_g: 20,
//       carbs_g: 60,
//       fat_g: 18
//     }
//   },
//   {
//     id: 62,
//     name: "Stuffed Bell Peppers",
//     minutes: 50,
//     calories: 320,
//     ingredients: ["bell peppers", "ground turkey", "quinoa", "tomato sauce", "onion", "garlic", "cheese"],
//     steps: ["Prepare peppers", "Make filling", "Stuff and bake"],
//     text_blob: "Turkey and quinoa stuffed bell peppers",
//     macros: {
//       calories: 320,
//       protein_g: 25,
//       carbs_g: 30,
//       fat_g: 12
//     }
//   },
//   {
//     id: 63,
//     name: "Lemon Garlic Shrimp Pasta",
//     minutes: 25,
//     calories: 420,
//     ingredients: ["linguine", "shrimp", "lemon", "garlic", "parsley", "white wine", "butter"],
//     steps: ["Cook pasta", "Sauté shrimp", "Make sauce", "Combine"],
//     text_blob: "Light and lemony shrimp pasta with garlic",
//     macros: {
//       calories: 420,
//       protein_g: 28,
//       carbs_g: 45,
//       fat_g: 15
//     }
//   },
//   {
//     id: 64,
//     name: "Breakfast Burrito",
//     minutes: 20,
//     calories: 450,
//     ingredients: ["eggs", "tortillas", "black beans", "cheese", "avocado", "salsa", "sour cream"],
//     steps: ["Scramble eggs", "Warm tortillas", "Assemble burritos"],
//     text_blob: "Hearty breakfast burrito with eggs and beans",
//     macros: {
//       calories: 450,
//       protein_g: 22,
//       carbs_g: 40,
//       fat_g: 24
//     }
//   },
//   {
//     id: 65,
//     name: "Ratatouille",
//     minutes: 60,
//     calories: 280,
//     ingredients: ["eggplant", "zucchini", "bell peppers", "tomatoes", "onion", "garlic", "herbs de provence"],
//     steps: ["Slice vegetables", "Layer in dish", "Bake until tender"],
//     text_blob: "Classic French vegetable ratatouille",
//     macros: {
//       calories: 280,
//       protein_g: 6,
//       carbs_g: 35,
//       fat_g: 14
//     }
//   },
//   {
//     id: 66,
//     name: "Teriyaki Chicken Bowl",
//     minutes: 30,
//     calories: 480,
//     ingredients: ["chicken thighs", "rice", "broccoli", "carrots", "teriyaki sauce", "sesame seeds"],
//     steps: ["Cook rice", "Stir-fry chicken and vegetables", "Add sauce"],
//     text_blob: "Savory teriyaki chicken with rice and vegetables",
//     macros: {
//       calories: 480,
//       protein_g: 35,
//       carbs_g: 60,
//       fat_g: 12
//     }
//   },
//   {
//     id: 67,
//     name: "Butternut Squash Soup",
//     minutes: 40,
//     calories: 220,
//     ingredients: ["butternut squash", "onion", "vegetable broth", "coconut milk", "curry powder", "maple syrup"],
//     steps: ["Roast squash", "Sauté onions", "Blend with broth and seasonings"],
//     text_blob: "Creamy butternut squash soup with curry",
//     macros: {
//       calories: 220,
//       protein_g: 4,
//       carbs_g: 30,
//       fat_g: 10
//     }
//   },
//   {
//     id: 68,
//     name: "Chicken Shawarma",
//     minutes: 35,
//     calories: 380,
//     ingredients: ["chicken thighs", "pita bread", "garlic sauce", "tomatoes", "cucumber", "red onion", "spices"],
//     steps: ["Marinate chicken", "Grill or bake", "Assemble in pita"],
//     text_blob: "Flavorful chicken shawarma with garlic sauce",
//     macros: {
//       calories: 380,
//       protein_g: 30,
//       carbs_g: 35,
//       fat_g: 15
//     }
//   },
//   {
//     id: 69,
//     name: "Vegetable Paella",
//     minutes: 45,
//     calories: 350,
//     ingredients: ["arborio rice", "vegetable broth", "bell peppers", "artichokes", "peas", "saffron", "lemon"],
//     steps: ["Sauté vegetables", "Add rice and broth", "Cook until rice is tender"],
//     text_blob: "Colorful vegetable paella with saffron",
//     macros: {
//       calories: 350,
//       protein_g: 8,
//       carbs_g: 65,
//       fat_g: 8
//     }
//   },
//   {
//     id: 70,
//     name: "Tuna Poke Bowl",
//     minutes: 20,
//     calories: 420,
//     ingredients: ["sushi-grade tuna", "rice", "avocado", "cucumber", "edamame", "sesame seeds", "soy sauce"],
//     steps: ["Cook rice", "Dice tuna and vegetables", "Assemble bowls"],
//     text_blob: "Fresh tuna poke bowl with rice and vegetables",
//     macros: {
//       calories: 420,
//       protein_g: 30,
//       carbs_g: 45,
//       fat_g: 15
//     }
//   },
//   {
//     id: 71,
//     name: "Eggplant Parmesan",
//     minutes: 50,
//     calories: 380,
//     ingredients: ["eggplant", "mozzarella", "parmesan", "marinara sauce", "breadcrumbs", "eggs", "basil"],
//     steps: ["Bread and bake eggplant", "Layer with sauce and cheese", "Bake until bubbly"],
//     text_blob: "Crispy eggplant parmesan with melted cheese",
//     macros: {
//       calories: 380,
//       protein_g: 20,
//       carbs_g: 35,
//       fat_g: 20
//     }
//   },
//   {
//     id: 72,
//     name: "Beef Bulgogi",
//     minutes: 30,
//     calories: 420,
//     ingredients: ["ribeye steak", "soy sauce", "pear", "brown sugar", "garlic", "sesame oil", "green onions"],
//     steps: ["Marinate beef", "Stir-fry until cooked", "Garnish with green onions"],
//     text_blob: "Korean-style marinated beef bulgogi",
//     macros: {
//       calories: 420,
//       protein_g: 35,
//       carbs_g: 20,
//       fat_g: 22
//     }
//   },
//   {
//     id: 73,
//     name: "Quiche Lorraine",
//     minutes: 60,
//     calories: 380,
//     ingredients: ["pie crust", "eggs", "heavy cream", "bacon", "swiss cheese", "onion"],
//     steps: ["Pre-bake crust", "Cook filling", "Pour into crust and bake"],
//     text_blob: "Classic quiche with bacon and cheese",
//     macros: {
//       calories: 380,
//       protein_g: 15,
//       carbs_g: 20,
//       fat_g: 28
//     }
//   },
//   {
//     id: 74,
//     name: "Chicken Satay",
//     minutes: 30,
//     calories: 320,
//     ingredients: ["chicken breast", "peanut butter", "coconut milk", "soy sauce", "lime", "honey", "curry powder"],
//     steps: ["Marinate chicken", "Skewer and grill", "Serve with peanut sauce"],
//     text_blob: "Grilled chicken satay with peanut sauce",
//     macros: {
//       calories: 320,
//       protein_g: 35,
//       carbs_g: 15,
//       fat_g: 16
//     }
//   },
//   {
//     id: 75,
//     name: "Mushroom and Spinach Pasta",
//     minutes: 25,
//     calories: 380,
//     ingredients: ["fettuccine", "mushrooms", "spinach", "garlic", "heavy cream", "parmesan", "white wine"],
//     steps: ["Cook pasta", "Sauté mushrooms and spinach", "Make cream sauce"],
//     text_blob: "Creamy mushroom and spinach pasta",
//     macros: {
//       calories: 380,
//       protein_g: 15,
//       carbs_g: 45,
//       fat_g: 18
//     }
//   },
//   {
//     id: 76,
//     name: "Fish Tacos",
//     minutes: 30,
//     calories: 350,
//     ingredients: ["white fish fillets", "corn tortillas", "cabbage slaw", "avocado crema", "lime", "cilantro"],
//     steps: ["Season and cook fish", "Warm tortillas", "Assemble tacos"],
//     text_blob: "Fresh fish tacos with cabbage slaw",
//     macros: {
//       calories: 350,
//       protein_g: 25,
//       carbs_g: 30,
//       fat_g: 15
//     }
//   },
//   {
//     id: 77,
//     name: "Vegetable Tempura",
//     minutes: 25,
//     calories: 280,
//     ingredients: ["assorted vegetables", "flour", "cornstarch", "sparkling water", "dipping sauce"],
//     steps: ["Make batter", "Coat vegetables", "Fry until crispy"],
//     text_blob: "Light and crispy Japanese vegetable tempura",
//     macros: {
//       calories: 280,
//       protein_g: 5,
//       carbs_g: 40,
//       fat_g: 12
//     }
//   },
//   {
//     id: 78,
//     name: "Beef Bourguignon",
//     minutes: 180,
//     calories: 520,
//     ingredients: ["beef chuck", "red wine", "bacon", "mushrooms", "pearl onions", "carrots", "thyme"],
//     steps: ["Brown beef", "Sauté vegetables", "Simmer in wine"],
//     text_blob: "Classic French beef stew in red wine sauce",
//     macros: {
//       calories: 520,
//       protein_g: 45,
//       carbs_g: 20,
//       fat_g: 28
//     }
//   },
//   {
//     id: 79,
//     name: "Strawberry Spinach Salad",
//     minutes: 15,
//     calories: 280,
//     ingredients: ["baby spinach", "strawberries", "goat cheese", "candied pecans", "balsamic vinaigrette"],
//     steps: ["Wash and dry greens", "Slice strawberries", "Assemble salad"],
//     text_blob: "Sweet and savory strawberry spinach salad",
//     macros: {
//       calories: 280,
//       protein_g: 8,
//       carbs_g: 22,
//       fat_g: 18
//     }
//   },
//   {
//     id: 80,
//     name: "Chicken Tikka Masala",
//     minutes: 45,
//     calories: 480,
//     ingredients: ["chicken thighs", "yogurt", "tomato sauce", "heavy cream", "garam masala", "garlic", "ginger"],
//     steps: ["Marinate chicken", "Grill chicken", "Simmer in sauce"],
//     text_blob: "Creamy Indian chicken tikka masala",
//     macros: {
//       calories: 480,
//       protein_g: 40,
//       carbs_g: 20,
//       fat_g: 28
//     }
//   },
//   {
//     id: 81,
//     name: "Bruschetta",
//     minutes: 15,
//     calories: 180,
//     ingredients: ["baguette", "tomatoes", "garlic", "basil", "balsamic glaze", "olive oil"],
//     steps: ["Toast bread", "Dice tomatoes", "Mix with herbs and oil"],
//     text_blob: "Classic Italian tomato bruschetta",
//     macros: {
//       calories: 180,
//       protein_g: 5,
//       carbs_g: 25,
//       fat_g: 8
//     }
//   },
//   {
//     id: 82,
//     name: "Lamb Chops",
//     minutes: 25,
//     calories: 420,
//     ingredients: ["lamb loin chops", "rosemary", "garlic", "olive oil", "lemon", "thyme"],
//     steps: ["Season lamb", "Sear in pan", "Finish in oven"],
//     text_blob: "Herb-crusted lamb chops with lemon",
//     macros: {
//       calories: 420,
//       protein_g: 35,
//       carbs_g: 5,
//       fat_g: 30
//     }
//   },
//   {
//     id: 83,
//     name: "Sweet Potato Hash",
//     minutes: 30,
//     calories: 320,
//     ingredients: ["sweet potatoes", "onion", "bell pepper", "sausage", "eggs", "paprika"],
//     steps: ["Dice vegetables", "Sauté with sausage", "Fry eggs on top"],
//     text_blob: "Hearty sweet potato hash with eggs",
//     macros: {
//       calories: 320,
//       protein_g: 18,
//       carbs_g: 35,
//       fat_g: 14
//     }
//   },
//   {
//     id: 84,
//     name: "Pork Dumplings",
//     minutes: 40,
//     calories: 280,
//     ingredients: ["ground pork", "dumpling wrappers", "cabbage", "ginger", "soy sauce", "sesame oil"],
//     steps: ["Make filling", "Fill wrappers", "Steam or pan-fry"],
//     text_blob: "Homemade pork dumplings with dipping sauce",
//     macros: {
//       calories: 280,
//       protein_g: 18,
//       carbs_g: 30,
//       fat_g: 12
//     }
//   },
//   {
//     id: 85,
//     name: "Chicken Caesar Wrap",
//     minutes: 15,
//     calories: 380,
//     ingredients: ["grilled chicken", "tortilla", "romaine lettuce", "caesar dressing", "parmesan", "croutons"],
//     steps: ["Slice chicken", "Assemble wrap", "Toast if desired"],
//     text_blob: "Classic chicken caesar in a wrap",
//     macros: {
//       calories: 380,
//       protein_g: 30,
//       carbs_g: 30,
//       fat_g: 18
//     }
//   },
//   {
//     id: 86,
//     name: "Vegetable Spring Rolls",
//     minutes: 30,
//     calories: 220,
//     ingredients: ["rice paper wrappers", "rice noodles", "carrots", "cucumber", "mint", "peanut sauce"],
//     steps: ["Soften rice paper", "Add fillings", "Roll tightly"],
//     text_blob: "Fresh vegetable spring rolls with peanut sauce",
//     macros: {
//       calories: 220,
//       protein_g: 6,
//       carbs_g: 40,
//       fat_g: 5
//     }
//   },
//   {
//     id: 87,
//     name: "Beef Wellington",
//     minutes: 90,
//     calories: 580,
//     ingredients: ["beef tenderloin", "puff pastry", "mushrooms", "prosciutto", "mustard", "egg wash"],
//     steps: ["Sear beef", "Wrap in mushroom duxelles and prosciutto", "Encase in pastry and bake"],
//     text_blob: "Elegant beef wellington with mushroom duxelles",
//     macros: {
//       calories: 580,
//       protein_g: 40,
//       carbs_g: 30,
//       fat_g: 35
//     }
//   },
//   {
//     id: 88,
//     name: "Cobb Salad",
//     minutes: 20,
//     calories: 380,
//     ingredients: ["romaine lettuce", "grilled chicken", "bacon", "avocado", "blue cheese", "eggs", "tomatoes"],
//     steps: ["Chop ingredients", "Arrange on plate", "Drizzle with dressing"],
//     text_blob: "Classic cobb salad with blue cheese dressing",
//     macros: {
//       calories: 380,
//       protein_g: 30,
//       carbs_g: 12,
//       fat_g: 25
//     }
//   },
//   {
//     id: 89,
//     name: "Shakshuka",
//     minutes: 35,
//     calories: 320,
//     ingredients: ["eggs", "tomatoes", "bell peppers", "onion", "garlic", "paprika", "feta"],
//     steps: ["Sauté vegetables", "Add tomatoes and spices", "Poach eggs in sauce"],
//     text_blob: "Middle Eastern eggs poached in tomato sauce",
//     macros: {
//       calories: 320,
//       protein_g: 18,
//       carbs_g: 20,
//       fat_g: 20
//     }
//   },
//   {
//     id: 90,
//     name: "Pork Belly Buns",
//     minutes: 180,
//     calories: 420,
//     ingredients: ["pork belly", "steamed buns", "hoisin sauce", "cucumber", "green onions", "five-spice powder"],
//     steps: ["Braise pork belly", "Steam buns", "Assemble with toppings"],
//     text_blob: "Steamed buns with braised pork belly",
//     macros: {
//       calories: 420,
//       protein_g: 20,
//       carbs_g: 40,
//       fat_g: 22
//     }
//   },
//   {
//     id: 91,
//     name: "Falafel Wrap",
//     minutes: 30,
//     calories: 380,
//     ingredients: ["chickpeas", "tahini", "pita bread", "lettuce", "tomato", "cucumber", "tahini sauce"],
//     steps: ["Make falafel mixture", "Form and fry patties", "Assemble in pita"],
//     text_blob: "Crispy falafel wrap with tahini sauce",
//     macros: {
//       calories: 380,
//       protein_g: 15,
//       carbs_g: 45,
//       fat_g: 18
//     }
//   },
//   {
//     id: 92,
//     name: "Clam Chowder",
//     minutes: 45,
//     calories: 380,
//     ingredients: ["clams", "potatoes", "bacon", "onion", "celery", "heavy cream", "thyme"],
//     steps: ["Cook bacon and vegetables", "Add clams and potatoes", "Stir in cream"],
//     text_blob: "Creamy New England clam chowder",
//     macros: {
//       calories: 380,
//       protein_g: 20,
//       carbs_g: 30,
//       fat_g: 22
//     }
//   },
//   {
//     id: 93,
//     name: "Chicken Fajita Bowl",
//     minutes: 30,
//     calories: 420,
//     ingredients: ["chicken breast", "rice", "bell peppers", "onion", "black beans", "avocado", "salsa"],
//     steps: ["Cook rice", "Sauté chicken and vegetables", "Assemble bowl"],
//     text_blob: "Flavorful chicken fajita bowl with rice and beans",
//     macros: {
//       calories: 420,
//       protein_g: 35,
//       carbs_g: 45,
//       fat_g: 15
//     }
//   },
//   {
//     id: 94,
//     name: "Mushroom Risotto Cakes",
//     minutes: 40,
//     calories: 320,
//     ingredients: ["arborio rice", "mushrooms", "parmesan", "breadcrumbs", "eggs", "thyme"],
//     steps: ["Make risotto", "Form into cakes", "Pan-fry until crispy"],
//     text_blob: "Crispy mushroom risotto cakes with parmesan",
//     macros: {
//       calories: 320,
//       protein_g: 12,
//       carbs_g: 40,
//       fat_g: 14
//     }
//   },
//   {
//     id: 95,
//     name: "Beef Pho",
//     minutes: 120,
//     calories: 450,
//     ingredients: ["beef broth", "rice noodles", "sirloin", "bean sprouts", "basil", "lime", "hoisin sauce"],
//     steps: ["Simmer broth with spices", "Cook noodles", "Assemble bowls with toppings"],
//     text_blob: "Vietnamese beef pho with fresh herbs",
//     macros: {
//       calories: 450,
//       protein_g: 30,
//       carbs_g: 50,
//       fat_g: 15
//     }
//   },
//   {
//     id: 96,
//     name: "Stuffed Mushrooms",
//     minutes: 30,
//     calories: 180,
//     ingredients: ["cremini mushrooms", "cream cheese", "garlic", "parsley", "parmesan", "breadcrumbs"],
//     steps: ["Remove stems", "Make filling", "Stuff and bake"],
//     text_blob: "Creamy stuffed mushrooms with parmesan",
//     macros: {
//       calories: 180,
//       protein_g: 8,
//       carbs_g: 12,
//       fat_g: 12
//     }
//   },
//   {
//     id: 97,
//     name: "Lamb Kofta",
//     minutes: 30,
//     calories: 380,
//     ingredients: ["ground lamb", "onion", "garlic", "parsley", "cumin", "coriander", "yogurt sauce"],
//     steps: ["Mix ingredients", "Form into skewers", "Grill until cooked through"],
//     text_blob: "Spiced lamb kofta with yogurt sauce",
//     macros: {
//       calories: 380,
//       protein_g: 25,
//       carbs_g: 10,
//       fat_g: 28
//     }
//   },
//   {
//     id: 98,
//     name: "Vegetable Tempura Udon",
//     minutes: 35,
//     calories: 420,
//     ingredients: ["udon noodles", "tempura vegetables", "dashi broth", "green onions", "nori", "fish cake"],
//     steps: ["Cook noodles", "Make broth", "Assemble with tempura"],
//     text_blob: "Japanese udon soup with crispy tempura",
//     macros: {
//       calories: 420,
//       protein_g: 12,
//       carbs_g: 65,
//       fat_g: 15
//     }
//   },
//   {
//     id: 99,
//     name: "Chicken Piccata",
//     minutes: 30,
//     calories: 380,
//     ingredients: ["chicken breast", "lemon", "capers", "white wine", "butter", "parsley", "flour"],
//     steps: ["Pound chicken thin", "Dredge and sauté", "Make pan sauce"],
//     text_blob: "Lemon caper chicken piccata",
//     macros: {
//       calories: 380,
//       protein_g: 35,
//       carbs_g: 12,
//       fat_g: 22
//     }
//   },
//   {
//     id: 100,
//     name: "Chocolate Lava Cake",
//     minutes: 25,
//     calories: 480,
//     ingredients: ["dark chocolate", "butter", "eggs", "sugar", "flour", "vanilla ice cream"],
//     steps: ["Melt chocolate and butter", "Whisk eggs and sugar", "Bake until set"],
//     text_blob: "Decadent chocolate lava cake with vanilla ice cream",
//     macros: {
//       calories: 480,
//       protein_g: 8,
//       carbs_g: 45,
//       fat_g: 32
//     }
//   }
// ];
