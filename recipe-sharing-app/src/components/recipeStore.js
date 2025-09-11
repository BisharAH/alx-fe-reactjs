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

export const useRecipeStore = create((set) => ({
  recipes: [],
  addRecipe: (newRecipe) =>
    set((state) => ({ recipes: [...state.recipes, newRecipe] })),
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
}));