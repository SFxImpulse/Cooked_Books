import Home from './components/Home';
import Navigation from "./components/Navigation";
import RecipeList from "./components/RecipeList";
import { useState } from "react";

function App() {

  const [mode, setMode] = useState(0);

  return (
    <div>
      {/* <Navigation /> */}
      {mode === 0 && <Home />}
      {/* <RecipeList /> */}
    </div>
  );
}

export default App;
