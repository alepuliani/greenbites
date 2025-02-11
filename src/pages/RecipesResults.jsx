import { useContext } from "react"
import { RecipesContext } from "../context"
import RecipeCard from "../components/RecipeCard"
import { ClipLoader } from "react-spinners"
import { Helmet } from "react-helmet"

const RecipesResults = () => {
  const { searchValue, recipes, loading } = useContext(RecipesContext)

  // filtering the `recipes` array based on a search value provided by the user
  const filteredRecipes = recipes.filter((recipe) => {
    const correctSearchValue = searchValue.trim().toLowerCase()
    return recipe.title.toLowerCase().includes(correctSearchValue)
  })

  return (
    <div className="p-4 md:p-20 max-w-[1200px] mx-auto">
      <Helmet>
        <title>Recipes for {searchValue} | Green Bites</title>
        <meta
          name="description"
          content={`Browse through a variety of vegetarian recipes for "${searchValue}" at Green Bites.`}
        />
      </Helmet>
      <h1 className="font-bold text-xl uppercase mb-3 text-center">
        {searchValue} Recipes:
      </h1>
      {/* Loader */}
      {loading ? (
        <div className="flex justify-center items-center h-80">
          <ClipLoader color="#36d7b7" size={50} />
        </div>
      ) : filteredRecipes.length > 0 ? (
        // Griglia delle ricette
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 py-8">
          {filteredRecipes.map((recipe) => (
            <div key={recipe.id} className="flex justify-center items-start">
              <RecipeCard recipe={recipe} />
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500 text-lg py-10">
          Sorry, recipe not found
        </p>
      )}
    </div>
  )
}
export default RecipesResults
