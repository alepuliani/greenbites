import PropTypes from "prop-types"
import { useNavigate } from "react-router-dom"
import { PiCookingPotLight } from "react-icons/pi"

const RecipeCard = ({ recipe }) => {
  const { title, image, id } = recipe
  const navigate = useNavigate()

  // navigates to a specific recipe page based on the recipe ID.
  const handleNavigation = () => {
    if (recipe) {
      navigate(`/recipes/${id}`)
    }
  }

  return (
    <button
      onClick={handleNavigation}
      className="w-[120px] md:w-[170px] shrink-0 m-2 group cursor-pointer"
    >
      <div
        className={`relative rounded-md mb-2 ${
          !image && " bg-gray-200 flex items-center justify-center"
        }`}
      >
        {" "}
        {image ? (
          <img
            src={image}
            alt={title + "image"}
            className="h-[120px] md:h-[170px] object-cover rounded-md mb-2 "
          />
        ) : (
          <PiCookingPotLight className="w-full text-4xl" />
        )}
        <div className="absolute bg-black/40 top-0 bottom-0 right-0 left-0 rounded-md  justify-center items-center hidden group-hover:flex">
          <p className="text-zinc-200 font-bold pt-2">Details</p>
        </div>
      </div>

      <h1 className="font-semibold text-xs">{title}</h1>
    </button>
  )
}

RecipeCard.propTypes = {
  recipe: PropTypes.object.isRequired
}
export default RecipeCard
