import RecipeListItem from "./RecipeListItem";

import "./RecipeList.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

function RecipeList(props) {

  // console.log(props);

  const recipies = props.recipies.map(recipe => {
    return (
      <RecipeListItem
        id={recipe.recipe_id}
        name={recipe.recipe_name}
        ids={recipe.ingredients_id}
        ingredients_name={recipe.ingredients_name}
        description={recipe.description}
        instructions={recipe.instructions}
        image={recipe.recipe_image}
        recipe={props.recipe}
        setRecipe={props.setRecipe}
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
        {recipies}
      </ul>
    </div>
  )
}

export default RecipeList;