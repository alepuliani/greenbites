import logo from "../assets/app-logo.png"
import RecipeCarousel from "../components/RecipeCarousel"
import { useContext } from "react"
import { RecipesContext } from "../context"

const Home = () => {
  const { randomRecipes } = useContext(RecipesContext)

  return (
    <div className="flex flex-col h-[calc(100vh-80px)]">
      {/* Primo div che occupa tutto lo spazio disponibile */}
      <div className="flex flex-col items-center justify-center flex-grow text-center pt-[70px] pb-[90px] px-8 md:px-28 lg:px-56">
        <img src={logo} alt="logo" className="w-[240px]" />
        <h2 className="capitalize text-2xl">
          Where Every Bite Makes a Difference
        </h2>
        <p className="text-lg">
          Discover the power of plant-based living with GreenBites, a platform
          dedicated to promoting a healthier, more sustainable, and ethical way
          of eating.
        </p>
      </div>

      {/* Carosello fissato al fondo */}
      <div className="mt-auto">
        <h2 className="text-center uppercase font-bold mb-4">get inspired</h2>
        <RecipeCarousel recipes={randomRecipes} />
      </div>
    </div>
  )
}
export default Home
