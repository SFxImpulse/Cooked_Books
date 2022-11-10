import RecipeView from "./RecipeView";
import "./RecipeListItem.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faStar, faPlus, faCheck } from "@fortawesome/free-solid-svg-icons";
import FavouritesList from "./FavouritesList";

function RecipeListItem(props) {

  // console.log(props);

  return (
    <li selected={props.selected}>
      <section className="recipe-container">
        <img
          className="recipe-img"
          src={props.image}
          alt={props.name}
          onClick={() => {
            props.setRecipeName(props.name);
            props.setRecipe(true);
          }}
        />
        <div className="recipe-content-container">
        <h2 className="recipe-name text--bold">{props.name}</h2>
          <FontAwesomeIcon
            icon={faPlus}
            className="add-btn"
          />
          {!props.favourite && <FontAwesomeIcon
            icon={faStar}
            className="favourite-btn-false"
            onClick={() => {
              props.manageFavourites(props.id);
            }}
          />}
          {props.favourite && <FontAwesomeIcon
            icon={faStar}
            className="favourite-btn-true"
            onClick={() => {
              props.manageFavourites(props.id);
            }}
          />}
        </div>
      </section>
      {(props.recipe, props.selected) && <RecipeView
        key={props.id}
        id={props.id}
        name={props.name}
        ingredients={props.ingredients}
        description={props.description}
        instructions={props.instructions}
        closeRecipeView={props.setRecipe}
        value={props.value}
        selected={props.name === props.value}
        setRecipeName={props.setRecipeName}
        addToList={props.addToList}
        setFavourite={props.setFavourite}
      />}
    </li>
  )
}

export default RecipeListItem;