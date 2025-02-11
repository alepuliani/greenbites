import { useContext, useEffect } from "react"
import { RecipesContext } from "../context"
import RecipeCard from "../components/RecipeCard"
import { Helmet } from "react-helmet"

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
      <Helmet>
        <title>Your Favorite Recipes | Green Bites</title>
        <meta
          name="description"
          content="Your collection of favorite vegetarian recipes at Green Bites. Keep track of the recipes you love!"
        />
      </Helmet>
      <h1 className="font-bold text-3xl px-7 capitalize my-7 text-center">
        favorite recipes{" "}
      </h1>
      {favorites.length > 0 ? (
        <div
          className="grid grid-cols-2 
       md:grid-cols-3 lg:grid-cols-4 gap-3"
        >
          {favorites.map((recipe) => {
            return (
              <div key={recipe.id} className="flex justify-center items-start">
                <RecipeCard recipe={recipe} />
              </div>
            )
          })}{" "}
        </div>
      ) : (
        <p className="text-center">No favorite recipes yet!</p>
      )}
    </div>
  )
}
export default FavoriteRecipes
