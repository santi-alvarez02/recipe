import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'
import { Recipe, RecipeFilters } from '@/types/recipe'
import { mockRecipes } from '@/data/mockRecipes'

/**
 * Recipe store for managing recipe data and state
 * Uses Zustand with devtools and persist middleware
 */

interface RecipeStore {
  // State
  recipes: Recipe[]
  activeRecipe: Recipe | null
  favorites: Set<string>
  filters: RecipeFilters
  isLoading: boolean

  // Actions - Recipe Management
  setActiveRecipe: (recipe: Recipe | null) => void
  addRecipe: (recipe: Recipe) => void
  updateRecipe: (id: string, updates: Partial<Recipe>) => void
  deleteRecipe: (id: string) => void

  // Actions - Favorites
  toggleFavorite: (recipeId: string) => void
  isFavorite: (recipeId: string) => boolean
  getFavorites: () => Recipe[]

  // Actions - Filtering
  setFilters: (filters: Partial<RecipeFilters>) => void
  clearFilters: () => void
  getFilteredRecipes: () => Recipe[]

  // Actions - Search
  searchRecipes: (query: string) => Recipe[]

  // Actions - Data Management
  loadRecipes: () => void
  resetStore: () => void
}

const initialState = {
  recipes: mockRecipes,
  activeRecipe: null,
  favorites: new Set<string>(mockRecipes.filter(r => r.isFavorite).map(r => r.id)),
  filters: {},
  isLoading: false,
}

export const useRecipeStore = create<RecipeStore>()(
  devtools(
    persist(
      (set, get) => ({
        ...initialState,

        // Recipe Management
        setActiveRecipe: (recipe) => set({ activeRecipe: recipe }),

        addRecipe: (recipe) => set((state) => ({
          recipes: [...state.recipes, recipe]
        })),

        updateRecipe: (id, updates) => set((state) => ({
          recipes: state.recipes.map(recipe =>
            recipe.id === id ? { ...recipe, ...updates, updatedAt: new Date() } : recipe
          ),
          activeRecipe: state.activeRecipe?.id === id
            ? { ...state.activeRecipe, ...updates, updatedAt: new Date() }
            : state.activeRecipe
        })),

        deleteRecipe: (id) => set((state) => ({
          recipes: state.recipes.filter(recipe => recipe.id !== id),
          activeRecipe: state.activeRecipe?.id === id ? null : state.activeRecipe,
          favorites: new Set([...state.favorites].filter(fid => fid !== id))
        })),

        // Favorites
        toggleFavorite: (recipeId) => set((state) => {
          const newFavorites = new Set(state.favorites)
          if (newFavorites.has(recipeId)) {
            newFavorites.delete(recipeId)
          } else {
            newFavorites.add(recipeId)
          }

          return {
            favorites: newFavorites,
            recipes: state.recipes.map(recipe =>
              recipe.id === recipeId
                ? { ...recipe, isFavorite: !recipe.isFavorite }
                : recipe
            )
          }
        }),

        isFavorite: (recipeId) => get().favorites.has(recipeId),

        getFavorites: () => {
          const { recipes, favorites } = get()
          return recipes.filter(recipe => favorites.has(recipe.id))
        },

        // Filtering
        setFilters: (newFilters) => set((state) => ({
          filters: { ...state.filters, ...newFilters }
        })),

        clearFilters: () => set({ filters: {} }),

        getFilteredRecipes: () => {
          const { recipes, filters } = get()

          return recipes.filter(recipe => {
            // Category filter
            if (filters.category && recipe.category !== filters.category) {
              return false
            }

            // Cuisine filter
            if (filters.cuisine && recipe.cuisine !== filters.cuisine) {
              return false
            }

            // Difficulty filter
            if (filters.difficulty && recipe.difficulty !== filters.difficulty) {
              return false
            }

            // Max prep time filter
            if (filters.maxPrepTime && recipe.prepTime > filters.maxPrepTime) {
              return false
            }

            // Max cook time filter
            if (filters.maxCookTime && recipe.cookTime > filters.maxCookTime) {
              return false
            }

            // Tags filter (recipe must have at least one matching tag)
            if (filters.tags && filters.tags.length > 0) {
              const hasMatchingTag = filters.tags.some(tag =>
                recipe.tags.includes(tag)
              )
              if (!hasMatchingTag) return false
            }

            // Search query (search in title, description, and tags)
            if (filters.searchQuery) {
              const query = filters.searchQuery.toLowerCase()
              const searchableText = `${recipe.title} ${recipe.description} ${recipe.tags.join(' ')}`.toLowerCase()
              if (!searchableText.includes(query)) {
                return false
              }
            }

            return true
          })
        },

        // Search
        searchRecipes: (query) => {
          const { recipes } = get()
          const lowerQuery = query.toLowerCase()

          return recipes.filter(recipe => {
            const searchText = `${recipe.title} ${recipe.description} ${recipe.ingredients.map(i => i.name).join(' ')} ${recipe.tags.join(' ')}`.toLowerCase()
            return searchText.includes(lowerQuery)
          })
        },

        // Data Management
        loadRecipes: () => set({ recipes: mockRecipes, isLoading: false }),

        resetStore: () => set(initialState),
      }),
      {
        name: 'recipe-storage',
        // Don't persist activeRecipe (should reset on page load)
        partialize: (state) => ({
          recipes: state.recipes,
          favorites: Array.from(state.favorites), // Convert Set to Array for storage
          filters: state.filters,
        }),
        // Rehydrate favorites as Set
        onRehydrateStorage: () => (state) => {
          if (state && Array.isArray(state.favorites)) {
            state.favorites = new Set(state.favorites)
          }
        },
      }
    ),
    { name: 'RecipeStore' }
  )
)

/**
 * Selectors for optimized component rendering
 */
export const recipeSelectors = {
  recipes: (state: RecipeStore) => state.recipes,
  activeRecipe: (state: RecipeStore) => state.activeRecipe,
  favorites: (state: RecipeStore) => state.getFavorites(),
  filteredRecipes: (state: RecipeStore) => state.getFilteredRecipes(),
}
