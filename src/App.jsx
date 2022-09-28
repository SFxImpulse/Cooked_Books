import Home from './components/Home';
import Navigation from "./components/Navigation";
import RecipeList from "./components/RecipeList";
import { useState } from "react";

function App() {

  const [mode, setMode] = useState(0);
  const [nav, setNav] = useState(false);
  const [recipe, setRecipe] = useState(false);
  const [favourite, setFavourite] = useState(false);

  return (
    <div>
      {!mode && !nav && <Home
        mode={mode}
        setMode={setMode}
        nav={nav}
        setNav={setNav}
      />}
      {nav && <Navigation
        mode={mode}
        setMode={setMode}
        nav={nav}
        setNav={setNav}
      />}
      {mode === 1 && <RecipeList
        recipe={recipe}
        setRecipe={setRecipe}
        favourite={favourite}
        setFavourite={setFavourite}
      />}
    </div>
  );
}

export default App;