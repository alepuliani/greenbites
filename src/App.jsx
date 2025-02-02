import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import AppHeader from "./components/AppHeader"
import RecipesResults from "./pages/RecipesResults"
import RecipeDetails from "./pages/RecipeDetails"
import FavoriteRecipes from "./pages/FavoriteRecipes"

function App() {
  return (
    <>
      <Router>
        <AppHeader />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recipes" element={<RecipesResults />} />
          <Route path="/recipes/:id" element={<RecipeDetails />} />
          <Route path="/favorites" element={<FavoriteRecipes />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
