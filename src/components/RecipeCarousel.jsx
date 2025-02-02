import PropTypes from "prop-types"
import RecipeCard from "./RecipeCard"
import { useContext } from "react"
import { RecipesContext } from "../context"

const RecipeCarousel = ({ recipes }) => {
  const { loading } = useContext(RecipesContext)
  return (
    <div className="w-full">
      {" "}
      <div className="flex items-start overflow-x-auto w-full">
        {loading ? (
          <p className="text-center text-gray-500">Loading recipes...</p>
        ) : recipes.length > 0 ? (
          recipes.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))
        ) : (
          <p className="text-center text-gray-500">No recipes found.</p>
        )}
      </div>
    </div>
  )
}

RecipeCarousel.propTypes = {
  recipes: PropTypes.arrayOf(PropTypes.object).isRequired
}
export default RecipeCarousel
