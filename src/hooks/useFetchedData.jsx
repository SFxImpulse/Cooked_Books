import { useState, useEffect } from "react";
import axios from "axios";

function useFetchedData() {

  const [state, setState] = useState({
    nav: false,
    mode: 0,
    recipe: false,
    recipeName: "",
    recipies: [],
    favourites: [],
    ingredients: [],
    groceryList: [],
  });

  const setNav = (nav) => setState((prev) => ({ ...prev, nav }));
  const setMode = (mode) => setState((prev) => ({ ...prev, mode }));
  const setRecipe = (recipe) => setState((prev) => ({ ...prev, recipe }));
  const setRecipeName = (recipeName) => setState((prev) => ({ ...prev, recipeName }));
  const setGroceryList = (groceryList) => setState((prev) => ({ ...prev, groceryList}));
  // const setFavourites = (favourites) => setState((prev) => ({ ...prev, favourites }));

  useEffect(() => {
    Promise.all([
      axios.get("/api/recipies"),
      axios.get("/api/ingredients"),
      axios.get("/api/grocery_list"),
    ]).then((all) => {
      setState(prev => ({
        ...prev,
        recipies: all[0].data,
        ingredients: all[1].data,
        groceryList: all[2].data,
      }));
    });
  }, []);

  // console.log(state);

  return { state, setNav, setMode, setRecipe, setRecipeName, setGroceryList };

};

export default useFetchedData;