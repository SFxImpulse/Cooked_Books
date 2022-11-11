import { useState, useEffect } from "react";
import axios from "axios";

function useFetchedData() {

  const [state, setState] = useState({
    nav: false,
    display: 0,
    recipe: false,
    recipeName: "",
    recipes: [],
    favourites: [],
    ingredients: [],
    groceryList: [],
  });

  const setNav = (nav) => setState((prev) => ({ ...prev, nav }));
  const setDisplay = (display) => setState((prev) => ({ ...prev, display }));
  const setRecipe = (recipe) => setState((prev) => ({ ...prev, recipe }));
  const setRecipeName = (recipeName) => setState((prev) => ({ ...prev, recipeName }));

  useEffect(() => {
    Promise.all([
      axios.get("/api/recipes"),
      axios.get("/api/ingredients"),
      axios.get("/api/grocery_list"),
    ]).then((all) => {
      setState(prev => ({
        ...prev,
        recipes: all[0].data,
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
    
    let groceryList;

    if (ingredients.length === 1) {

      const ingredientsList = [{
        id: null,
        name: null
      }];

      groceryList = [{
        ...state.groceryList[0],
        ingredients: [ ...ingredientsList ]
      }];

    } else {

      const itemToRemove = ingredients.indexOf(ingredientObj);
      if (itemToRemove > -1) {
        ingredients.splice(itemToRemove, 1);
      };

      groceryList = [{
        ...state.groceryList[0],
        ingredients
      }];

    }
    return axios.delete(`/api/grocery_list/1`, { data: ingredientObj }).then(() => {
      setState({
        ...state,
        groceryList
      });
    });
  };

  const manageFavourites = (id) => {
    let favourite;
    if (!state.recipes[id - 1].favourite) {
      favourite = true;
      state.recipes[id - 1].favourite = favourite;
    } else {
      favourite = false;
      state.recipes[id - 1].favourite = favourite;
    }
    const favourites = state.recipes.filter(recipe => recipe.favourite);
    return axios.put(`/api/recipes/${id}`, { favourite }).then(() => {
      setState({
        ...state,
        favourites
      });
    });
  };

  // console.log(state);

  return { state, setNav, setDisplay, setRecipe, setRecipeName, addToList, removeFromList, manageFavourites };

};

export default useFetchedData;