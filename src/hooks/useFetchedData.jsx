import { useState, useEffect } from "react";
import axios from "axios";

function useFetchedData() {

  const [state, setState] = useState({
    nav: false,
    display: 0,
    recipe: false,
    recipeName: "",
    recipies: [],
    favourites: [],
    ingredients: [],
    groceryList: [],
  });

  const setNav = (nav) => setState((prev) => ({ ...prev, nav }));
  const setDisplay = (display) => setState((prev) => ({ ...prev, display }));
  const setRecipe = (recipe) => setState((prev) => ({ ...prev, recipe }));
  const setRecipeName = (recipeName) => setState((prev) => ({ ...prev, recipeName }));
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

  // Function to add an ingredient to the grocery list.
  const addToList = (ingredients) => {

    let ingredientsList;

    if (!state.groceryList[0].ingredients[0].id) {
      ingredientsList = [
        ingredients
      ];
    } else {
      ingredientsList = [
        ...state.groceryList[0].ingredients,
        ingredients
      ];
    }
    
    const groceryList = [{
      ...state.groceryList[0],
      ingredients: [ ...ingredientsList ]
    }];
    return axios.put(`/api/grocery_list/1`, { ingredients }).then(() => {
      setState({
        ...state,
        groceryList
      });
    });
  };

  const removeFromList = (ingredientObj, ingredients) => {
    const itemToRemove = ingredients.indexOf(ingredientObj);
    if (itemToRemove > -1) {
      ingredients.splice(itemToRemove, 1);
    }
    const groceryList = [{
      ...state.groceryList,
      ingredients
    }];
    return axios.delete(`/api/grocery_list/1`).then(() => {
      setState({
        ...state,
        groceryList
      })
    })
  }

  // console.log(state);

  return { state, setNav, setDisplay, setRecipe, setRecipeName, addToList, removeFromList };

};

export default useFetchedData;