import axios from "axios"

// const API_KEY = "d185cf2724fe4f9b91d0c5ad3cdaba1c"
const API_KEY = "90f61b0dd7234b4f92e857ee2a99297e"
const BASE_URL = "https://api.spoonacular.com"

// fetches vegetarian recipes from a specified API endpoint and returns the results.
export const fetchRecipes = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/recipes/complexSearch`, {
      params: {
        apiKey: API_KEY,
        diet: "vegetarian",
        number: 200
      }
    })
    console.log(response.data.results)
    return response.data.results
  } catch (error) {
    console.log(error)
  }
}

// fetches 10 random vegetarian recipes from a specified API endpoint.
export const fetchRandomRecipes = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/recipes/complexSearch`, {
      params: {
        apiKey: API_KEY,
        sort: "random",
        diet: "vegetarian",
        number: 10
      }
    })
    console.log(response.data.results)
    return response.data.results
  } catch (error) {
    console.log(error)
  }
}

//fetches recipe information using an API endpoint and logs the response data.
export const fetchRecipe = async (id) => {
  try {
    const response = await axios.get(`${BASE_URL}/recipes/${id}/information`, {
      params: {
        apiKey: API_KEY
      }
    })
    return response.data
  } catch (error) {
    console.error("Error fetching recipe:", error)
  }
}
