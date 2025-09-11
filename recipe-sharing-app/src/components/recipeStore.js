import { create } from 'zustand';

// const useRecipeStore = create((set) => ({
//   recipes: [
//     // Add some initial data for easier testing
//     { id: 1, title: 'Spaghetti Carbonara', description: 'A classic Italian pasta dish.' },
//     { id: 2, title: 'Chicken Curry', description: 'A flavorful and spicy chicken dish.' },
//   ],
//   addRecipe: (newRecipe) =>
//     set((state) => ({ recipes: [...state.recipes, newRecipe] })),

//   // Action to delete a recipe by its ID
//   deleteRecipe: (recipeId) =>
//     set((state) => ({
//       recipes: state.recipes.filter((recipe) => recipe.id !== recipeId),
//     })),

//   // Action to update a recipe
//   updateRecipe: (recipeId, updatedData) =>
//     set((state) => ({
//       recipes: state.recipes.map((recipe) =>
//         recipe.id === recipeId ? { ...recipe, ...updatedData } : recipe
//       ),
//     })),
// }));

// export default useRecipeStore;

// export const useRecipeStore = create((set) => ({
//   recipes: [],
//   addRecipe: (newRecipe) =>
//     set((state) => ({ recipes: [...state.recipes, newRecipe] })),
//   updateRecipe: (id, updatedRecipe) =>
//     set((state) => ({
//       recipes: state.recipes.map((r) =>
//         r.id === id ? { ...r, ...updatedRecipe } : r
//       ),
//     })),
//   deleteRecipe: (id) =>
//     set((state) => ({
//       recipes: state.recipes.filter((r) => r.id !== id),
//     })),

//   addRecipe: (newRecipe) =>
//     set((state) => ({ recipes: [...state.recipes, newRecipe] })),
//   setRecipes: (recipes) => set({ recipes }),

  


// }));

import { create } from 'zustand';

export const useRecipeStore = create((set) => ({
  // --- State ---
  recipes: [],
  searchTerm: '',
  filteredRecipes: [],
  recommendations: [],
  favorites: [],

  // --- Actions ---
  addRecipe: (newRecipe) =>
    set((state) => ({ recipes: [...state.recipes, newRecipe] })),

  setRecipes: (recipes) => set({ recipes }),

  updateRecipe: (id, updatedRecipe) =>
    set((state) => ({
      recipes: state.recipes.map((r) =>
        r.id === id ? { ...r, ...updatedRecipe } : r
      ),
    })),

  deleteRecipe: (id) =>
    set((state) => ({
      recipes: state.recipes.filter((r) => r.id !== id),
    })),

  // --- Search & Filter (Task 2) ---
  setSearchTerm: (term) => set({ searchTerm: term }),

  filterRecipes: () =>
    set((state) => ({
      filteredRecipes: state.recipes.filter((recipe) =>
        recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
      ),
    })),

  // Task 3
  addFavorite: (recipeId) => set(state => ({ favorites: [...state.favorites, recipeId] })),
  removeFavorite: (recipeId) => set(state => ({
    favorites: state.favorites.filter(id => id !== recipeId)
  })),
  
  generateRecommendations: () => set(state => {
    // Mock implementation based on favorites
    const recommended = state.recipes.filter(recipe =>
      state.favorites.includes(recipe.id) && Math.random() > 0.5
    );
    return { recommendations: recommended };
  }),

}));