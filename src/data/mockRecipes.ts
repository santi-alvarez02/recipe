import { Recipe } from '@/types/recipe'

/**
 * Mock recipe data for development
 * Using placeholder images from Unsplash
 */

export const mockRecipes: Recipe[] = [
  {
    id: '1',
    title: 'Spicy Tonkotsu Ramen',
    description: 'Rich pork bone broth with handmade noodles, soft-boiled egg, and aromatic toppings. A soul-warming Japanese classic.',
    image: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=800',
    category: 'dinner',
    cuisine: 'japanese',
    difficulty: 'hard',
    prepTime: 30,
    cookTime: 180,
    servings: 4,
    ingredients: [
      { id: '1-1', name: 'Pork bones', amount: 2, unit: 'lbs' },
      { id: '1-2', name: 'Ramen noodles', amount: 4, unit: 'portions' },
      { id: '1-3', name: 'Soft-boiled eggs', amount: 4, unit: 'eggs' },
      { id: '1-4', name: 'Green onions', amount: 4, unit: 'stalks' },
      { id: '1-5', name: 'Nori seaweed', amount: 4, unit: 'sheets' },
      { id: '1-6', name: 'Sesame oil', amount: 2, unit: 'tbsp' },
      { id: '1-7', name: 'Garlic', amount: 6, unit: 'cloves' },
      { id: '1-8', name: 'Ginger', amount: 2, unit: 'inches' },
      { id: '1-9', name: 'Miso paste', amount: 3, unit: 'tbsp' },
      { id: '1-10', name: 'Chili oil', amount: 2, unit: 'tbsp' }
    ],
    steps: [
      { id: '1-s1', stepNumber: 1, instruction: 'Blanch pork bones in boiling water for 10 minutes, then rinse', duration: 15 },
      { id: '1-s2', stepNumber: 2, instruction: 'Simmer bones with garlic and ginger for 3 hours until broth is milky white', duration: 180 },
      { id: '1-s3', stepNumber: 3, instruction: 'Prepare soft-boiled eggs: boil for 6.5 minutes, then ice bath', duration: 10 },
      { id: '1-s4', stepNumber: 4, instruction: 'Cook noodles according to package directions, drain well', duration: 5 },
      { id: '1-s5', stepNumber: 5, instruction: 'Assemble: noodles, broth, toppings, and drizzle with chili oil', duration: 5 }
    ],
    nutrition: {
      calories: 650,
      protein: 35,
      carbs: 68,
      fat: 25,
      fiber: 4
    },
    tags: ['comfort-food', 'soup', 'spicy', 'asian'],
    author: 'Chef Tanaka',
    createdAt: new Date('2024-01-15'),
    updatedAt: new Date('2024-01-15'),
    isFavorite: true
  },
  {
    id: '2',
    title: 'Margherita Pizza',
    description: 'Classic Neapolitan pizza with San Marzano tomatoes, fresh mozzarella, and basil. Simple perfection.',
    image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=800',
    category: 'dinner',
    cuisine: 'italian',
    difficulty: 'medium',
    prepTime: 120,
    cookTime: 10,
    servings: 2,
    ingredients: [
      { id: '2-1', name: 'Pizza dough', amount: 400, unit: 'g' },
      { id: '2-2', name: 'San Marzano tomatoes', amount: 200, unit: 'g' },
      { id: '2-3', name: 'Fresh mozzarella', amount: 150, unit: 'g' },
      { id: '2-4', name: 'Fresh basil', amount: 10, unit: 'leaves' },
      { id: '2-5', name: 'Extra virgin olive oil', amount: 2, unit: 'tbsp' },
      { id: '2-6', name: 'Sea salt', amount: 1, unit: 'tsp' }
    ],
    steps: [
      { id: '2-s1', stepNumber: 1, instruction: 'Let dough rise at room temperature for 2 hours', duration: 120 },
      { id: '2-s2', stepNumber: 2, instruction: 'Preheat oven to maximum temperature (500°F+)', duration: 30 },
      { id: '2-s3', stepNumber: 3, instruction: 'Stretch dough into 12-inch rounds', duration: 5 },
      { id: '2-s4', stepNumber: 4, instruction: 'Spread crushed tomatoes, add torn mozzarella', duration: 3 },
      { id: '2-s5', stepNumber: 5, instruction: 'Bake for 8-10 minutes until crust is charred and cheese bubbles', duration: 10 },
      { id: '2-s6', stepNumber: 6, instruction: 'Top with fresh basil and olive oil', duration: 1 }
    ],
    nutrition: {
      calories: 820,
      protein: 32,
      carbs: 98,
      fat: 32,
      fiber: 6
    },
    tags: ['italian', 'vegetarian', 'classic'],
    author: 'Chef Romano',
    createdAt: new Date('2024-02-01'),
    updatedAt: new Date('2024-02-01'),
    isFavorite: true
  },
  {
    id: '3',
    title: 'Avocado Toast Deluxe',
    description: 'Creamy smashed avocado on sourdough with poached egg, cherry tomatoes, and everything seasoning.',
    image: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?w=800',
    category: 'breakfast',
    cuisine: 'american',
    difficulty: 'easy',
    prepTime: 5,
    cookTime: 10,
    servings: 2,
    ingredients: [
      { id: '3-1', name: 'Sourdough bread', amount: 2, unit: 'slices' },
      { id: '3-2', name: 'Ripe avocados', amount: 2, unit: 'whole' },
      { id: '3-3', name: 'Eggs', amount: 2, unit: 'whole' },
      { id: '3-4', name: 'Cherry tomatoes', amount: 6, unit: 'whole' },
      { id: '3-5', name: 'Lemon juice', amount: 1, unit: 'tbsp' },
      { id: '3-6', name: 'Everything bagel seasoning', amount: 2, unit: 'tsp' },
      { id: '3-7', name: 'Red pepper flakes', amount: 0.5, unit: 'tsp' }
    ],
    steps: [
      { id: '3-s1', stepNumber: 1, instruction: 'Toast sourdough until golden and crispy', duration: 5 },
      { id: '3-s2', stepNumber: 2, instruction: 'Poach eggs in simmering water with vinegar for 3-4 minutes', duration: 5 },
      { id: '3-s3', stepNumber: 3, instruction: 'Mash avocado with lemon juice, salt, and pepper', duration: 3 },
      { id: '3-s4', stepNumber: 4, instruction: 'Spread avocado on toast, top with poached egg', duration: 2 },
      { id: '3-s5', stepNumber: 5, instruction: 'Add halved cherry tomatoes, season, and serve', duration: 2 }
    ],
    nutrition: {
      calories: 420,
      protein: 18,
      carbs: 36,
      fat: 24,
      fiber: 12
    },
    tags: ['breakfast', 'healthy', 'quick', 'vegetarian'],
    author: 'Chef Emma',
    createdAt: new Date('2024-03-10'),
    updatedAt: new Date('2024-03-10')
  },
  {
    id: '4',
    title: 'Pad Thai',
    description: 'Sweet and tangy Thai rice noodles with shrimp, peanuts, and vibrant vegetables. Street food perfection.',
    image: 'https://images.unsplash.com/photo-1559314809-0d155014e29e?w=800',
    category: 'dinner',
    cuisine: 'thai',
    difficulty: 'medium',
    prepTime: 20,
    cookTime: 15,
    servings: 4,
    ingredients: [
      { id: '4-1', name: 'Rice noodles', amount: 400, unit: 'g' },
      { id: '4-2', name: 'Shrimp', amount: 1, unit: 'lb', notes: 'peeled and deveined' },
      { id: '4-3', name: 'Eggs', amount: 3, unit: 'whole' },
      { id: '4-4', name: 'Bean sprouts', amount: 2, unit: 'cups' },
      { id: '4-5', name: 'Peanuts', amount: 0.5, unit: 'cup', notes: 'crushed' },
      { id: '4-6', name: 'Tamarind paste', amount: 3, unit: 'tbsp' },
      { id: '4-7', name: 'Fish sauce', amount: 3, unit: 'tbsp' },
      { id: '4-8', name: 'Palm sugar', amount: 2, unit: 'tbsp' },
      { id: '4-9', name: 'Lime', amount: 2, unit: 'whole' },
      { id: '4-10', name: 'Garlic', amount: 4, unit: 'cloves' }
    ],
    steps: [
      { id: '4-s1', stepNumber: 1, instruction: 'Soak rice noodles in warm water for 30 minutes, drain', duration: 30 },
      { id: '4-s2', stepNumber: 2, instruction: 'Make sauce: mix tamarind, fish sauce, palm sugar', duration: 3 },
      { id: '4-s3', stepNumber: 3, instruction: 'Stir-fry garlic and shrimp in hot wok until pink', duration: 4 },
      { id: '4-s4', stepNumber: 4, instruction: 'Push to side, scramble eggs, then add noodles', duration: 3 },
      { id: '4-s5', stepNumber: 5, instruction: 'Add sauce, toss everything, then add bean sprouts', duration: 5 },
      { id: '4-s6', stepNumber: 6, instruction: 'Serve with peanuts, lime wedges, and fresh herbs', duration: 2 }
    ],
    nutrition: {
      calories: 580,
      protein: 28,
      carbs: 72,
      fat: 18,
      fiber: 4
    },
    tags: ['thai', 'stir-fry', 'seafood', 'street-food'],
    author: 'Chef Somchai',
    createdAt: new Date('2024-02-20'),
    updatedAt: new Date('2024-02-20'),
    isFavorite: false
  },
  {
    id: '5',
    title: 'Classic Tiramisu',
    description: 'Layers of espresso-soaked ladyfingers and mascarpone cream dusted with cocoa. Italian indulgence.',
    image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?w=800',
    category: 'dessert',
    cuisine: 'italian',
    difficulty: 'medium',
    prepTime: 30,
    cookTime: 0,
    servings: 8,
    ingredients: [
      { id: '5-1', name: 'Ladyfinger cookies', amount: 24, unit: 'pieces' },
      { id: '5-2', name: 'Mascarpone cheese', amount: 16, unit: 'oz' },
      { id: '5-3', name: 'Eggs', amount: 4, unit: 'whole', notes: 'separated' },
      { id: '5-4', name: 'Sugar', amount: 0.75, unit: 'cup' },
      { id: '5-5', name: 'Strong espresso', amount: 1.5, unit: 'cups', notes: 'cooled' },
      { id: '5-6', name: 'Coffee liqueur', amount: 3, unit: 'tbsp' },
      { id: '5-7', name: 'Cocoa powder', amount: 3, unit: 'tbsp' },
      { id: '5-8', name: 'Vanilla extract', amount: 1, unit: 'tsp' }
    ],
    steps: [
      { id: '5-s1', stepNumber: 1, instruction: 'Whisk egg yolks with sugar until pale and thick', duration: 5 },
      { id: '5-s2', stepNumber: 2, instruction: 'Fold in mascarpone and vanilla until smooth', duration: 3 },
      { id: '5-s3', stepNumber: 3, instruction: 'Beat egg whites to stiff peaks, fold into mascarpone mixture', duration: 5 },
      { id: '5-s4', stepNumber: 4, instruction: 'Mix espresso with coffee liqueur in shallow dish', duration: 2 },
      { id: '5-s5', stepNumber: 5, instruction: 'Quickly dip ladyfingers in coffee, layer in dish', duration: 8 },
      { id: '5-s6', stepNumber: 6, instruction: 'Spread half the cream, repeat layers, dust with cocoa', duration: 7 },
      { id: '5-s7', stepNumber: 7, instruction: 'Refrigerate for at least 4 hours or overnight', duration: 240 }
    ],
    nutrition: {
      calories: 380,
      protein: 8,
      carbs: 42,
      fat: 20,
      fiber: 1
    },
    tags: ['dessert', 'italian', 'no-bake', 'coffee'],
    author: 'Chef Isabella',
    createdAt: new Date('2024-01-25'),
    updatedAt: new Date('2024-01-25'),
    isFavorite: true
  },
  {
    id: '6',
    title: 'Chicken Tacos al Pastor',
    description: 'Marinated chicken with pineapple, cilantro, and lime. Mexican street food vibes at home.',
    image: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=800',
    category: 'dinner',
    cuisine: 'mexican',
    difficulty: 'easy',
    prepTime: 15,
    cookTime: 20,
    servings: 4,
    ingredients: [
      { id: '6-1', name: 'Chicken thighs', amount: 2, unit: 'lbs', notes: 'boneless' },
      { id: '6-2', name: 'Pineapple', amount: 1, unit: 'cup', notes: 'diced' },
      { id: '6-3', name: 'Corn tortillas', amount: 12, unit: 'pieces' },
      { id: '6-4', name: 'White onion', amount: 1, unit: 'whole', notes: 'diced' },
      { id: '6-5', name: 'Fresh cilantro', amount: 1, unit: 'cup', notes: 'chopped' },
      { id: '6-6', name: 'Lime', amount: 3, unit: 'whole' },
      { id: '6-7', name: 'Achiote paste', amount: 2, unit: 'tbsp' },
      { id: '6-8', name: 'Chipotle peppers', amount: 2, unit: 'pieces', notes: 'in adobo' },
      { id: '6-9', name: 'Garlic', amount: 4, unit: 'cloves' }
    ],
    steps: [
      { id: '6-s1', stepNumber: 1, instruction: 'Blend achiote, chipotle, garlic, lime juice for marinade', duration: 5 },
      { id: '6-s2', stepNumber: 2, instruction: 'Marinate chicken for at least 1 hour (or overnight)', duration: 60 },
      { id: '6-s3', stepNumber: 3, instruction: 'Grill chicken over high heat until charred, 6-7 minutes per side', duration: 15 },
      { id: '6-s4', stepNumber: 4, instruction: 'Grill pineapple slices until caramelized', duration: 5 },
      { id: '6-s5', stepNumber: 5, instruction: 'Dice chicken and pineapple, warm tortillas', duration: 5 },
      { id: '6-s6', stepNumber: 6, instruction: 'Assemble tacos with onion, cilantro, and lime juice', duration: 5 }
    ],
    nutrition: {
      calories: 485,
      protein: 38,
      carbs: 48,
      fat: 16,
      fiber: 7
    },
    tags: ['mexican', 'grilled', 'street-food', 'spicy'],
    author: 'Chef Miguel',
    createdAt: new Date('2024-03-05'),
    updatedAt: new Date('2024-03-05')
  },
  {
    id: '7',
    title: 'Miso Glazed Salmon',
    description: 'Buttery salmon with sweet-savory miso glaze, served with steamed vegetables. Restaurant-quality at home.',
    image: 'https://images.unsplash.com/photo-1467003909585-2f8a72700288?w=800',
    category: 'dinner',
    cuisine: 'japanese',
    difficulty: 'easy',
    prepTime: 10,
    cookTime: 15,
    servings: 4,
    ingredients: [
      { id: '7-1', name: 'Salmon fillets', amount: 4, unit: 'pieces', notes: '6 oz each' },
      { id: '7-2', name: 'White miso paste', amount: 3, unit: 'tbsp' },
      { id: '7-3', name: 'Mirin', amount: 2, unit: 'tbsp' },
      { id: '7-4', name: 'Sake', amount: 2, unit: 'tbsp' },
      { id: '7-5', name: 'Brown sugar', amount: 2, unit: 'tbsp' },
      { id: '7-6', name: 'Sesame oil', amount: 1, unit: 'tsp' },
      { id: '7-7', name: 'Green beans', amount: 1, unit: 'lb' },
      { id: '7-8', name: 'Sesame seeds', amount: 1, unit: 'tbsp' }
    ],
    steps: [
      { id: '7-s1', stepNumber: 1, instruction: 'Whisk miso, mirin, sake, and brown sugar until smooth', duration: 3 },
      { id: '7-s2', stepNumber: 2, instruction: 'Brush salmon with miso glaze, let sit for 10 minutes', duration: 10 },
      { id: '7-s3', stepNumber: 3, instruction: 'Preheat broiler, line pan with foil', duration: 5 },
      { id: '7-s4', stepNumber: 4, instruction: 'Broil salmon 6 inches from heat for 8-10 minutes', duration: 10 },
      { id: '7-s5', stepNumber: 5, instruction: 'Steam green beans until tender-crisp, toss with sesame oil', duration: 6 },
      { id: '7-s6', stepNumber: 6, instruction: 'Serve salmon with vegetables, garnish with sesame seeds', duration: 2 }
    ],
    nutrition: {
      calories: 385,
      protein: 42,
      carbs: 18,
      fat: 16,
      fiber: 4
    },
    tags: ['japanese', 'seafood', 'healthy', 'quick'],
    author: 'Chef Yuki',
    createdAt: new Date('2024-02-15'),
    updatedAt: new Date('2024-02-15'),
    isFavorite: false
  },
  {
    id: '8',
    title: 'Matcha Latte',
    description: 'Smooth, frothy matcha green tea with steamed milk. Zen in a cup.',
    image: 'https://images.unsplash.com/photo-1536013677798-e85dc7c1cd5c?w=800',
    category: 'beverage',
    cuisine: 'japanese',
    difficulty: 'easy',
    prepTime: 3,
    cookTime: 5,
    servings: 1,
    ingredients: [
      { id: '8-1', name: 'Matcha powder', amount: 1.5, unit: 'tsp', notes: 'ceremonial grade' },
      { id: '8-2', name: 'Hot water', amount: 2, unit: 'oz', notes: '175°F' },
      { id: '8-3', name: 'Milk', amount: 10, unit: 'oz', notes: 'dairy or plant-based' },
      { id: '8-4', name: 'Honey or sugar', amount: 1, unit: 'tbsp', notes: 'optional' }
    ],
    steps: [
      { id: '8-s1', stepNumber: 1, instruction: 'Sift matcha powder into bowl to remove clumps', duration: 1 },
      { id: '8-s2', stepNumber: 2, instruction: 'Add hot water, whisk vigorously in M-shape for 30 seconds', duration: 1 },
      { id: '8-s3', stepNumber: 3, instruction: 'Steam and froth milk until hot and foamy', duration: 3 },
      { id: '8-s4', stepNumber: 4, instruction: 'Pour matcha into cup, add sweetener if desired', duration: 1 },
      { id: '8-s5', stepNumber: 5, instruction: 'Slowly pour steamed milk, creating latte art if skilled', duration: 2 }
    ],
    nutrition: {
      calories: 140,
      protein: 8,
      carbs: 16,
      fat: 5,
      fiber: 0
    },
    tags: ['beverage', 'japanese', 'healthy', 'caffeine'],
    author: 'Barista Kenji',
    createdAt: new Date('2024-03-01'),
    updatedAt: new Date('2024-03-01')
  }
]

/**
 * Helper function to get recipe by ID
 */
export const getRecipeById = (id: string): Recipe | undefined => {
  return mockRecipes.find(recipe => recipe.id === id)
}

/**
 * Helper function to get recipes by category
 */
export const getRecipesByCategory = (category: string): Recipe[] => {
  return mockRecipes.filter(recipe => recipe.category === category)
}

/**
 * Helper function to get recipes by cuisine
 */
export const getRecipesByCuisine = (cuisine: string): Recipe[] => {
  return mockRecipes.filter(recipe => recipe.cuisine === cuisine)
}

/**
 * Helper function to get favorite recipes
 */
export const getFavoriteRecipes = (): Recipe[] => {
  return mockRecipes.filter(recipe => recipe.isFavorite)
}
