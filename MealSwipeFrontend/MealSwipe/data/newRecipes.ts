import { RecipeData } from './loadAllRecipes';

export const newRecipes: RecipeData[] = [
  {
    id: 1,
    name: "Burst Cherry Tomato Pasta",
    minutes: 30,
    calories: 480,
    ingredients: [
      "½ cup extra-virgin olive oil, plus more for drizzling",
      "6 garlic cloves, smashed",
      "2½ lb. cherry tomatoes (about 4 pints)",
      "2 large sprigs basil, plus 1 cup basil leaves, torn if large",
      "¾ tsp. crushed red pepper flakes",
      "1½ tsp. kosher salt, plus more",
      "Pinch of sugar (optional)",
      "12 oz. casarecce or other medium-size pasta",
      "1 oz. Parmesan, finely grated (about ½ cup), plus more for serving"
    ],
    steps: [
      "Heat ½ cup oil in a large heavy pot over low. Add garlic and cook, stirring often with a wooden spoon, until softened but not browned, about 2 minutes.",
      "Increase heat to medium and add tomatoes, basil sprigs, red pepper flakes, and 1½ tsp. salt. Cook, stirring to coat, until some of the tomatoes begin to burst and release their juices, about 4 minutes.",
      "Smash some but not all of the tomatoes with the spoon to help release their liquid, then continue to cook, stirring occasionally, until a chunky, thickened sauce forms (about half the tomatoes should still be intact), 10–12 minutes.",
      "Taste and add sugar if sauce is too tart and add more salt if needed. Pluck out and discard basil sprigs.",
      "Meanwhile, cook pasta in a large pot of boiling salted water, stirring occasionally, until al dente.",
      "Drain pasta, add to pot with sauce, and cook, stirring, until coated, about 1 minute. Remove from heat and stir in 1 oz. Parmesan.",
      "Divide pasta among bowls, drizzle with oil. Top with more Parmesan and 1 cup basil leaves."
    ],
    text_blob: "Burst cherry tomato pasta with garlic, basil, and parmesan",
    imageUrl: "https://www.lastingredient.com/wp-content/uploads/2021/09/burst-tomato-pasta-recipe3.jpg",
    macros: {
      calories: 480,
      protein_g: 20,
      carbs_g: 60,
      fat_g: 17.8
    }
  },
  {
    id: 2,
    name: "Salted PB&J Ice Cream Pie",
    minutes: 60,
    calories: 920,
    ingredients: [
      "1 sleeve (110 g) Ritz crackers or other cracker of your choice",
      "⅓ cup (45 g) raw peanuts or other nut or seed, finely chopped",
      "⅓ cup (67 g; packed) light or dark brown sugar",
      "½ tsp. Diamond Crystal or ¼ tsp. Morton kosher salt",
      "6 Tbsp. unsalted butter, melted",
      "3 large eggs",
      "½ cup (100 g; packed) light or dark brown sugar",
      "½ tsp. Diamond Crystal or ¼ tsp. Morton kosher salt",
      "1 tsp. vanilla extract",
      "½ cup (128 g) natural peanut butter or other natural nut or seed butter",
      "1½ cups heavy cream",
      "⅓ cup (100 g) grape jelly (preferably Bonne Maman) or other jelly, jam, or compote"
    ],
    steps: [
      "Preheat oven to 275°F. Place crackers in a deep pie dish and gently crush with your hands until you have a mix of dime-size pieces and small crumbs.",
      "Add peanuts, brown sugar, and salt and toss to combine. Drizzle in butter and toss to evenly coat. Press firmly into bottom and up sides of dish.",
      "Bake crust until a shade darker, 20–25 minutes. Let cool.",
      "Make the filling by whisking eggs, brown sugar, and salt in a large heatproof bowl set over a saucepan of simmering water until sugar dissolves, about 4 minutes.",
      "Remove from heat and add vanilla. Beat with an electric mixer until thick and pale, about 10 minutes.",
      "In another bowl, mix peanut butter with one third of the egg mixture to lighten, then gently fold in the remaining egg mixture.",
      "In the same bowl, beat cream until soft peaks form, about 2 minutes. Gently fold into peanut butter mixture.",
      "Pour filling into crust. Dollop jelly on top and swirl with a butter knife. Freeze at least 8 hours before serving."
    ],
    text_blob: "Salted peanut butter and jelly ice cream pie with a cracker crust",
    imageUrl: "https://i.pinimg.com/originals/52/38/2d/52382d24b1bb9cd68d87a7e7f6119726.jpg",
    macros: {
      calories: 920,
      protein_g: 41.8,
      carbs_g: 62.7,
      fat_g: 55.8
    }
  },
  {
    id: 4,
    name: "Kimchi Toast",
    minutes: 15,
    calories: 350,
    ingredients: [
      "4 oz. cream cheese, room temperature",
      "¾ cup finely chopped kimchi; plus more for serving (optional)",
      "2 scallions, thinly sliced on a diagonal",
      "1 cup cilantro leaves with tender stems",
      "½ lime",
      "Kosher salt",
      "4 (¾-inch thick) slices country-style bread, grilled or toasted",
      "Chili oil and toasted white sesame seeds (for serving)"
    ],
    steps: [
      "Mix cream cheese and ¾ cup kimchi in a medium bowl.",
      "Toss scallions and cilantro in a small bowl to combine. Squeeze in juice from lime, season with salt, and toss again.",
      "Smear kimchi cream cheese over each slice of bread. Top with scallion salad and more kimchi (if using). Drizzle with chili oil, sprinkle with sesame seeds."
    ],
    text_blob: "Spicy kimchi and cream cheese on toast with fresh herbs",
    imageUrl: "https://assets.bonappetit.com/photos/5bc4e5dc00d71c2d1a6c4387/master/w_1280%2Cc_limit/Kimchi-Toast-Healthy-ish-1.jpg",
    macros: {
      calories: 350,
      protein_g: 15.7,
      carbs_g: 42.2,
      fat_g: 14.5
    }
  },
  {
    id: 5,
    name: "Buttered Tomatoes with Ginger",
    minutes: 20,
    calories: 450,
    ingredients: [
      "4 scallions",
      "4 Tbsp. unsalted butter",
      "1 (1-inch) piece ginger, peeled, cut into matchsticks",
      "1½ pounds tomatoes (about 3 medium), cut into 1-inch pieces",
      "2 Tbsp. plus 1½ tsp. white or regular soy sauce",
      "Kosher salt (optional)",
      "Toasted country-style bread or cooked rice or pasta (for serving)"
    ],
    steps: [
      "Trim dark green tops from scallions and thinly slice; set aside for serving. Finely chop remaining white and pale green parts.",
      "Heat butter in a large skillet over medium. Add white and pale green parts of scallions and ginger and cook, stirring often, until fragrant, about 1 minute.",
      "Add tomatoes and cook, turning gently with a spoon, until juicy and just warmed through, about 2 minutes. Add soy sauce and toss to combine. Taste and season with kosher salt if needed. Top with reserved scallion greens.",
      "Spoon tomatoes over toast and serve."
    ],
    text_blob: "Buttery tomatoes with ginger and scallions on toast",
    imageUrl: "https://i.pinimg.com/736x/83/e7/c7/83e7c7c143743d337363a56d09a9cfc0.jpg",
    macros: {
      calories: 450,
      protein_g: 20.0,
      carbs_g: 30.0,
      fat_g: 30.0
    }
  },
  {
    id: 7,
    name: "Chicken Thighs With Tomatoes and Feta",
    minutes: 40,
    calories: 650,
    ingredients: [
      "6 skin-on, bone-in chicken thighs (about 2¼ lb. total)",
      "½ tsp. kosher salt, plus more",
      "1¼ lb. cherry tomatoes (about 2 pints)",
      "¼ cup harissa paste",
      "3 Tbsp. red wine vinegar",
      "3 sprigs oregano, divided",
      "4 oz. feta, cut into ¼-inch thick planks",
      "Crusty bread (for serving)"
    ],
    steps: [
      "Pat chicken thighs dry and season with salt. Cook skin-side down in a large cast-iron skillet over medium heat until skin is crisp, 13–16 minutes. Transfer to a plate.",
      "In the same skillet, combine tomatoes, harissa, vinegar, 1 oregano sprig, and ½ tsp. salt. Cook over medium-high, stirring occasionally, until tomatoes burst, 8–10 minutes.",
      "Nestle chicken into tomatoes, skin side up. Reduce heat to medium-low and simmer until chicken is cooked through, 6–8 minutes. Remove from heat and let sit 5 minutes.",
      "Break feta into pieces and scatter over chicken. Top with remaining oregano leaves. Serve with bread."
    ],
    text_blob: "Juicy chicken thighs with burst tomatoes and feta",
    imageUrl: "https://i.pinimg.com/originals/b6/ef/f3/b6eff399fcfc8db2e02f46e045165e32.jpg",
    macros: {
      calories: 650,
      protein_g: 52.0,
      carbs_g: 15.0,
      fat_g: 40.0
    }
  },
  {
    id: 9,
    name: "Turmeric Hot Toddy",
    minutes: 10,
    calories: 320,
    ingredients: [
      "¼ cup granulated sugar",
      "¾ tsp. ground turmeric",
      "1 ½ oz. Amontillado sherry",
      "1 oz. bourbon, aged rum, Scotch, mezcal, or gin",
      "1 oz. Turmeric Syrup",
      "½ oz. fresh lemon juice",
      "Dehydrated lemon wheel (for garnish, optional)"
    ],
    steps: [
      "For the turmeric syrup, combine ½ cup hot water and ¼ cup sugar in a liquid measuring cup or mason jar.",
      "Add ¾ tsp. ground turmeric and stir—or seal and shake—until sugar is completely dissolved.",
      "For the toddy, combine 1 ½ oz. Amontillado sherry, 1 oz. bourbon, 1 oz. Turmeric Syrup, and ½ oz. fresh lemon juice in a sturdy pint glass or 16-ounce thermos.",
      "Top with 8 oz. hot water and stir gently.",
      "Garnish with dehydrated lemon wheel if desired."
    ],
    text_blob: "A warming turmeric hot toddy with bourbon and lemon",
    imageUrl: "https://tse1.mm.bing.net/th/id/OIP.ymyaAulIejnB9Yrz9dwOzQHaJE?cb=12&rs=1&pid=ImgDetMain&o=7&rm=3",
    macros: {
      calories: 320,
      protein_g: 20.0,
      carbs_g: 40.0,
      fat_g: 8.9
    }
  },
  {
    id: 11,
    name: "Chicken Thighs With Tomatoes and Feta",
    minutes: 40,
    calories: 400,
    ingredients: [
      "6 skin-on, bone-in chicken thighs (about 2¼ lb. total)",
      "½ tsp. kosher salt, plus more",
      "1¼ lb. cherry tomatoes (about 2 pints)",
      "¼ cup harissa paste",
      "3 Tbsp. red wine vinegar",
      "3 sprigs oregano, divided",
      "4 oz. feta, cut into (¼\"-thick) planks",
      "Crusty bread (for serving)"
    ],
    steps: [
      "Pat chicken thighs dry with paper towels and season all over with salt.",
      "Arrange chicken skin side down in a cold large cast-iron skillet. Set over medium heat and cook, undisturbed, rotating pan as needed, until skin is very deep golden brown and crisp and chicken releases easily from pan, 13–16 minutes.",
      "Using tongs, transfer chicken to a plate, arranging skin side up.",
      "Combine tomatoes, harissa paste, vinegar, 1 oregano sprig, and ½ tsp. salt in same skillet. Increase heat to medium-high and cook, stirring occasionally, until tomatoes burst and their juices start to thicken, 8–10 minutes.",
      "Nestle chicken thighs into tomatoes, skin side up. Reduce heat to medium-low, bring to a simmer, and cook until chicken is just cooked through and flesh is no longer pink (an instant-read thermometer inserted into the thickest part near the bone will register 165°F), and tomato sauce is thickened so that a wooden spoon dragged through it leaves a trail, 6–8 minutes.",
      "Remove from heat and let sit 5 minutes.",
      "Break feta into large pieces, scatter over chicken. Some pieces will stay intact while others will soften into the sauce.",
      "Pick leaves off remaining 2 oregano sprigs and scatter on top. Serve with bread for sopping up any extra tomato sauce."
    ],
    text_blob: "Juicy chicken thighs with burst cherry tomatoes and feta in a spiced tomato sauce",
    imageUrl: "https://i.pinimg.com/originals/b6/ef/f3/b6eff399fcfc8db2e02f46e045165e32.jpg",
    macros: {
      calories: 400,
      protein_g: 40.0,
      carbs_g: 10.0,
      fat_g: 22.0
    }
  },
  {
    id: 12,
    name: "Stone Fruit Custard Tart",
    minutes: 90,
    calories: 420,
    ingredients: [
      "½ cup (1 stick) unsalted butter",
      "½ cup (65 g) raw pistachios, divided",
      "1 large egg",
      "¼ cup (packed; 50 g) light brown sugar",
      "2 cups (250 g) all-purpose flour",
      "1 tsp. kosher salt",
      "¾ tsp. baking powder",
      "3 large eggs",
      "⅔ cup (packed; 133 g) light brown sugar",
      "¼ cup sour cream",
      "1 Tbsp. vanilla bean paste or vanilla extract",
      "1 tsp. ground cardamom",
      "¾ tsp. ground ginger",
      "¾ tsp. (packed) finely grated orange zest",
      "¾ tsp. kosher salt",
      "3 Tbsp (23 g) all-purpose flour",
      "2½–3 lb. stone fruit (peaches, nectarines, apricots, plums)",
      "1 Tbsp. coarse sugar",
      "Powdered sugar (for serving; optional)"
    ],
    steps: [
      "Preheat oven to 375°F. Cook butter in a small saucepan over medium heat, stirring often, until it foams, then browns, 5–8 minutes. Set aside.",
      "Pulse pistachios in a food processor until finely ground. Transfer 4 Tbsp. to a small bowl, set aside.",
      "Scrape reserved browned butter over pistachios in food processor. Add egg, brown sugar, flour, salt, and baking powder. Pulse until incorporated, then process, scraping down sides as needed, until mixture looks like wet sand and holds together when squeezed, about 2 minutes.",
      "Press dough evenly into bottom and about 2\" up sides of a 9\"-diameter springform pan. Chill while making the filling.",
      "Process eggs and brown sugar in clean food processor until well combined, about 1 minute. Scrape down sides, add sour cream, vanilla, cardamom, ginger, orange zest, and salt. Sprinkle flour and 2 Tbsp. reserved pistachios over, process until smooth, about 1 minute.",
      "Arrange fruit in snug concentric circles in the chilled tart shell. Carefully pour custard around fruit. Sprinkle with coarse sugar.",
      "Bake until crust is golden brown and filling is set in the center (it shouldn't wobble when gently shaken), 70–75 minutes.",
      "Transfer to a wire rack and scatter remaining 2 Tbsp. pistachios over. Let cool, then chill until fully set.",
      "Unmold tart. Dust with powdered sugar if desired. Serve chilled or at room temperature."
    ],
    text_blob: "Beautiful tart with seasonal stone fruit in a cardamom-scented custard",
    imageUrl: "https://i.pinimg.com/736x/77/b0/5c/77b05cd34ad39637c01f891d68254138.jpg",
    macros: {
      calories: 420,
      protein_g: 8.5,
      carbs_g: 62.0,
      fat_g: 16.0
    }
  },
  {
    id: 13,
    name: "Butternut Squash and Apple Soup",
    minutes: 40,
    calories: 320,
    ingredients: [
      "6 slices bacon, cut crosswise into ½-inch pieces",
      "2 celery ribs, chopped",
      "1 carrot, chopped",
      "1 medium onion, chopped",
      "¼ teaspoon cinnamon",
      "¾ pound boiling potatoes, peeled and chopped",
      "2 medium Granny Smith apples, peeled, cored, and chopped",
      "1½ pounds butternut squash, peeled, seeded, and cut into ½-inch pieces",
      "2 cups reduced-sodium chicken stock or broth",
      "2 to 2½ cups water",
      "Sour cream for serving"
    ],
    steps: [
      "Cook bacon in a 6-quart heavy pot over medium heat, stirring occasionally, until crisp. Transfer with a slotted spoon to paper towels to drain.",
      "Pour off all but 2 tablespoons of fat from pot. (Add vegetable oil if needed to make 2 tablespoons.)",
      "Add celery, carrot, and onion to fat in pot and cook over low heat, covered, stirring occasionally, until softened but not browned, 10–12 minutes.",
      "Add cinnamon and cook, uncovered, stirring, 1 minute.",
      "Stir in squash, potato, chopped apple, stock, 2 cups water, 1 teaspoon salt, and 1/2 teaspoon pepper. Simmer, uncovered, stirring occasionally, until vegetables are very tender, 15–20 minutes.",
      "Purée soup in batches in a blender (use caution when blending hot liquids), then return to pot and heat over medium-low heat, stirring occasionally. (Add additional 1/2 cup water to thin, if necessary.)",
      "Cut remaining apple into thin matchsticks (about 1½-inches long) to measure about 1/2 cup.",
      "Serve soup topped with sour cream, bacon, and apple matchsticks."
    ],
    text_blob: "Creamy butternut squash soup with apples and warm spices",
    imageUrl: "https://www.cookingonthefrontburners.com/wp-content/uploads/2016/10/Butternut-Squash-Apple-Thyme-Soup-683x1024.jpg",
    macros: {
      calories: 320,
      protein_g: 8.0,
      carbs_g: 45.0,
      fat_g: 12.0
    }
  },
  {
    id: 14,
    name: "Caesar Salad Roast Chicken",
    minutes: 70,
    calories: 580,
    ingredients: [
      "8 anchovies, mashed to a paste",
      "8 garlic cloves, finely grated",
      "6 Tbsp. mayonnaise, divided",
      "1 Tbsp. Dijon mustard, plus more for serving",
      "2 Tbsp. extra-virgin olive oil, divided",
      "1½ tsp. freshly ground black pepper, plus more",
      "1 (3½–4-lb.) whole chicken",
      "Kosher salt",
      "8 medium shallots, unpeeled, halved lengthwise",
      "2 lemons, divided",
      "1 oz. Parmesan, finely grated",
      "4 oz. country-style bread, torn into (1½\") pieces",
      "2 romaine hearts, leaves separated, torn"
    ],
    steps: [
      "Preheat oven to 450°F. Whisk anchovies, garlic, 3 Tbsp. mayonnaise, 1 Tbsp. mustard, 1 Tbsp. oil, and 1½ tsp. pepper in a small bowl. Set aside 1 Tbsp. anchovy mayo in another small bowl.",
      "Pat chicken dry, season inside and out with salt. Arrange breast side up in a cast-iron skillet and tuck wings underneath. Arrange shallots around, season with salt and pepper.",
      "Brush remaining anchovy mayo all over chicken, making sure to get into the nooks and crannies, then brush shallots with any leftover anchovy mayo.",
      "Roast chicken until some anchovy mayo and fat begin to drip onto shallots, about 15 minutes. Remove from oven and, using tongs, turn shallots to coat in drippings.",
      "Return skillet to oven and continue to roast until golden brown and an instant-read thermometer inserted into the thickest part of breast registers 155°F, 45–55 minutes. If skin starts to get too dark, tent with foil.",
      "Transfer chicken and shallots to a cutting board, leaving juices and fat in skillet.",
      "Reduce oven temperature to 400°F. Finely grate half of zest of 1 lemon into a large bowl, cut lemon in half and squeeze in juice. Add reserved 1 Tbsp. anchovy mayo, remaining 3 Tbsp. mayo, and remaining 1 Tbsp. oil and whisk to combine, then stir in Parmesan. Season with salt and pepper.",
      "Add bread to reserved skillet with fat and turn to coat. Return skillet to oven and toast bread, tossing halfway through, until golden brown and crisp, 12–15 minutes.",
      "Transfer croutons to bowl with dressing. Add romaine and gently toss until lettuce is well coated. Season salad with salt and pepper.",
      "Slice remaining lemon into wedges. Carve chicken and serve with salad, shallots, and lemon wedges."
    ],
    text_blob: "Whole roasted chicken with Caesar salad flavors and crispy croutons",
    imageUrl: "https://www.dinnerwithjulie.com/wp-content/uploads/2015/07/chicken-caesar-1-585x878.jpg",
    macros: {
      calories: 580,
      protein_g: 48.0,
      carbs_g: 30.0,
      fat_g: 32.0
    }
  },
  {
    id: 15,
    name: "Chicken and Rice With Leeks and Salsa Verde",
    minutes: 45,
    calories: 620,
    ingredients: [
      "1½ lb. skinless, boneless chicken thighs (4–8 depending on size)",
      "Kosher salt, freshly ground pepper",
      "3 Tbsp. unsalted butter, divided",
      "2 large or 3 medium leeks, white and pale green parts only, halved lengthwise, thinly sliced",
      "Zest and juice of 1 lemon, divided",
      "1½ cups long-grain white rice, rinsed until water runs clear",
      "2¾ cups low-sodium chicken broth",
      "1 oil-packed anchovy fillet",
      "2 garlic cloves",
      "1 Tbsp. drained capers",
      "Crushed red pepper flakes",
      "1 cup tender herb leaves (such as parsley, cilantro, and/or mint)",
      "4–5 Tbsp. extra-virgin olive oil"
    ],
    steps: [
      "Season chicken with salt and pepper. Melt 2 Tbsp. butter in a large high-sided skillet over medium-high heat.",
      "Add leeks and half of lemon zest, season with salt and pepper, and mix to coat in butter. Reduce heat to medium-low, cover, and cook, stirring occasionally, until leeks are somewhat tender, about 5 minutes.",
      "Remove lid, increase heat to medium-high, and cook, stirring occasionally, until tender and just starting to take on color, about 3 minutes.",
      "Add rice and cook, stirring often, 3 minutes, then add broth, scraping up any browned bits.",
      "Tuck short sides of each chicken thigh underneath so they are touching and nestle seam side down into rice mixture. Bring to a simmer, cover, reduce heat to medium-low, and cook until rice is tender and chicken is cooked through, about 20 minutes.",
      "Remove from heat. Cut remaining 1 Tbsp. butter into small pieces and scatter over mixture. Re-cover and let sit 10 minutes.",
      "Meanwhile, pulse anchovy, garlic, capers, a few pinches of red pepper flakes, and remaining lemon zest in a food processor until finely chopped. Add herbs, process until a paste forms.",
      "With motor running, gradually stream in oil until loosened to a thick sauce. Add half of lemon juice, season salsa verde with salt.",
      "Drizzle remaining lemon juice over chicken and rice. Serve with salsa verde."
    ],
    text_blob: "One-pot chicken and rice with leeks and herby salsa verde",
    imageUrl: "https://assets.bonappetit.com/photos/5f29796456f43685a49327fb/16:9/w_2000,h_1125,c_limit/Chicken-and-Rice-With-Leeks-Salsa-Verde-01.jpg",
    macros: {
      calories: 620,
      protein_g: 42.0,
      carbs_g: 62.0,
      fat_g: 24.0
    }
  },
  {
    id: 16,
    name: "Gorditas con Camarones",
    minutes: 60,
    calories: 540,
    ingredients: [
      "1⅓ cups instant corn masa flour (such as Maseca)",
      "5 Tbsp. lard, melted, or vegetable oil, divided",
      "2½ tsp. kosher salt, divided, plus more",
      "4 guajillo or dried New Mexico chiles, stems and seeds removed",
      "2 morita chiles, stems removed, or 2 canned chipotle chiles in adobo",
      "1 tsp. ground coriander or cumin",
      "1½ lb. medium shrimp, peeled, deveined",
      "4 garlic cloves, thinly sliced",
      "2 sprigs thyme",
      "1 Tbsp. apple cider vinegar",
      "1 tsp. agave syrup or honey",
      "3 Tbsp. unsalted butter, cut into pieces",
      "Sliced onion, avocado, cilantro, and lime wedges for serving"
    ],
    steps: [
      "Stir masa, 1 Tbsp. lard, 1 tsp. salt, and 1 cup water in a medium bowl until a soft dough forms. If dry, mix in another 1 Tbsp. water. Cover and let sit 30 minutes.",
      "Bring dried chiles, coriander, and 1½ cups water to a boil in a small saucepan. Cover, remove from heat, and let sit 30 minutes. Purée in a blender until smooth.",
      "Preheat oven to 500°F. Brush a baking sheet with 2 Tbsp. lard. Divide dough into 4 balls.",
      "Press each ball between parchment into a 5\"-diameter disk. Bake until golden and crisp, 10-12 minutes per side. Let cool, then slice open one side.",
      "Heat remaining 2 Tbsp. lard in a large skillet over high. Cook shrimp until lightly browned, about 1 minute per side. Transfer to a bowl.",
      "In same skillet, cook garlic until beginning to brown, about 1 minute. Add thyme, vinegar, agave, 1½ tsp. salt, and reserved chile purée. Cook until thickened, 6-8 minutes.",
      "Return shrimp to skillet with any juices and cook 1 minute. Remove from heat, add butter and stir until melted and glossy.",
      "Fill gorditas with shrimp mixture, onion, avocado, and cilantro. Serve with lime wedges."
    ],
    text_blob: "Mexican stuffed corn cakes with spicy shrimp and avocado",
    imageUrl: "https://recette-cuisine.net/wp-content/uploads/2020/08/Gorditas-con-Camarones.jpg",
    macros: {
      calories: 540,
      protein_g: 36.0,
      carbs_g: 45.0,
      fat_g: 25.0
    }
  },
  {
    id: 17,
    name: "Spiral Ham in the Slow Cooker",
    minutes: 240,
    calories: 480,
    ingredients: [
      "1 (6-7 lb) bone-in, hickory-smoked, uncured fully cooked ham",
      "5 medium parsnips, peeled and halved lengthwise",
      "5 medium carrots, peeled and halved lengthwise",
      "1 cup maple syrup",
      "2 cups unsweetened apple juice",
      "½ cup packed dark brown sugar",
      "½ cup smooth Dijon mustard",
      "½ cup grainy Dijon mustard",
      "2 Tbsp. apple cider vinegar",
      "Kosher salt (if needed)"
    ],
    steps: [
      "Pour 3 cups of water into a 7-quart slow cooker. Add the ham, cut-side up, as well as the parsnips and carrots.",
      "Pour the maple syrup and apple juice over the ham, and sprinkle the brown sugar over the top.",
      "Cook on high, uncovered, for 30-45 minutes, then cover the slow cooker and cook on low until the ham is tender, 3-4 hours.",
      "Transfer the ham and vegetables to a deep serving platter (reserve the liquid in the pot). Use kitchen shears to cut the slices of ham off the bone.",
      "Stir both mustards and the vinegar into the cooking liquid left in the slow cooker and taste for seasoning—add salt if needed.",
      "Pour the sauce over the ham and vegetables and serve."
    ],
    text_blob: "Juicy slow-cooked ham with sweet and tangy mustard glaze",
    imageUrl: "https://i.pinimg.com/originals/03/6d/8d/036d8dceb5c1f6646559961e8e934161.jpg",
    macros: {
      calories: 480,
      protein_g: 42.0,
      carbs_g: 38.0,
      fat_g: 18.0
    }
  },
  {
    id: 18,
    name: "Miso-Butter Roast Chicken With Acorn Squash Panzanella",
    minutes: 90,
    calories: 680,
    ingredients: [
      "1 (3½–4-lb.) whole chicken",
      "2¾ tsp. kosher salt, divided, plus more",
      "2 small acorn squash (about 3 lb. total), seeded, sliced into 1\" wedges",
      "2 Tbsp. finely chopped sage",
      "1 Tbsp. finely chopped rosemary",
      "6 Tbsp. unsalted butter, melted, plus 3 Tbsp. room temperature",
      "¼ tsp. ground allspice",
      "Pinch of crushed red pepper flakes",
      "Freshly ground black pepper",
      "⅓ loaf good-quality sturdy white bread, torn into 1\" pieces (about 2½ cups)",
      "2 medium apples, cored, cut into 1\" pieces",
      "2 Tbsp. extra-virgin olive oil",
      "½ small red onion, thinly sliced",
      "3 Tbsp. apple cider vinegar",
      "1 Tbsp. white miso"
    ],
    steps: [
      "Preheat oven to 425°F. Season chicken inside and out with 2 tsp. salt. Let sit at room temperature 1 hour.",
      "Toss squash, 1 Tbsp. sage, 1½ tsp. rosemary, 3 Tbsp. melted butter, allspice, red pepper flakes, ½ tsp. salt, and ¼ tsp. black pepper on a rimmed baking sheet.",
      "Roast squash, tossing once, until golden and tender, 25–30 minutes. Let cool slightly, then transfer to a large bowl.",
      "Increase oven temperature to 450°F. Place chicken on a wire rack set inside a rimmed baking sheet. Roast until golden brown and an instant-read thermometer inserted into the thickest part of breast registers 155°F, 50–60 minutes. Let rest 20 minutes.",
      "Toss bread with remaining 3 Tbsp. melted butter, 1 Tbsp. sage, and 1½ tsp. rosemary on a clean rimmed baking sheet; season with salt and pepper. Bake until golden and crisp, 8–10 minutes. Let cool slightly, then add to bowl with squash.",
      "Whisk vinegar, miso, and remaining 3 Tbsp. butter, 2 Tbsp. oil, ¼ tsp. salt, and 2 Tbsp. water in a small bowl until smooth.",
      "Add apples, onion, and half of dressing to bowl with squash and croutons; toss to combine. Season with salt and pepper.",
      "Carve chicken and serve with panzanella, drizzling remaining dressing over."
    ],
    text_blob: "Juicy roast chicken with crispy skin served over a fall panzanella salad",
    imageUrl: "https://d1yfn1dfres2va.cloudfront.net/011/b9/8c/b98cf884befeb8bceaf5961b21565cbf_social01.jpg",
    macros: {
      calories: 680,
      protein_g: 45.0,
      carbs_g: 55.0,
      fat_g: 35.0
    }
  },
  {
    id: 19,
    name: "Charred-Peach Panzanella With Pickled Pepper Vinaigrette",
    minutes: 30,
    calories: 420,
    ingredients: [
      "2 garlic cloves, finely grated",
      "½ cup sliced hot pickled peppers (such as banana peppers), plus 1 Tbsp. pickle brine",
      "1 Tbsp. stone-ground or whole grain mustard",
      "1½ tsp. kosher salt",
      "1½ lb. plum tomatoes (6–7 medium), sliced ½\" thick",
      "8 oz. thick-cut bacon (about 6 slices), cut into 1½\" pieces",
      "1 (10–12-oz.) loaf crusty multigrain bread, sliced ¾\" thick",
      "3 large slightly firm peaches, halved, pitted"
    ],
    steps: [
      "Whisk garlic, pickle brine, mustard, and salt in a large bowl to combine. Add tomatoes and pickled peppers and gently toss. Let sit while you cook the bacon, bread, and peaches.",
      "Cook bacon in a large cast-iron skillet over medium heat until crisp, about 10 minutes. Transfer to paper towels to drain. Pour off all but 2 Tbsp. fat from skillet.",
      "Working in batches, toast bread in same skillet until golden, about 2 minutes per side. Transfer to paper towels to drain.",
      "Cook peach halves, cut side down, in same skillet until lightly charred, about 3 minutes. Transfer to a cutting board, let cool slightly, then slice.",
      "Tear toasted bread into 1\"–1½\" pieces and add to bowl with tomatoes. Add bacon and peaches and toss gently to combine.",
      "Transfer to a platter or individual bowls to serve."
    ],
    text_blob: "Summer panzanella with sweet peaches, crispy bacon, and tangy pickled peppers",
    imageUrl: "https://rainbowplantlife.com/wp-content/uploads/2021/07/peach-panzanella-salad-flatlay-closeup.jpg",
    macros: {
      calories: 420,
      protein_g: 16.0,
      carbs_g: 48.0,
      fat_g: 18.0
    }
  },
  {
    id: 20,
    name: "Plátanos Horneados con Crema y Queso",
    minutes: 60,
    calories: 380,
    ingredients: [
      "6 ripe but firm bananas or small plantains, unpeeled",
      "1 cup crema or crème fraîche",
      "1 cup crumbled queso fresco",
      "Lime wedges for serving"
    ],
    steps: [
      "Preheat the oven to 400°F.",
      "Place the whole bananas or plantains on a baking sheet and bake, turning them every 10 minutes, until the peel starts to split and the inside is tender when tested with a skewer, about 40 minutes.",
      "Remove from the oven but keep on the baking sheet. Carefully slice the peel lengthwise to just reveal the flesh.",
      "Drizzle with crema and sprinkle with queso fresco. Serve immediately with lime wedges.",
      "Note: For individual servings, transfer to plates before adding toppings."
    ],
    text_blob: "Baked bananas with Mexican cream and fresh cheese",
    imageUrl: "https://recette-cuisine.net/wp-content/uploads/2020/08/Gorditas-con-Camarones.jpg",
    macros: {
      calories: 380,
      protein_g: 8.0,
      carbs_g: 45.0,
      fat_g: 20.0
    }
  },
  {
    id: 21,
    name: "Tamale Pie with Fresh Tomato and Corn",
    minutes: 60,
    calories: 520,
    ingredients: [
      "1/2 pound fresh chorizo, casings removed",
      "1/2 pound ground beef",
      "1 tablespoon tomato paste",
      "2 1/2 teaspoons cumin",
      "1 large onion, grated",
      "1–2 medium jalapeños, thinly sliced",
      "1 3/4 teaspoons kosher salt, divided",
      "2 large beefsteak tomatoes, cut into 1/2\" cubes",
      "2 cups corn kernels",
      "8 ounces cheddar cheese, grated",
      "2 large eggs",
      "6 tablespoons unsalted butter, melted",
      "1/3 cup sour cream, plus more for serving",
      "1 1/4 cups cornmeal",
      "1 teaspoon baking powder"
    ],
    steps: [
      "Preheat oven to 450°F. Heat a 10\" cast-iron skillet over high heat. Add chorizo and beef, breaking up with a spatula, and cook until browned, about 5 minutes.",
      "Add tomato paste, cumin, onion, jalapeños, and 1 1/4 tsp. salt. Cook, stirring, until fragrant, about 1 minute. Stir in tomatoes and 1 1/2 cups corn. Remove from heat and stir in 1 1/2 cups cheese.",
      "Whisk eggs, butter, sour cream, and remaining onion in a medium bowl. In another bowl, whisk cornmeal, baking powder, and remaining 1/2 tsp. salt. Add dry ingredients to wet ingredients and stir to combine, then stir in remaining 1/2 cup corn and 1/4 cup cheese.",
      "Dollop cornbread batter over meat mixture, then smooth into an even layer. Top with remaining jalapeños and 1/4 cup cheese.",
      "Bake until cornbread is golden brown and a toothpick inserted into the center comes out clean, 15–18 minutes. Let cool 10 minutes before serving with more sour cream."
    ],
    text_blob: "Hearty tamale pie with spicy chorizo, beef, and fresh cornbread topping",
    imageUrl: "https://assets.epicurious.com/photos/59b6e97d1387461e2e0d560c/master/pass/Fresh-Tomato-Tamale-Cornbread-Pie-INSET-2-06092017.jpg",
    macros: {
      calories: 520,
      protein_g: 28.0,
      carbs_g: 45.0,
      fat_g: 28.0
    }
  },
  {
    id: 22,
    name: "Corn and Chickpea Bowls With Miso Tahini",
    minutes: 30,
    calories: 480,
    ingredients: [
      "2 small jalapeños, seeded, chopped",
      "1 (¾-inch) piece ginger, peeled, finely grated",
      "2 small garlic cloves, finely grated",
      "1 cup (packed) cilantro leaves with tender stems",
      "⅓ cup fresh lime juice",
      "⅓ cup tahini",
      "1 Tbsp. plus 1½ tsp. miso",
      "Kosher salt",
      "3 Tbsp. extra-virgin olive oil, divided",
      "2 garlic cloves, lightly crushed",
      "1 (14-oz.) can chickpeas, rinsed, drained",
      "3 ears of corn, kernels removed",
      "1 Tbsp. spice blend (such as za'atar, vadouvan, hawaij, or berbere)",
      "4 cups tender greens (such as Little Gem lettuce and/or watercress)",
      "2 avocados, cut into wedges",
      "4 small tomatoes, cut into wedges",
      "Crumbled feta, cilantro sprigs, and lime wedges for serving"
    ],
    steps: [
      "Purée jalapeños, ginger, garlic, cilantro, lime juice, tahini, miso, and 3 Tbsp. water in a blender until smooth. Season with salt.",
      "Heat 2 Tbsp. oil in a large skillet over medium. Add garlic and cook, turning occasionally, until golden brown, about 4 minutes. Mash garlic with a spoon and stir into oil.",
      "Add chickpeas and increase heat to medium-high. Cook, undisturbed, until golden brown and beginning to crisp underneath, about 3 minutes. Toss and continue to cook, tossing occasionally, until golden brown all over, about 2 minutes more.",
      "Add corn and remaining 1 Tbsp. oil and cook, tossing, until corn kernels are golden around the edges and tender, 5–7 minutes. Sprinkle spice blend over and toss to coat. Season with salt.",
      "Combine lettuce, avocados, and tomatoes in a large bowl. Drizzle lightly with oil and toss to combine. Season with salt.",
      "Divide dressing among bowls. Top with salad, chickpea mixture, feta, and cilantro. Serve with lime wedges."
    ],
    text_blob: "Vibrant grain bowls with spiced chickpeas, corn, and creamy miso-tahini dressing",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Buddha_Bowl_with_Quinoa_and_Vegetables.jpg/800px-Buddha_Bowl_with_Quinoa_and_Vegetables.jpg",
    macros: {
      calories: 480,
      protein_g: 15.0,
      carbs_g: 42.0,
      fat_g: 32.0
    }
  },
  {
    id: 23,
    name: "Dad's Curried Chicken",
    minutes: 60,
    calories: 570,
    ingredients: [
      "1 (4-pound) chicken, cut into 8 pieces, skin removed",
      "1 tablespoon freshly squeezed lime juice",
      "2 tablespoons Green Seasoning",
      "1 teaspoon coarse salt",
      "1 Scotch bonnet pepper or other hot red chili pepper, finely chopped",
      "2 cloves garlic, crushed",
      "¼ cup Trinidad Curry Powder",
      "2 tablespoons canola oil",
      "1 medium onion, chopped",
      "1 cup chicken stock or water",
      "Roti or white rice, for serving"
    ],
    steps: [
      "Place the chicken pieces in a bowl and toss with the lime juice. Drain, rinse the chicken with cold water, and drain again. Remove the chicken from the bowl and pat dry with paper towels.",
      "Place the chicken in another bowl with the Green Seasoning, salt, chili pepper, and garlic. Toss well to coat and refrigerate for at least 30 minutes but ideally overnight.",
      "Combine the curry powder with just enough water to form a thick paste. Heat the oil in a heavy-bottomed pot. Add the curry paste and onion. Cook, stirring constantly, for 1 to 2 minutes over medium-low heat—do not allow the curry to scorch.",
      "Add the chicken pieces and stir well to coat. Add the stock or water, cover, and simmer for 30 to 40 minutes, or until the chicken is tender.",
      "Remove the lid and simmer for 5 minutes more over medium-high heat, until the sauce reduces by one-third. Serve with roti or white rice."
    ],
    text_blob: "Aromatic curry chicken with a perfect blend of spices, served with roti or rice",
    imageUrl: "https://iwillnoteatoysters.com/wp-content/uploads/2014/05/chickencurry-2.jpg",
    macros: {
      calories: 570,
      protein_g: 61.1,
      carbs_g: 40.7,
      fat_g: 18.1
    }
  },
  
  {
    id: 25,
    name: "Shrimp Creole",
    minutes: 45,
    calories: 660,
    ingredients: [
      "3 garlic cloves, minced",
      "2 large onions, chopped fine",
      "1 cup finely chopped celery (about 2 stalks)",
      "1 red bell pepper, cut into ½-inch dice",
      "½ green bell pepper, cut into ½-inch dice",
      "2 tablespoons olive oil",
      "2 cups chicken broth",
      "1 (28-ounce) can whole tomatoes, drained and chopped",
      "1 bay leaf",
      "1 teaspoon ground cumin",
      "1 teaspoon salt, or to taste",
      "½ teaspoon freshly ground black pepper",
      "1½ pounds large shrimp (about 32), shelled and deveined",
      "1 cup uncooked rice, prepared according to package instructions but without butter or margarine"
    ],
    steps: [
      "In a large heavy kettle, cook garlic, onions, celery, and bell peppers in oil over moderately low heat, stirring occasionally, until softened.",
      "Add all remaining ingredients except shrimp and simmer, uncovered, 30 minutes, or until thickened.",
      "Stir in shrimp and cook, covered, over moderately high heat, stirring occasionally, until shrimp are cooked through, about 5 minutes.",
      "Serve shrimp and sauce over cooked rice."
    ],
    text_blob: "Classic Louisiana-style shrimp creole with bell peppers and tomatoes over rice",
    imageUrl: "https://www.dinneratthezoo.com/wp-content/uploads/2022/06/shrimp-creole-1200-4-800x1200.jpg",
    macros: {
      calories: 660,
      protein_g: 61.9,
      carbs_g: 41.2,
      fat_g: 27.5
    }
  },
  {
    id: 26,
    name: "Classic Beef Stew",
    minutes: 180,
    calories: 420,
    ingredients: [
      "2 lbs beef chuck, cut into 1-inch cubes",
      "2 tablespoons olive oil",
      "1 large onion, chopped",
      "3 garlic cloves, minced",
      "3 tablespoons all-purpose flour",
      "4 cups beef broth",
      "1 cup red wine (optional)",
      "2 bay leaves",
      "1 teaspoon dried thyme",
      "4 carrots, cut into 1-inch pieces",
      "3 potatoes, peeled and cut into 1-inch pieces",
      "2 celery stalks, chopped",
      "Salt and pepper to taste"
    ],
    steps: [
      "Season beef with salt and pepper. In a large pot, heat oil over medium-high heat. Brown beef in batches, then set aside.",
      "In the same pot, add onion and garlic, cooking until softened, about 5 minutes.",
      "Sprinkle flour over the vegetables and cook, stirring, for 2 minutes.",
      "Gradually add beef broth and wine, stirring constantly. Return beef to pot. Add bay leaves and thyme.",
      "Bring to a boil, then reduce heat to low, cover, and simmer for 1.5 hours.",
      "Add carrots, potatoes, and celery. Continue cooking for 45 minutes to 1 hour, or until beef and vegetables are tender.",
      "Remove bay leaves before serving. Adjust seasoning with salt and pepper."
    ],
    text_blob: "Hearty and comforting beef stew with tender vegetables in a rich broth",
    imageUrl: "https://www.jessicagavin.com/wp-content/uploads/2020/12/beef-stew-8-1024x1536.jpg",
    macros: {
      calories: 420,
      protein_g: 35,
      carbs_g: 30,
      fat_g: 18
    },
  },
  {
    id: 28,
    name: "Classic Margherita Pizza",
    minutes: 30,
    calories: 850,
    ingredients: [
      "1 lb pizza dough",
      "1/2 cup tomato sauce",
      "8 oz fresh mozzarella, sliced",
      "1/4 cup fresh basil leaves",
      "2 tablespoons olive oil",
      "2 cloves garlic, minced",
      "1/2 teaspoon dried oregano",
      "Salt and pepper to taste",
      "Red pepper flakes (optional)",
      "Cornmeal for dusting"
    ],
    steps: [
      "Preheat oven to 475°F (245°C). If using a pizza stone, place it in the oven to heat.",
      "On a floured surface, roll out the dough to a 12-inch circle. Transfer to a cornmeal-dusted pizza peel or baking sheet.",
      "In a small bowl, mix olive oil, garlic, oregano, salt, and pepper. Brush over the dough.",
      "Spread tomato sauce over the dough, leaving a 1/2-inch border. Arrange mozzarella slices on top.",
      "Bake for 12-15 minutes until crust is golden and cheese is bubbly.",
      "Remove from oven and top with fresh basil leaves. Let rest for 2 minutes before slicing. Serve with red pepper flakes if desired."
    ],
    text_blob: "Classic Italian pizza with tomato sauce, fresh mozzarella, and basil",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Eq_it-na_pizza-margherita_sep2005_sml.jpg/800px-Eq_it-na_pizza-margherita_sep2005_sml.jpg",
    macros: {
      calories: 850,
      protein_g: 32,
      carbs_g: 95,
      fat_g: 38
    }
  },
  {
    id: 29,
    name: "Chocolate Lava Cake",
    minutes: 25,
    calories: 480,
    ingredients: [
      "6 oz bittersweet chocolate, chopped",
      "10 tablespoons unsalted butter",
      "1/2 cup all-purpose flour",
      "1 1/2 cups powdered sugar",
      "3 large eggs",
      "3 egg yolks",
      "1 teaspoon vanilla extract",
      "1/4 teaspoon salt",
      "Butter and flour for ramekins",
      "Powdered sugar and berries for serving"
    ],
    steps: [
      "Preheat oven to 425°F (220°C). Butter and lightly flour six 6-ounce ramekins.",
      "In a microwave-safe bowl, melt chocolate and butter in 30-second intervals, stirring between each, until smooth. Let cool slightly.",
      "In a large bowl, whisk together flour and powdered sugar. Add eggs, egg yolks, vanilla, and salt. Whisk until smooth.",
      "Gradually whisk in the melted chocolate mixture until well combined.",
      "Divide batter evenly among prepared ramekins. Place on a baking sheet and bake for 12-14 minutes until the edges are set but the center is still soft.",
      "Let stand for 1 minute, then run a knife around the edges to loosen. Invert onto plates and serve immediately with powdered sugar and berries."
    ],
    text_blob: "Decadent chocolate lava cakes with a molten center, perfect for chocolate lovers",
    imageUrl: "https://www.yourhomebasedmom.com/wp-content/uploads/2020/02/chocoalte-lava-cake-for-two.jpg",
    macros: {
      calories: 480,
      protein_g: 8,
      carbs_g: 45,
      fat_g: 32
    }
  },
  {
    id: 30,
    name: "Mediterranean Quinoa Salad",
    minutes: 25,
    calories: 320,
    ingredients: [
      "1 cup quinoa, rinsed",
      "2 cups water or vegetable broth",
      "1 cucumber, diced",
      "1 cup cherry tomatoes, halved",
      "1/2 red onion, finely diced",
      "1/2 cup Kalamata olives, pitted and halved",
      "1/2 cup feta cheese, crumbled",
      "1/4 cup fresh parsley, chopped",
      "1/4 cup fresh mint, chopped",
      "1/4 cup olive oil",
      "2 tablespoons lemon juice",
      "1 clove garlic, minced",
      "1 teaspoon dried oregano",
      "Salt and pepper to taste"
    ],
    steps: [
      "In a medium saucepan, bring quinoa and water to a boil. Reduce heat to low, cover, and simmer for 15 minutes or until water is absorbed. Remove from heat and let stand for 5 minutes. Fluff with a fork and let cool.",
      "In a large bowl, combine cooked quinoa, cucumber, cherry tomatoes, red onion, olives, feta, parsley, and mint.",
      "In a small bowl, whisk together olive oil, lemon juice, garlic, oregano, salt, and pepper.",
      "Pour dressing over the salad and toss gently to combine. Adjust seasoning if needed.",
      "Refrigerate for at least 30 minutes before serving to allow flavors to meld. Serve chilled or at room temperature."
    ],
    text_blob: "Fresh and healthy Mediterranean quinoa salad with vegetables, feta, and herbs",
    imageUrl: "https://www.cookinwithmima.com/wp-content/uploads/2020/08/mediterranean-quinoa-salad-5.jpg",
    macros: {
      calories: 320,
      protein_g: 9,
      carbs_g: 35,
      fat_g: 17
    }
  },
  
  {
    id: 32,
    name: "Mushroom Risotto",
    minutes: 45,
    calories: 420,
    ingredients: [
      "6 cups chicken or vegetable broth",
      "2 tablespoons olive oil",
      "1 small onion, finely chopped",
      "2 cloves garlic, minced",
      "1 1/2 cups Arborio rice",
      "1/2 cup dry white wine (optional)",
      "1 lb mixed mushrooms (cremini, shiitake, oyster), sliced",
      "2 tablespoons butter",
      "1/2 cup grated Parmesan cheese",
      "1/4 cup fresh parsley, chopped",
      "Salt and pepper to taste",
      "Truffle oil for drizzling (optional)"
    ],
    steps: [
      "In a medium saucepan, heat the broth over medium heat. Keep warm over low heat.",
      "In a large, heavy-bottomed pot, heat 1 tablespoon olive oil over medium heat. Add mushrooms and cook until golden brown, about 5-7 minutes. Remove and set aside.",
      "In the same pot, heat remaining olive oil. Add onion and cook until translucent, about 3 minutes. Add garlic and cook for 30 seconds until fragrant.",
      "Add rice and stir to coat with oil. Cook for 2 minutes until the edges become translucent.",
      "Pour in wine (if using) and stir until absorbed.",
      "Add warm broth, one ladle at a time, stirring frequently. Wait until each addition is mostly absorbed before adding the next. Continue until rice is creamy and al dente, about 20 minutes.",
      "Stir in cooked mushrooms, butter, and Parmesan. Season with salt and pepper.",
      "Let rest for 2 minutes before serving. Garnish with parsley and a drizzle of truffle oil if desired."
    ],
    text_blob: "Creamy mushroom risotto with Arborio rice, white wine, and Parmesan cheese",
    imageUrl: "https://th.bing.com/th/id/R.b821643b2d8a173a9d0b04bfe777fe4f?rik=MRnGS7pQs6B99A&pid=ImgRaw&r=0",
    macros: {
      calories: 420,
      protein_g: 12,
      carbs_g: 62,
      fat_g: 14
    }
  },
  {
    id: 33,
    name: "Classic Beef Bourguignon",
    minutes: 210,
    calories: 680,
    ingredients: [
      "6 oz bacon, diced",
      "3 lbs beef chuck, cut into 2-inch cubes",
      "2 carrots, sliced",
      "1 onion, diced",
      "3 garlic cloves, minced",
      "1 bottle dry red wine",
      "2 cups beef broth",
      "1 tbsp tomato paste",
      "1 tsp thyme",
      "1 lb mushrooms, quartered",
      "1 lb pearl onions, peeled",
      "3 tbsp butter",
      "2 tbsp flour",
      "Salt and pepper to taste"
    ],
    steps: [
      "Preheat oven to 325°F (165°C). Cook bacon until crisp, then set aside.",
      "Sear beef in batches in the bacon fat until browned. Remove and set aside.",
      "Sauté carrots and onion in the same pot until softened. Add garlic and cook for 1 minute.",
      "Return beef and bacon to the pot. Add wine, broth, tomato paste, and thyme. Bring to a simmer.",
      "Cover and braise in the oven for 2.5-3 hours until beef is very tender.",
      "Sauté mushrooms and pearl onions in butter until golden. Add to the stew.",
      "Make a beurre manié by mashing flour and butter together, then whisk into the stew to thicken.",
      "Simmer for 10 minutes, adjust seasoning, and serve hot."
    ],
    text_blob: "Classic French beef stew braised in red wine with mushrooms and pearl onions",
    imageUrl: "https://nanatasty.com/wp-content/uploads/2025/01/classic-beef-bourguignon-recipe-1.jpg",
    macros: {
      calories: 680,
      protein_g: 52,
      carbs_g: 28,
      fat_g: 32
    }
  },
  {
    id: 34,
    name: "Vegetable Paella",
    minutes: 45,
    calories: 380,
    ingredients: [
      "3 cups vegetable broth",
      "1/4 tsp saffron threads",
      "2 tbsp olive oil",
      "1 onion, diced",
      "1 red bell pepper, diced",
      "4 garlic cloves, minced",
      "1 1/2 cups arborio rice",
      "1/2 cup dry white wine",
      "1 tsp smoked paprika",
      "1/2 tsp turmeric",
      "1 can (14 oz) diced tomatoes",
      "1 cup green beans, trimmed and halved",
      "1 cup artichoke hearts, quartered",
      "1/2 cup frozen peas",
      "1 lemon, cut into wedges",
      "Fresh parsley for garnish",
      "Salt and pepper to taste"
    ],
    steps: [
      "Heat broth with saffron and keep warm.",
      "In a large paella pan, heat oil over medium heat. Sauté onion and bell pepper until soft.",
      "Add garlic and rice, stirring to coat with oil. Cook for 2 minutes.",
      "Pour in wine and cook until mostly evaporated. Stir in paprika and turmeric.",
      "Add tomatoes and cook for 2 minutes. Add 2 cups of warm broth and bring to a simmer.",
      "Arrange green beans and artichokes on top. Cook without stirring for 15 minutes.",
      "Add peas and remaining broth if needed. Cook for 5 more minutes until rice is tender.",
      "Remove from heat, cover with a towel, and let rest for 5 minutes. Garnish with parsley and serve with lemon wedges."
    ],
    text_blob: "Colorful Spanish rice dish with seasonal vegetables and aromatic spices",
    imageUrl: "https://fussfreeflavours.com/wp-content/uploads/2021/06/easy-vegetable-paella-main.jpg",
    macros: {
      calories: 380,
      protein_g: 10,
      carbs_g: 65,
      fat_g: 9
    }
  },
  {
    id: 35,
    name: "Chicken Tikka Masala",
    minutes: 50,
    calories: 520,
    ingredients: [
      "1.5 lbs boneless chicken thighs, cut into bite-sized pieces",
      "1 cup plain yogurt",
      "2 tbsp lemon juice",
      "2 tsp cumin",
      "2 tsp paprika",
      "2 tsp garam masala",
      "1 tsp turmeric",
      "1/2 tsp cayenne pepper",
      "2 tbsp vegetable oil",
      "1 large onion, finely chopped",
      "4 garlic cloves, minced",
      "1 tbsp fresh ginger, grated",
      "1 can (14 oz) tomato sauce",
      "1 cup heavy cream",
      "1/2 cup fresh cilantro, chopped",
      "Cooked basmati rice for serving"
    ],
    steps: [
      "In a bowl, combine yogurt, lemon juice, 1 tsp cumin, 1 tsp paprika, 1 tsp garam masala, 1/2 tsp turmeric, and cayenne. Add chicken, coat well, and marinate for 1 hour or overnight.",
      "Heat oil in a large pan over medium-high heat. Remove chicken from marinade and cook until browned on all sides. Remove and set aside.",
      "In the same pan, sauté onion until golden. Add garlic and ginger, cook for 1 minute.",
      "Add remaining spices and cook for 30 seconds until fragrant. Stir in tomato sauce and bring to a simmer.",
      "Return chicken to the pan and simmer for 10 minutes. Stir in cream and cook for 5 more minutes.",
      "Garnish with cilantro and serve hot with basmati rice."
    ],
    text_blob: "Creamy and aromatic Indian-style chicken in spiced tomato sauce",
    imageUrl: "https://149433378.v2.pressablecdn.com/wp-content/uploads/2020/08/Chicken-Tikka-Masala-scaled.jpg",
    macros: {
      calories: 520,
      protein_g: 42,
      carbs_g: 18,
      fat_g: 32
    }
  },
  {
    id: 36,
    name: "Greek Moussaka",
    minutes: 90,
    calories: 480,
    ingredients: [
      "2 large eggplants, sliced 1/2-inch thick",
      "1/4 cup olive oil",
      "1 large onion, chopped",
      "4 garlic cloves, minced",
      "1.5 lbs ground lamb or beef",
      "1 can (14 oz) crushed tomatoes",
      "2 tbsp tomato paste",
      "1/2 cup red wine",
      "1 tsp cinnamon",
      "1/2 tsp allspice",
      "1/4 cup fresh parsley, chopped",
      "4 tbsp butter",
      "4 tbsp flour",
      "2 cups milk, warmed",
      "1/2 cup feta cheese, crumbled",
      "2 egg yolks",
      "1/4 tsp nutmeg",
      "Salt and pepper to taste"
    ],
    steps: [
      "Preheat oven to 400°F (200°C). Brush eggplant slices with olive oil and roast for 20 minutes, turning once. Reduce oven to 350°F (175°C).",
      "In a large pan, sauté onion and garlic until soft. Add meat and cook until browned.",
      "Stir in tomatoes, tomato paste, wine, cinnamon, allspice, and parsley. Simmer for 20 minutes. Season with salt and pepper.",
      "For the béchamel, melt butter in a saucepan. Whisk in flour and cook for 2 minutes. Gradually whisk in milk and cook until thickened.",
      "Remove from heat and stir in feta, egg yolks, and nutmeg. Season with salt and pepper.",
      "In a 9x13 inch baking dish, layer half the eggplant, then the meat sauce, remaining eggplant, and top with béchamel.",
      "Bake for 45 minutes until golden. Let stand 15 minutes before serving."
    ],
    text_blob: "Layered Greek casserole with eggplant, spiced meat, and creamy béchamel",
    imageUrl: "https://thumbs.dreamstime.com/b/greek-moussaka-baked-layers-eggplant-meat-isolated-white-background-traditional-cuisine-simple-clean-presentation-no-337963287.jpg",
    macros: {
      calories: 480,
      protein_g: 28,
      carbs_g: 32,
      fat_g: 28
    }
  },
  {
    id: 37,
    name: "Vietnamese Pho",
    minutes: 60,
    calories: 420,
    ingredients: [
      "8 cups beef or chicken broth",
      "1 onion, quartered",
      "4 garlic cloves, smashed",
      "3-inch piece ginger, sliced",
      "2 star anise",
      "3 cloves",
      "1 cinnamon stick",
      "1 tbsp coriander seeds",
      "1 tbsp fish sauce",
      "1 tbsp brown sugar",
      "8 oz rice noodles",
      "1/2 lb beef sirloin, very thinly sliced",
      "2 cups bean sprouts",
      "1/2 cup fresh basil leaves",
      "1/2 cup fresh cilantro",
      "2 limes, cut into wedges",
      "2 green onions, sliced",
      "2 Thai chilies, sliced (optional)",
      "Hoisin sauce and sriracha for serving"
    ],
    steps: [
      "In a large pot, toast star anise, cloves, cinnamon, and coriander seeds until fragrant. Add broth, onion, garlic, and ginger. Simmer for 30 minutes.",
      "Strain the broth and return to the pot. Stir in fish sauce and brown sugar. Keep hot.",
      "Cook rice noodles according to package instructions. Drain and divide among bowls.",
      "Top noodles with raw beef slices. Pour hot broth over the beef to cook it.",
      "Serve with bean sprouts, herbs, lime wedges, green onions, and chilies on the side. Add hoisin and sriracha to taste."
    ],
    text_blob: "Aromatic Vietnamese noodle soup with tender beef and fresh herbs",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Pho-Beef-Noodles-2008.jpg/800px-Pho-Beef-Noodles-2008.jpg",
    macros: {
      calories: 420,
      protein_g: 32,
      carbs_g: 58,
      fat_g: 8
    }
  },
  {
    id: 38,
    name: "Eggplant Parmesan",
    minutes: 60,
    calories: 380,
    ingredients: [
      "2 large eggplants, sliced into 1/2-inch rounds",
      "1 tbsp salt",
      "2 cups breadcrumbs",
      "1 cup grated Parmesan",
      "2 eggs, beaten",
      "1/4 cup flour",
      "3 cups marinara sauce",
      "2 cups shredded mozzarella",
      "1/2 cup fresh basil, chopped",
      "1/4 cup olive oil",
      "Salt and pepper to taste"
    ],
    steps: [
      "Sprinkle eggplant slices with salt and let sit for 30 minutes. Rinse and pat dry.",
      "Preheat oven to 375°F (190°C). Set up a breading station with flour, beaten eggs, and a mixture of breadcrumbs and 1/2 cup Parmesan.",
      "Dredge eggplant in flour, dip in egg, then coat with breadcrumb mixture.",
      "Heat oil in a large skillet over medium heat. Fry eggplant in batches until golden, about 3 minutes per side. Drain on paper towels.",
      "In a 9x13 inch baking dish, spread 1 cup marinara. Layer half the eggplant, half the remaining sauce, and half the mozzarella. Repeat layers.",
      "Sprinkle with remaining Parmesan. Bake for 25-30 minutes until bubbly. Let stand 10 minutes before serving. Garnish with basil."
    ],
    text_blob: "Crispy breaded eggplant layered with marinara and melted cheese",
    imageUrl: "https://thestayathomechef.com/wp-content/uploads/2018/07/Eggplant-Parmesan-3-small-1.jpg",
    macros: {
      calories: 380,
      protein_g: 20,
      carbs_g: 42,
      fat_g: 16
    }
  },
  {
    id: 39,
    name: "Korean Bibimbap",
    minutes: 45,
    calories: 580,
    ingredients: [
      "2 cups cooked short-grain rice",
      "1 carrot, julienned",
      "1 zucchini, julienned",
      "2 cups spinach",
      "4 oz bean sprouts",
      "4 oz shiitake mushrooms, sliced",
      "1/2 lb ground beef",
      "4 eggs",
      "2 tbsp gochujang (Korean chili paste)",
      "1 tbsp honey",
      "1 tbsp sesame oil",
      "2 tbsp soy sauce",
      "2 garlic cloves, minced",
      "1 tbsp vegetable oil",
      "Sesame seeds and sliced green onions for garnish"
    ],
    steps: [
      "In a small bowl, mix gochujang, honey, and 1 tbsp water to make the sauce. Set aside.",
      "Sauté each vegetable separately in a bit of oil until tender-crisp. Season with salt and a pinch of sugar.",
      "Cook ground beef with 1 tbsp soy sauce and 1/2 tbsp sesame oil. Set aside.",
      "Fry eggs sunny-side up.",
      "To assemble, place rice in bowls. Arrange vegetables and beef in sections on top. Place fried egg in the center.",
      "Drizzle with sauce and remaining sesame oil. Garnish with sesame seeds and green onions. Mix well before eating."
    ],
    text_blob: "Korean mixed rice bowl with assorted vegetables, beef, and spicy sauce",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Dolsot-bibimbap.jpg/800px-Dolsot-bibimbap.jpg",
    macros: {
      calories: 580,
      protein_g: 32,
      carbs_g: 72,
      fat_g: 20
    }
  },
  {
    id: 40,
    name: "Lemon Blueberry Cheesecake",
    minutes: 360,
    calories: 520,
    ingredients: [
      "2 cups graham cracker crumbs",
      "1/2 cup butter, melted",
      "1/4 cup sugar",
      "24 oz cream cheese, softened",
      "1 cup sugar",
      "3 eggs",
      "1 cup sour cream",
      "2 tbsp lemon zest",
      "1/4 cup lemon juice",
      "1 tsp vanilla extract",
      "2 cups fresh blueberries",
      "1/4 cup blueberry jam"
    ],
    steps: [
      "Preheat oven to 325°F (160°C). Mix crumbs, melted butter, and 1/4 cup sugar. Press into a 9-inch springform pan.",
      "Beat cream cheese and 1 cup sugar until smooth. Add eggs one at a time, then mix in sour cream, lemon zest, lemon juice, and vanilla.",
      "Pour over crust. Place pan in a water bath and bake for 1 hour. Turn off oven and let cool in oven for 1 hour with door slightly open.",
      "Chill for at least 4 hours or overnight.",
      "Before serving, top with fresh blueberries and warm blueberry jam."
    ],
    text_blob: "Creamy lemon cheesecake with fresh blueberry topping on a graham cracker crust",
    imageUrl: "https://recipes4day.com/wp-content/uploads/2024/07/Lemon-Blueberry-Cheesecake-2.jpg",
    macros: {
      calories: 520,
      protein_g: 8,
      carbs_g: 48,
      fat_g: 34
    }
  },
  {
    id: 41,
    name: "Thai Green Curry with Chicken",
    minutes: 40,
    calories: 480,
    ingredients: [
      "1 lb chicken breast, sliced",
      "2 tbsp green curry paste",
      "1 can (14 oz) coconut milk",
      "1 cup chicken broth",
      "1 red bell pepper, sliced",
      "1 cup bamboo shoots",
      "1 cup Thai basil leaves",
      "2 tbsp fish sauce",
      "1 tbsp brown sugar",
      "2 kaffir lime leaves (optional)",
      "1 tbsp vegetable oil",
      "Cooked jasmine rice for serving",
      "Lime wedges for serving"
    ],
    steps: [
      "Heat oil in a wok or large skillet over medium heat. Add curry paste and cook for 1 minute until fragrant.",
      "Pour in about 1/4 cup of coconut milk and stir to combine with the paste. Cook for 2-3 minutes until the oil starts to separate.",
      "Add chicken and cook until no longer pink, about 5 minutes.",
      "Add remaining coconut milk, chicken broth, fish sauce, brown sugar, and kaffir lime leaves. Bring to a simmer.",
      "Add bell pepper and bamboo shoots. Simmer for 10 minutes until vegetables are tender.",
      "Stir in Thai basil and remove from heat. Serve hot with jasmine rice and lime wedges."
    ],
    text_blob: "Aromatic Thai green curry with tender chicken and vegetables in coconut milk",
    imageUrl: "https://zenaskitchen.com/wp-content/uploads/2022/09/thai-green-chicken-curry.jpg",
    macros: {
      calories: 480,
      protein_g: 36,
      carbs_g: 22,
      fat_g: 28
    }
  },
  {
    id: 42,
    name: "French Onion Soup",
    minutes: 90,
    calories: 380,
    ingredients: [
      "4 large yellow onions, thinly sliced",
      "4 tbsp butter",
      "2 tbsp olive oil",
      "1 tsp sugar",
      "1/2 cup dry white wine",
      "6 cups beef broth",
      "2 tbsp all-purpose flour",
      "1 bay leaf",
      "1/2 tsp dried thyme",
      "1 baguette, sliced",
      "2 cups grated Gruyère cheese",
      "1/2 cup grated Parmesan",
      "Salt and pepper to taste"
    ],
    steps: [
      "In a large pot, melt butter with olive oil over medium heat. Add onions and cook, stirring occasionally, until caramelized (about 45 minutes). Add sugar after 30 minutes to help with browning.",
      "Sprinkle flour over onions and stir to coat. Cook for 1 minute.",
      "Add wine and scrape up any browned bits. Simmer until wine is reduced by half.",
      "Add broth, bay leaf, and thyme. Simmer for 30 minutes. Season with salt and pepper.",
      "Preheat broiler. Ladle soup into oven-safe bowls. Top with baguette slices and cheeses.",
      "Broil until cheese is bubbly and golden, about 2-3 minutes. Serve hot."
    ],
    text_blob: "Classic French onion soup with caramelized onions and melted cheese crouton",
    imageUrl: "https://poshjournal.com/wp-content/uploads/2020/10/french-onion-soup-9.jpg",
    macros: {
      calories: 380,
      protein_g: 16,
      carbs_g: 32,
      fat_g: 22
    }
  },
  {
    id: 43,
    name: "Tomato Brown Butter Pasta",
    minutes: 25,
    calories: 520,
    ingredients: [
      "12 oz spaghetti or linguine",
      "1/2 cup unsalted butter",
      "1 large tomato (about 8 oz)",
      "1/2 cup freshly grated Parmesan cheese",
      "1/4 cup fresh basil leaves, thinly sliced",
      "1/4 tsp red pepper flakes (optional)",
      "Salt and freshly ground black pepper to taste"
    ],
    steps: [
      "Cook pasta in a large pot of salted boiling water until al dente. Reserve 1/2 cup of pasta water, then drain.",
      "While pasta cooks, purée the tomato in a blender until smooth. Strain through a fine-mesh sieve to remove seeds and skin.",
      "In a large skillet, melt butter over medium heat. Cook, swirling occasionally, until the butter turns golden brown and smells nutty, about 3-4 minutes.",
      "Carefully stir in the tomato purée (it may spatter) and cook for 1 minute more.",
      "Add the drained pasta to the skillet along with 1/4 cup of the reserved pasta water. Toss to coat, adding more pasta water if needed to create a silky sauce.",
      "Remove from heat and stir in Parmesan cheese, basil, and red pepper flakes if using.",
      "Season with salt and pepper to taste. Serve immediately with extra Parmesan on top."
    ],
    text_blob: "Simple pasta dish with rich brown butter and fresh tomato sauce",
    imageUrl: "https://www.onegirlonekitchen.com/wp-content/uploads/2020/07/brown-butter-tomato-pasta-1.jpg",
    macros: {
      calories: 520,
      protein_g: 14,
      carbs_g: 68,
      fat_g: 22
    }
  },
  {
    id: 44,
    name: "Lemon Garlic Butter Shrimp",
    minutes: 15,
    calories: 320,
    ingredients: [
      "1 lb large shrimp, peeled and deveined",
      "3 tbsp unsalted butter",
      "4 garlic cloves, minced",
      "1/4 cup chicken or vegetable broth",
      "2 tbsp fresh lemon juice",
      "1 tsp lemon zest",
      "1/4 tsp red pepper flakes",
      "2 tbsp chopped fresh parsley",
      "Salt and black pepper to taste",
      "Lemon wedges for serving"
    ],
    steps: [
      "Pat shrimp dry and season with salt and pepper.",
      "In a large skillet, melt 2 tbsp butter over medium-high heat. Add shrimp in a single layer and cook for 1-2 minutes per side until pink and cooked through. Remove to a plate.",
      "In the same skillet, add remaining 1 tbsp butter and garlic. Cook for 30 seconds until fragrant.",
      "Add broth, lemon juice, lemon zest, and red pepper flakes. Simmer for 2-3 minutes until slightly reduced.",
      "Return shrimp to the pan and toss to coat in the sauce. Cook for 1 more minute to heat through.",
      "Garnish with parsley and serve immediately with lemon wedges."
    ],
    text_blob: "Quick and flavorful shrimp in a lemon garlic butter sauce",
    imageUrl: "https://www.wholesomeyum.com/wp-content/uploads/2022/01/wholesomeyum-Lemon-Garlic-Butter-Shrimp-Recipe-13.jpg",
    macros: {
      calories: 320,
      protein_g: 31,
      carbs_g: 4,
      fat_g: 20
    }
  },
  {
    id: 45,
    name: "Vegetable Stir Fry with Tofu",
    minutes: 30,
    calories: 380,
    ingredients: [
      "14 oz extra-firm tofu, pressed and cubed",
      "3 tbsp soy sauce, divided",
      "2 tbsp rice vinegar",
      "1 tbsp honey or maple syrup",
      "1 tbsp sesame oil",
      "2 tbsp vegetable oil, divided",
      "2 cups broccoli florets",
      "1 red bell pepper, sliced",
      "2 carrots, julienned",
      "2 garlic cloves, minced",
      "1 tbsp fresh ginger, grated",
      "2 green onions, sliced",
      "1 tbsp sesame seeds",
      "Cooked rice for serving"
    ],
    steps: [
      "In a small bowl, whisk together 1 tbsp soy sauce, rice vinegar, and honey/maple syrup. Set aside.",
      "Toss tofu cubes with 1 tbsp soy sauce. Heat 1 tbsp vegetable oil in a large wok or skillet over medium-high heat. Add tofu and cook until golden on all sides, about 5-7 minutes. Remove and set aside.",
      "Add remaining 1 tbsp vegetable oil to the wok. Add garlic and ginger, stir for 30 seconds until fragrant.",
      "Add vegetables and stir-fry for 4-5 minutes until crisp-tender.",
      "Return tofu to the wok. Add the sauce and remaining 1 tbsp soy sauce. Toss to combine and cook for 1-2 minutes until heated through.",
      "Garnish with green onions and sesame seeds. Serve hot over rice."
    ],
    text_blob: "Healthy vegetable and tofu stir fry with a savory sauce",
    imageUrl: "https://therecipecritic.com/wp-content/uploads/2019/08/vegetable_stir_fry.jpg",
    macros: {
      calories: 380,
      protein_g: 22,
      carbs_g: 32,
      fat_g: 20
    }
  },
  {
    id: 46,
    name: "Classic Caesar Salad",
    minutes: 20,
    calories: 420,
    ingredients: [
      "1 large romaine lettuce, chopped",
      "1/2 cup Caesar dressing (homemade or store-bought)",
      "1/2 cup grated Parmesan cheese",
      "1 cup croutons",
      "Freshly ground black pepper",
      "Optional: grilled chicken, shrimp, or salmon"
    ],
    steps: [
      "In a large bowl, combine the chopped romaine lettuce with about half of the Caesar dressing. Toss to coat evenly.",
      "Add more dressing as needed, being careful not to overdress the salad.",
      "Sprinkle with grated Parmesan cheese and croutons.",
      "Add freshly ground black pepper to taste.",
      "If using, top with grilled chicken, shrimp, or salmon for a complete meal.",
      "Serve immediately with additional Parmesan and dressing on the side."
    ],
    text_blob: "Classic Caesar salad with crisp romaine, croutons, and Parmesan",
    imageUrl: "https://foolproofliving.com/wp-content/uploads/2013/12/Classic-Caesar-Salad-recipe.jpg",
    macros: {
      calories: 420,
      protein_g: 12,
      carbs_g: 28,
      fat_g: 30
    }
  },
  {
    id: 47,
    name: "Beef and Broccoli Stir Fry",
    minutes: 25,
    calories: 480,
    ingredients: [
      "1 lb flank steak, thinly sliced against the grain",
      "3 cups broccoli florets",
      "2 tbsp vegetable oil, divided",
      "3 garlic cloves, minced",
      "1 tbsp fresh ginger, grated",
      "1/4 cup soy sauce",
      "2 tbsp brown sugar",
      "1 tbsp cornstarch",
      "1/2 cup beef broth",
      "1 tbsp sesame oil",
      "1 tsp red pepper flakes (optional)",
      "Sesame seeds and green onions for garnish",
      "Cooked rice for serving"
    ],
    steps: [
      "In a small bowl, whisk together soy sauce, brown sugar, cornstarch, beef broth, and sesame oil. Set aside.",
      "Heat 1 tbsp vegetable oil in a large wok or skillet over high heat. Add beef and cook until browned, about 2-3 minutes. Remove and set aside.",
      "Add remaining 1 tbsp oil to the wok. Add garlic and ginger, stir for 30 seconds until fragrant.",
      "Add broccoli and stir-fry for 3-4 minutes until bright green and crisp-tender.",
      "Return beef to the wok. Give the sauce a quick stir and pour over the beef and broccoli.",
      "Cook, stirring constantly, until the sauce thickens, about 1-2 minutes.",
      "Garnish with sesame seeds and green onions. Serve hot over rice."
    ],
    text_blob: "Tender beef and crisp broccoli in a savory garlic sauce",
    imageUrl: "https://www.jocooks.com/wp-content/uploads/2019/04/beef-and-broccoli-1-11.jpg",
    macros: {
      calories: 480,
      protein_g: 38,
      carbs_g: 24,
      fat_g: 26
    }
  },
  {
    id: 48,
    name: "Creamy Garlic Mushroom Pasta",
    minutes: 30,
    calories: 540,
    ingredients: [
      "12 oz fettuccine or pasta of choice",
      "2 tbsp butter",
      "1 lb mushrooms, sliced",
      "4 garlic cloves, minced",
      "1/2 tsp dried thyme",
      "1/2 tsp dried oregano",
      "1 cup heavy cream",
      "1/2 cup chicken or vegetable broth",
      "1/2 cup grated Parmesan cheese",
      "2 tbsp chopped fresh parsley",
      "Salt and black pepper to taste"
    ],
    steps: [
      "Cook pasta according to package instructions. Reserve 1/2 cup of pasta water before draining.",
      "In a large skillet, melt butter over medium-high heat. Add mushrooms and cook until golden brown, about 5-7 minutes.",
      "Add garlic, thyme, and oregano. Cook for 1 minute until fragrant.",
      "Pour in heavy cream and broth. Bring to a simmer and cook for 3-4 minutes until slightly thickened.",
      "Stir in Parmesan cheese until melted and smooth. If the sauce is too thick, add some of the reserved pasta water to reach desired consistency.",
      "Add the cooked pasta to the sauce and toss to coat. Season with salt and black pepper to taste.",
      "Garnish with fresh parsley and additional Parmesan before serving."
    ],
    text_blob: "Creamy garlic mushroom pasta with Parmesan and herbs",
    imageUrl: "https://biteitquick.com/wp-content/uploads/2016/05/DSC_6276a.jpg",
    macros: {
      calories: 540,
      protein_g: 18,
      carbs_g: 58,
      fat_g: 28
    }
  },
  {
    id: 49,
    name: "Honey Garlic Glazed Salmon",
    minutes: 20,
    calories: 380,
    ingredients: [
      "4 (6 oz) salmon fillets",
      "Salt and black pepper to taste",
      "1/4 cup honey",
      "3 tbsp soy sauce",
      "2 tbsp lemon juice",
      "3 garlic cloves, minced",
      "1 tsp grated ginger",
      "1 tbsp olive oil",
      "1 tsp cornstarch mixed with 1 tbsp water (optional, for thicker glaze)",
      "Sesame seeds and sliced green onions for garnish"
    ],
    steps: [
      "Pat salmon fillets dry and season with salt and pepper.",
      "In a small bowl, whisk together honey, soy sauce, lemon juice, garlic, and ginger.",
      "Heat olive oil in a large skillet over medium-high heat. Add salmon fillets, skin-side down, and cook for 3-4 minutes until golden.",
      "Flip the salmon and cook for another 2 minutes. Remove from the skillet and set aside.",
      "In the same skillet, pour in the honey garlic sauce. Bring to a simmer and cook for 2-3 minutes until slightly reduced.",
      "If a thicker glaze is desired, stir in the cornstarch mixture and cook for 1 more minute until thickened.",
      "Return salmon to the skillet and spoon the glaze over the fillets. Cook for 1-2 minutes to heat through.",
      "Garnish with sesame seeds and green onions. Serve immediately with rice and vegetables."
    ],
    text_blob: "Sweet and savory honey garlic glazed salmon with sesame seeds",
    imageUrl: "https://bellyfull.net/wp-content/uploads/2022/04/Honey-glazed-salmon-blog-2-768x1024.jpg",
    macros: {
      calories: 380,
      protein_g: 36,
      carbs_g: 22,
      fat_g: 16
    }
  },
  {
    id: 50,
    name: "Vegetable Lasagna",
    minutes: 75,
    calories: 420,
    ingredients: [
      "9 lasagna noodles",
      "2 tbsp olive oil",
      "1 onion, diced",
      "3 garlic cloves, minced",
      "1 zucchini, diced",
      "1 red bell pepper, diced",
      "8 oz mushrooms, sliced",
      "1 (10 oz) package frozen spinach, thawed and drained",
      "1 (15 oz) container ricotta cheese",
      "1 large egg",
      "1/4 cup chopped fresh basil",
      "3 cups marinara sauce",
      "2 cups shredded mozzarella cheese",
      "1/2 cup grated Parmesan cheese",
      "Salt and black pepper to taste"
    ],
    steps: [
      "Preheat oven to 375°F (190°C). Cook lasagna noodles according to package directions. Drain and set aside.",
      "In a large skillet, heat olive oil over medium heat. Add onion and garlic, cook until softened, about 3 minutes.",
      "Add zucchini, bell pepper, and mushrooms. Cook for 5-7 minutes until vegetables are tender. Stir in spinach and remove from heat.",
      "In a bowl, mix ricotta, egg, basil, salt, and pepper.",
      "Spread 1/2 cup marinara in the bottom of a 9x13 inch baking dish. Layer 3 lasagna noodles, half the ricotta mixture, half the vegetable mixture, 1 cup marinara, and 1/2 cup mozzarella. Repeat layers.",
      "Top with remaining 3 noodles, remaining marinara, remaining mozzarella, and Parmesan.",
      "Cover with foil and bake for 25 minutes. Remove foil and bake for another 15-20 minutes until bubbly and golden.",
      "Let stand for 10 minutes before serving."
    ],
    text_blob: "Hearty vegetable lasagna with layers of pasta, cheese, and fresh vegetables",
    imageUrl: "https://cdn.loveandlemons.com/wp-content/uploads/2023/12/vegetarian-lasagna-scaled.jpg",
    macros: {
      calories: 420,
      protein_g: 24,
      carbs_g: 42,
      fat_g: 19
    }
  }
];
