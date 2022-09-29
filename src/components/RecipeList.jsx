import RecipeListItem from "./RecipeListItem";

import "./RecipeList.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

function RecipeList(props) {

  // const recipies = props.recipies.map(recipe => {

  // })

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
        <RecipeListItem
          recipe={props.recipe}
          setRecipe={props.setRecipe}
          favourite={props.favourite}
          setFavourite={props.setFavourite}
        />
      </ul>
    </div>
  )
}

export default RecipeList;