# Green Bites

Green Bites is a web application designed to explore and share delicious vegetarian recipes. It provides users with a collection of plant-based meals, interactive recipe cards, and an intuitive browsing experience.

🔗 [go to GreenBites](https://greenbites-recipebook.netlify.app/)

Enjoy cooking with Green Bites! 🌱🍲

## Features

- **Recipe Collection**: Browse a variety of vegetarian recipes with ingredients and instructions..
- **Search Functionality**: Easily find recipes based on keywords.
- **Favorites System**: Save your favorite recipes for quick access.
- **User-Friendly Interface**: Intuitive navigation and clean design.
- **Responsive Design**: Optimized for both desktop and mobile devices.

## Technologies Used:

1. **React.js**: For building the user interface.

2. **React Router**: Handles navigation across different views:

- _HomePage.jsx_: Displays a collection of recipes and an introduction to Green Bites.
- _RecipeResults.jsx_: Shows the search results for recipes based on entered search terms.
- _FavoriteRecipes.jsx_: Displays the user’s favorite recipes saved in local storage.
- _RecipeDetails.js_: Displays detailed information about a selected recipe, including ingredients and preparation steps.

3. **React Context API**: Centralized state management is handled with React Context, ensuring consistent data management across components and routes.

4. **Axios**: For making API requests to fetch recipe data.

5. **Tailwind CSS**: For modern and responsive styling.

## Getting Started

To run the project locally, follow these steps:

**1. Clone the repository:**

```javascript
git clone https://github.com/alepuliani/greenbites.git
```

**2. Install dependencies:**

```javascript
cd greenbites
npm install
```

**3. Run the Development Server:**

```javascript
npm run dev
```
