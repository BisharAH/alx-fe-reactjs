import React, { useState, useEffect } from "react"

function HomePage() {
  const [recipes, setRecipes] = useState([])

  // Load recipes from data.json
  useEffect(() => {
    fetch("./data.json") // relative to public or src depending on setup
      .then((res) => res.json())
      .then((data) => setRecipes(data))
      .catch((err) => console.error("Error loading recipes:", err))
  }, [])

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <h1 className="text-4xl font-bold text-center text-blue-600 mb-8">
        Recipe Sharing Platform
      </h1>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {recipes.map((recipe) => (
          <div
            key={recipe.id}
            className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow transform hover:scale-105 overflow-hidden"
          >
            <img
              src={recipe.image}
              alt={recipe.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold text-gray-800">
                {recipe.title}
              </h2>
              <p className="text-gray-600 mt-2 text-sm">{recipe.summary}</p>
              <a
                href={`/recipes/${recipe.id}`}
                className="inline-block mt-4 text-blue-500 font-medium hover:underline"
              >
                View Recipe →
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default HomePage