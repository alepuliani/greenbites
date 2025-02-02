import { createContext, useState, useEffect } from "react"
import PropTypes from "prop-types"
import { fetchRandomRecipes, fetchRecipes } from "./api/client"

const RecipesContext = createContext()

const RecipesProvider = ({ children }) => {
  const [recipes, setRecipes] = useState([])
  const [randomRecipes, setRandomRecipes] = useState([])
  const [searchValue, setSearchValue] = useState("")
  const [favorites, setFavorites] = useState([])
  const [menuOpen, setMenuOpen] = useState(false)
  const [loading, setLoading] = useState(false)

  // GET ALL RECIPES
  useEffect(() => {
    const getRecipes = async () => {
      try {
        setLoading(true)
        const data = await fetchRecipes()
        setRecipes(data)
      } catch (error) {
        console.error(error)
      } finally {
        setLoading(false)
      }
    }
    getRecipes()
  }, [])

  // GET ONE RECIPE
  useEffect(() => {
    const getRandomRecipes = async () => {
      try {
        setLoading(true)
        const data = await fetchRandomRecipes()
        console.log(data)
        setRandomRecipes(data)
      } catch (error) {
        console.error(error)
      } finally {
        setLoading(false)
      }
    }
    getRandomRecipes()
  }, [])

  return (
    <RecipesContext.Provider
      value={{
        recipes,
        randomRecipes,
        searchValue,
        setSearchValue,
        favorites,
        setFavorites,
        menuOpen,
        setMenuOpen,
        loading
      }}
    >
      {children}
    </RecipesContext.Provider>
  )
}

RecipesProvider.propTypes = {
  children: PropTypes.node.isRequired
}

export { RecipesContext, RecipesProvider }
