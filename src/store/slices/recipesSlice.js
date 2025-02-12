import { createSlice } from "@reduxjs/toolkit"
import { fetchRecipes, fetchRandomRecipes } from "../../api/client"

export const recipesSlice = createSlice({
  name: "recipes",
  initialState: {
    recipes: [],
    randomRecipes: [],
    searchValue: "",
    loading: false
  },
  // sono funzioni che ricevono lo stato attuale e un'azione, e restituiscono un nuovo stato. Gestiscono come lo stato cambia in risposta alle azioni inviate.
  reducers: {
    setRecipes: (state, action) => {
      state.recipes = action.payload
    },
    setRandomRecipes: (state, action) => {
      state.randomRecipes = action.payload
    },
    setSearchValue: (state, action) => {
      state.searchValue = action.payload
    },
    setLoading: (state, action) => {
      state.loading = action.payload
    }
  }
})

// 🔴 Redux Toolkit genera automaticamente degli action creators (funzione che restituisce un'azione, che contiene un tipo e un payload)
export const { setRecipes, setRandomRecipes, setSearchValue, setLoading } =
  recipesSlice.actions

// ⭐ recipesSlice.reducer è la funzione di riduzione principale => A seconda del tipo dell'azione (type), recipesSlice.reducer delega l'elaborazione al reducer corrispondente definito in reducers (per esempio setRecipes, setLoading, ecc.) e quindi aggiorna lo stato.
export const recipesReducer = recipesSlice.reducer

export const getRecipes = () => async (dispatch) => {
  try {
    dispatch(setLoading(true))
    const data = await fetchRecipes()
    dispatch(setRecipes(data))
  } catch (error) {
    console.error(error)
  } finally {
    dispatch(setLoading(false))
  }
}

export const getRandomRecipes = () => async (dispatch) => {
  try {
    dispatch(setLoading(true))
    const data = await fetchRandomRecipes()
    dispatch(setRandomRecipes(data))
  } catch (error) {
    console.error(error)
  } finally {
    dispatch(setLoading(false))
  }
}
