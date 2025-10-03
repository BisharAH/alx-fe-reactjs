import React, { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"

function RecipeDetail() {
  const { id } = useParams()
  const [recipe, setRecipe] = useState(null)

  // Load specific recipe by ID
  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => {
        const found = data.find((r) => r.id === parseInt(id))
        setRecipe(found)
      })
      .catch((err) => console.error("Error loading recipe:", err))
  }, [id])

  if (!recipe) {
    return <p className="text-center text-gray-600 mt-10">Loading recipe...</p>
  }

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-3xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-64 object-cover"
        />
        <div className="p-6">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            {recipe.title}
          </h1>
          <p className="text-gray-600 mb-6">{recipe.summary}</p>

          {/* Ingredients Section */}
          <h2 className="text-xl font-semibold text-blue-600 mb-2">Ingredients</h2>
          <ul className="list-disc list-inside mb-6 space-y-1">
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index} className="text-gray-700">
                {ingredient}
              </li>
            ))}
          </ul>

          {/* Instructions Section */}
          <h2 className="text-xl font-semibold text-blue-600 mb-2">Instructions</h2>
          <ol className="list-decimal list-inside space-y-2 text-gray-700">
            {recipe.instructions.map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ol>

          {/* Back Button */}
          <Link
            to="/"
            className="mt-6 inline-block text-blue-500 hover:underline font-medium"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  )
}

export default RecipeDetail


