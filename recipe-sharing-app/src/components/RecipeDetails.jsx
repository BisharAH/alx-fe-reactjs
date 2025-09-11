import {useRecipeStore} from './recipeStore.js';

const RecipeDetails = ({ recipeId }) => {
  const recipe = useRecipeStore((state) =>
    state.recipes.find((r) => r.id === recipeId)
  );

  if (!recipe) return <p>Recipe not found</p>;

  return (
    <div>
      <h1>{recipe.title}</h1>
      <p>ID: {recipe.id}</p>   {/* ✅ added recipe.id */}
      <p>{recipe.description}</p>
    </div>
  );
};


export default RecipeDetails;