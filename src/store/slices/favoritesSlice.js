import { createSlice } from "@reduxjs/toolkit"

export const favoritesSlice = createSlice({
  name: "favorites",
  initialState: {
    favorites: JSON.parse(localStorage.getItem("favorites")) || []
  },
  reducers: {
    setFavorites: (state, action) => {
      state.favorites = action.payload
    },
    addFavorite: (state, action) => {
      state.favorites.push(action.payload),
        localStorage.setItem("favorites", JSON.stringify(state.favorites))
    },
    removeFavorite: (state, action) => {
      state.favorites = state.favorites.filter(
        (favorite) => favorite.id !== action.payload
      )
      localStorage.setItem("favorites", JSON.stringify(state.favorites))
    }
  }
})

export const { setFavorites, addFavorite, removeFavorite } =
  favoritesSlice.actions

export const favoritesReducer = favoritesSlice.reducer
