import RecipeListItem from "./RecipeListItem";

import "./RecipeList.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

function RecipeList(props) {

  console.log(props);

  const recipes = props.recipes.map(recipe => {
    return (
      <RecipeListItem
        key={recipe.id}
        id={recipe.id}
        name={recipe.name}
        ingredients={recipe.ingredients}
        description={recipe.description}
        instructions={recipe.instructions}
        image={recipe.image}
        recipe={props.recipe}
        setRecipe={props.setRecipe}
        value={props.value}
        selected={recipe.name === props.value}
        setRecipeName={props.setRecipeName}
        addToList={props.addToList}
        favourite={recipe.favourite}
        favourites={props.favourites}
        manageFavourites={props.manageFavourites}
      />
    )
  })

  return (
    <div className="recipe-list-container">
      <section className="recipe-list-search">
        <input
          className="recipe-list-search-bar"
          placeholder="It's THYME for something new..."
          onFocus={(e) => {
            e.target.placeholder = "";
          }}
          onBlur={(e) => {
            e.target.placeholder = "Peas, lettuce help you..."
          }}
        />
        <FontAwesomeIcon
          icon={faMagnifyingGlass}
          className="recipe-list-search-icon"
        />
      </section>
      <h1 className="recipe-list-header text--bold">Recipe List</h1>
      <ul className="recipe-list">
        {recipes}
      </ul>
    </div>
  )
}

export default RecipeList;