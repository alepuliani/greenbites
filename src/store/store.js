import { configureStore } from "@reduxjs/toolkit"
import { recipesReducer } from "./slices/recipesSlice"
import { favoritesReducer } from "./slices/favoritesSlice"

export default configureStore({
  reducer: {
    recipes: recipesReducer,
    favorites: favoritesReducer
  }
})
