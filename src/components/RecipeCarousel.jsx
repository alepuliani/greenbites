import PropTypes from "prop-types"
import RecipeCard from "./RecipeCard"
import { useContext } from "react"
import { RecipesContext } from "../context"
import { ClipLoader } from "react-spinners"

const RecipeCarousel = ({ recipes }) => {
  const { loading } = useContext(RecipesContext)
  return (
    <div className="w-full">
      <div>
        {loading ? (
          <div className="flex justify-center items-center">
            <ClipLoader className="my-10" color="#36d7b7" size={50} />
          </div>
        ) : recipes.length > 0 ? (
          <div className="flex items-start overflow-x-auto w-full">
            {recipes.map((recipe) => (
              <RecipeCard key={recipe.id} recipe={recipe} />
            ))}
          </div>
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
