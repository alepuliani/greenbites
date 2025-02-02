import { useContext, useEffect } from "react"
import { RecipesContext } from "../context"
import RecipeCard from "../components/RecipeCard"

const FavoriteRecipes = () => {
  const { favorites, setFavorites } = useContext(RecipesContext)

  const getLocalStorage = () => {
    const data = JSON.parse(localStorage.getItem("recipes"))
    if (data) {
      setFavorites(data)
    }
  }
  useEffect(() => {
    getLocalStorage()
  }, [])

  return (
    <div className="lg:px-36">
      <h1 className="font-bold text-3xl px-7 capitalize my-7">
        favorite recipes{" "}
      </h1>
      <div
        className="grid grid-cols-2 
       md:grid-cols-3 lg:grid-cols-4 gap-3"
      >
        {favorites.length > 0 ? (
          favorites.map((recipe) => {
            return (
              <div key={recipe.id} className="flex items-center justify-center">
                {" "}
                <RecipeCard recipe={recipe} />
              </div>
            )
          })
        ) : (
          <p className="text-center">No favorite recipes yet</p>
        )}
      </div>
    </div>
  )
}
export default FavoriteRecipes
