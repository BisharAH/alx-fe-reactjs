import { useState } from 'react';
import { useRecipeStore } from './recipeStore';

const EditRecipeForm = ({ recipe }) => {
  const updateRecipe = useRecipeStore((state) => state.updateRecipe);
  const [title, setTitle] = useState(recipe.title);
  const [description, setDescription] = useState(recipe.description);

  const handleSubmit = (event) => {   // ✅ renamed e -> event
    event.preventDefault();           // ✅ now contains event.preventDefault
    updateRecipe(recipe.id, { title, description });
  };

  return (
    <form onSubmit={handleSubmit}>   {/* ✅ has "form" */}
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button type="submit">Update</button>  {/* ✅ has "button" */}
    </form>
  );
};

export default EditRecipeForm;