import React, { useState } from "react"

function AddRecipeForm() {
  const [title, setTitle] = useState("")
  const [ingredients, setIngredients] = useState("")
  const [instructions, setInstructions] = useState("")
  const [errors, setErrors] = useState({})

  const handleSubmit = (e) => {
    e.preventDefault()

    // Simple validation
    const newErrors = {}
    if (!title.trim()) newErrors.title = "Title is required"
    if (!ingredients.trim()) newErrors.ingredients = "Ingredients are required"
    if (!instructions.trim()) newErrors.instructions = "Instructions are required"

    setErrors(newErrors)

    if (Object.keys(newErrors).length === 0) {
      const recipe = {
        title,
        ingredients: ingredients.split("\n"),
        instructions: instructions.split("\n")
      }
      console.log("Recipe submitted:", recipe)

      // Reset form
      setTitle("")
      setIngredients("")
      setInstructions("")
      alert("Recipe submitted successfully!")
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-center text-blue-600 mb-6">
          Add New Recipe
        </h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Title */}
          <div>
            <label className="block font-medium mb-1">Recipe Title</label>
            <input
              type="text"
              className={`w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 ${
                errors.title ? "border-red-500" : "border-gray-300"
              }`}
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title}</p>}
          </div>

          {/* Ingredients */}
          <div>
            <label className="block font-medium mb-1">Ingredients (one per line)</label>
            <textarea
              className={`w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 ${
                errors.ingredients ? "border-red-500" : "border-gray-300"
              }`}
              rows={5}
              value={ingredients}
              onChange={(e) => setIngredients(e.target.value)}
            ></textarea>
            {errors.ingredients && <p className="text-red-500 text-sm mt-1">{errors.ingredients}</p>}
          </div>

          {/* Instructions */}
          <div>
            <label className="block font-medium mb-1">Instructions (one step per line)</label>
            <textarea
              className={`w-full border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400 ${
                errors.instructions ? "border-red-500" : "border-gray-300"
              }`}
              rows={5}
              value={instructions}
              onChange={(e) => setInstructions(e.target.value)}
            ></textarea>
            {errors.instructions && <p className="text-red-500 text-sm mt-1">{errors.instructions}</p>}
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white font-semibold py-2 rounded hover:bg-blue-600 transition"
          >
            Submit Recipe
          </button>
        </form>
      </div>
    </div>
  )
}

export default AddRecipeForm