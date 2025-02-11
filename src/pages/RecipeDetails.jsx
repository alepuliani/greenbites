import { useParams } from "react-router-dom"
import { FaRegHeart } from "react-icons/fa"
import { FaHeart } from "react-icons/fa6"
import { useState, useEffect } from "react"
import { fetchRecipe } from "../api/client"
import { useContext } from "react"
import { RecipesContext } from "../context"
import { ClipLoader } from "react-spinners"
import { Helmet } from "react-helmet"

const RecipeDetails = () => {
  const [recipe, setRecipe] = useState({})
  const [favorite, setFavorite] = useState(false)

  const { id } = useParams()
  const { favorites, setFavorites, loading } = useContext(RecipesContext)

  const recipeInfoStyle =
    "capitalize rounded-full bg-customGreen text-white px-2 py-1 mx-1 text-xs lg:text-lg"

  // Converts recipe instructions into a JSX list
  const parseInstructionsToList = (instructions) => {
    if (!instructions || !instructions.includes("<")) return instructions
    const parser = new DOMParser()
    const doc = parser.parseFromString(instructions, "text/html")
    const elements = Array.from(doc.querySelectorAll("li, p")).map(
      (li, index) => <li key={index}>{li.textContent}</li>
    )
    return <ol className="list-decimal px-5 pb-5">{elements}</ol>
  }

  // Adds or removes the recipe from favorites
  const toggleFavorite = () => {
    if (!favorite) {
      setFavorites([...favorites, recipe])
      setFavorite(true)
    } else {
      setFavorites(favorites.filter((favorite) => favorite.id !== recipe.id))
      setFavorite(false)
    }
  }

  // Fetches the recipe details when the component loads or when the ID changes
  useEffect(() => {
    const getRecipe = async () => {
      const data = await fetchRecipe(id)
      setRecipe(data)
    }
    getRecipe()
  }, [id])

  // Updates local storage whenever the favorites list changes
  useEffect(() => {
    localStorage.setItem("recipes", JSON.stringify(favorites))
  }, [favorites])

  // Checks if the recipe is in the favorites list
  useEffect(() => {
    const checkFavorite = () => {
      if (favorites.find((favorite) => favorite.id === recipe.id)) {
        setFavorite(true)
      }
    }
    checkFavorite()
  }, [recipe, favorites])

  return (
    <div className="mt-5 m-4 md:px-28 lg:px-72 lg:text-lg">
      <Helmet>
        <title>
          {recipe
            ? `${recipe.title} - Green Bites`
            : "Loading... | Green Bites"}
        </title>
        <meta
          name="description"
          content={
            recipe
              ? `${recipe.title} - A delicious vegetarian recipe from Green Bites.`
              : "Loading recipe details..."
          }
        />
      </Helmet>
      <div>
        {loading ? (
          <div>
            {" "}
            <div className="flex justify-center items-center h-80">
              <ClipLoader color="#36d7b7" size={50} />
            </div>
          </div>
        ) : (
          <div>
            {recipe ? (
              <div>
                <div className="flex flex-col justify-center items-center">
                  {" "}
                  {/* RECIPE TITLE */}
                  <h1 className="font-bold text-3xl px-7 mb-5 text-center lg:text-5xl">
                    {recipe.title}
                  </h1>
                  {/* RECIPE IMAGE */}
                  <div className="relative w-fit">
                    {" "}
                    <img
                      src={recipe.image}
                      alt="recipe foto"
                      className="my-4 rounded-xl "
                    />
                    <button
                      onClick={toggleFavorite}
                      className="absolute right-5 bottom-5"
                    >
                      {favorite ? (
                        <FaHeart className=" text-customSand text-3xl" />
                      ) : (
                        <FaRegHeart className=" text-customSand text-3xl" />
                      )}
                    </button>
                  </div>
                  {/* RECIPE INFORMATIONS  */}
                  <div className="flex justify-center mt-6">
                    {recipe.dishTypes && (
                      <div className={recipeInfoStyle}>
                        {" "}
                        {recipe.dishTypes[0]}
                      </div>
                    )}
                    <div>
                      {" "}
                      {recipe.readyInMinutes > 60 ? (
                        <p className={recipeInfoStyle}>
                          ready in{" "}
                          {parseFloat((recipe.readyInMinutes / 60).toFixed(1))}{" "}
                          hours
                        </p>
                      ) : (
                        <p className={recipeInfoStyle}>
                          ready in {recipe.readyInMinutes} min
                        </p>
                      )}{" "}
                    </div>
                    <div className={recipeInfoStyle}>
                      for {recipe.servings}{" "}
                      {recipe.servings > 1 ? "people" : "person"}
                    </div>
                  </div>
                </div>
                {/* RECIPE INGREDIENTS  */}
                <div className="px-4 py-10">
                  <h2>ingredients</h2>
                  <ul>
                    {recipe.extendedIngredients
                      ? recipe.extendedIngredients.map((ingredient) => {
                          return (
                            <li key={ingredient.id}>
                              <strong>
                                {ingredient.amount % 1 === 0
                                  ? ingredient.amount.toFixed(0)
                                  : ingredient.amount.toFixed(1)}
                              </strong>{" "}
                              {ingredient.unit} of{" "}
                              <strong className="capitalize">
                                {ingredient.name}
                              </strong>
                            </li>
                          )
                        })
                      : "Sorry no ingredients"}
                  </ul>
                </div>
                {/* RECIPE INSTRUCTIONS */}
                <div>
                  {" "}
                  <h2>instructions</h2>
                  {parseInstructionsToList(recipe.instructions)}
                </div>
              </div>
            ) : (
              "Sorry, recipe not found"
            )}
          </div>
        )}
      </div>
    </div>
  )
}
export default RecipeDetails
