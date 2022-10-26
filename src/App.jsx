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
    setMode,
    setRecipe,
    setRecipeName,
  } = useFetchedData();

  // console.log(state);

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
        value={state.recipeName}
        setRecipeName={setRecipeName}
        recipies={state.recipies}
        ingredients={state.ingredients}
        // favourite={state.favourites}
        // setFavourite={setFavourites}
      />}
      {state.mode === 3 && <GroceryList 
        groceryList={state.groceryList}
      />}
      {state.mode === 4 && <FavouritesList
        recipe={state.recipe}
        setRecipe={setRecipe}
        // favourite={state.favourites}
        // setFavourite={setFavourites}
      />}
    </div>
  );
}

export default App;