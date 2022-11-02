import Home from './components/Home';
import Navigation from "./components/Navigation";
import About from './components/About';
import RecipeList from "./components/RecipeList";
import GroceryList from './components/GroceryList';
import FavouritesList from './components/FavouritesList';

import useFetchedData from './hooks/useFetchedData';

function App() {

  const {
    state,
    setNav,
    setDisplay,
    setRecipe,
    setRecipeName,
    addToList,
    removeFromList,
  } = useFetchedData();

  return (
    <div>
      {!state.display && !state.nav && <Home
        display={state.display}
        setDisplay={setDisplay}
        nav={state.nav}
        setNav={setNav}
      />}
      {state.nav && <Navigation
        display={state.display}
        setDisplay={setDisplay}
        nav={state.nav}
        setNav={setNav}
        recipe={state.recipe}
        setRecipe={setRecipe}
      />}
      {state.display === 1 && <About />}
      {state.display === 2 && <RecipeList
        recipe={state.recipe}
        setRecipe={setRecipe}
        value={state.recipeName}
        setRecipeName={setRecipeName}
        recipies={state.recipies}
        ingredients={state.ingredients}
        addToList={addToList}
        // favourite={state.favourites}
        // setFavourite={setFavourites}
      />}
      {state.display === 3 && <GroceryList
        groceryList={state.groceryList}
        removeFromList={removeFromList}
      />}
      {state.display === 4 && <FavouritesList
        recipe={state.recipe}
        setRecipe={setRecipe}
        // favourite={state.favourites}
        // setFavourite={setFavourites}
      />}
    </div>
  );
}

export default App;