import Home from './components/Home';
import Navigation from "./components/Navigation";
import About from './components/About';
import RecipeList from "./components/RecipeList";
import GroceryList from './components/GroceryList';
import FavouritesList from './components/FavouritesList';
import { useState, useEffect } from "react";
import axios from "axios";

function App() {

  const [state, setState] = useState({
    nav: false,
    mode: 0,
    recipe: false,
    recipies: [],
    favourites: [],
    ingredients: [],
    groceryList: [],
  });

  const setNav = (nav) => setState((prev) => ({ ...prev, nav }));
  const setMode = (mode) => setState((prev) => ({ ...prev, mode }));
  const setRecipe = (recipe) => setState((prev) => ({ ...prev, recipe }));


  useEffect(() => {
    Promise.all([
      axios.get("/api/recipies"),
      axios.get("/api/ingredients"),
      axios.get("/api/grocery_list"),
    ]).then((all) => {
      console.log(all);
      setState((prev) => ({
        ...prev,
        recipies: all[0].data,
        ingredients: all[1].data,
        groceryList: all[2].data,
      }));
      console.log(state);
    });
  }, []);

  return (
    <div>
      {!state.mode && !state.nav && <Home
        mode={state.mode}
        setMode={setMode}
        nav={state.nav}
        setNav={setNav}
      />}
      {state.nav && <Navigation
        mode={state.mode}
        setMode={setMode}
        nav={state.nav}
        setNav={setNav}
        recipe={state.recipe}
        setRecipe={setRecipe}
      />}
      {state.mode === 1 && <About />}
      {state.mode === 2 && <RecipeList
        recipe={state.recipe}
        setRecipe={setRecipe}
        recipies={state.recipies}
      />}
      {state.mode === 3 && <GroceryList />}
      {state.mode === 4 && <FavouritesList
        recipe={state.recipe}
        setRecipe={setRecipe}
      />}
    </div>
  );
}

export default App;