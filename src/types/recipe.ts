/**
 * Recipe data types for the 3D Recipe App
 */

export type RecipeDifficulty = 'easy' | 'medium' | 'hard'
export type RecipeCategory = 'breakfast' | 'lunch' | 'dinner' | 'dessert' | 'snack' | 'beverage'
export type CuisineType = 'italian' | 'japanese' | 'mexican' | 'chinese' | 'french' | 'american' | 'indian' | 'thai' | 'mediterranean' | 'fusion'

export interface Ingredient {
  id: string
  name: string
  amount: number
  unit: string
  notes?: string
}

export interface RecipeStep {
  id: string
  stepNumber: number
  instruction: string
  duration?: number // in minutes
  image?: string
}

export interface NutritionInfo {
  calories: number
  protein: number // grams
  carbs: number // grams
  fat: number // grams
  fiber?: number // grams
}

export interface Recipe {
  id: string
  title: string
  description: string
  image: string // URL or path to image
  category: RecipeCategory
  cuisine: CuisineType
  difficulty: RecipeDifficulty
  prepTime: number // in minutes
  cookTime: number // in minutes
  servings: number
  ingredients: Ingredient[]
  steps: RecipeStep[]
  nutrition?: NutritionInfo
  tags: string[]
  author?: string
  createdAt: Date
  updatedAt: Date
  isFavorite?: boolean
}

export interface RecipeFilters {
  category?: RecipeCategory
  cuisine?: CuisineType
  difficulty?: RecipeDifficulty
  maxPrepTime?: number
  maxCookTime?: number
  searchQuery?: string
  tags?: string[]
}

export interface RecipeState {
  recipes: Recipe[]
  activeRecipe: Recipe | null
  favorites: string[] // recipe IDs
  filters: RecipeFilters
}
