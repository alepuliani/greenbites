import logo from "../assets/app-logo.png"
import RecipeCarousel from "../components/RecipeCarousel"
import { useContext } from "react"
import { RecipesContext } from "../context"
import { Helmet } from "react-helmet"

const Home = () => {
  const { randomRecipes } = useContext(RecipesContext)

  return (
    <div className="flex flex-col h-[calc(100vh-80px)]">
      <Helmet>
        <title>Green Bites | Discover Delicious Vegetarian Recipes</title>
        <meta
          name="description"
          content="Explore a variety of healthy and tasty vegetarian recipes at Green Bites. Find your next meal inspiration!"
        />
      </Helmet>
      <div className="flex flex-col items-center justify-center flex-grow text-center pt-[70px] pb-[90px] px-8 md:px-28 lg:px-56">
        <img src={logo} alt="logo" className="w-[240px]" />
        <h2 className="capitalize text-2xl">
          Where Every Bite Makes a Difference
        </h2>
        <p className="text-lg">
          Explore a world of flavorful vegetarian recipes with Green Bites. Find
          easy, healthy, and plant-based meals for every occasion.
        </p>
      </div>

      <div className="mt-auto">
        <h2 className="text-center uppercase font-bold mb-4">get inspired</h2>
        <RecipeCarousel recipes={randomRecipes} />
      </div>
    </div>
  )
}
export default Home
