import { useContext } from "react"
import { RecipesContext } from "../context"
import RecipeCard from "../components/RecipeCard"

const RecipesResults = () => {
  const { searchValue, recipes } = useContext(RecipesContext)

  // filtering the `recipes` array based on a search value provided by the user
  const filteredRecipes = recipes.filter((recipe) => {
    const correctSearchValue = searchValue.trim().toLowerCase()
    return recipe.title.toLowerCase().includes(correctSearchValue)
  })

  return (
    <div className="p-4 md:p-20 lg:px-36">
      <h1 className="font-bold text-xl uppercase mb-3 ">
        {" "}
        {searchValue[0].toUpperCase() +
          searchValue.slice(1, searchValue.lenght)}{" "}
        Recipes:
      </h1>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 py-8">
        {filteredRecipes.length > 0 ? (
          filteredRecipes.map((recipe) => (
            <div key={recipe.id} className="flex justify-center items-start">
              <RecipeCard recipe={recipe} />
            </div>
          ))
        ) : (
          <p>Sorry, recipe not found</p>
        )}
      </div>
    </div>
  )
}
export default RecipesResults
