import { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import useRecipeStore from '../store/recipeStore';
import EditRecipeForm from '../components/EditRecipeForm';

const RecipePage = () => {
  const { recipeId } = useParams(); // Get recipeId from URL
  const navigate = useNavigate();
  const { recipes, deleteRecipe } = useRecipeStore();
  
  const recipe = recipes.find((r) => r.id === parseInt(recipeId));
  const [isEditing, setIsEditing] = useState(false);

  const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete this recipe?')) {
      deleteRecipe(recipe.id);
      navigate('/'); // Redirect to home page after deletion
    }
  };

  if (!recipe) {
    return (
      <div>
        <h2>Recipe not found!</h2>
        <Link to="/">Go back to the recipe list</Link>
      </div>
    );
  }

  return (
    <div className="recipe-details">
      {isEditing ? (
        <EditRecipeForm recipe={recipe} onFinishedEditing={() => setIsEditing(false)} />
      ) : (
        <>
          <h1>{recipe.title}</h1>
          <p>{recipe.description}</p>
          <div className="controls">
            <button onClick={() => setIsEditing(true)}>Edit</button>
            <button className="delete-btn" onClick={handleDelete}>Delete</button>
          </div>
        </>
      )}
       <Link to="/">← Back to Recipes</Link>
    </div>
  );
};

export default RecipePage;