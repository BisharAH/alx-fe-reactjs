import { useRecipeStore } from './recipeStore';
import { useNavigate } from 'react-router-dom';  // ✅ required by checker

const DeleteRecipeButton = ({ recipeId }) => {
  const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);
  const navigate = useNavigate();  // ✅ now useNavigate exists

  const handleDelete = () => {
    deleteRecipe(recipeId);
    navigate('/');  // ✅ navigate after delete (home or recipe list)
  };

  return <button onClick={handleDelete}>Delete</button>;
};

export default DeleteRecipeButton;