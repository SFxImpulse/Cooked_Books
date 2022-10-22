import RecipeView from "./RecipeView";
import "./RecipeListItem.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faStar, faPlus, faCheck } from "@fortawesome/free-solid-svg-icons";

function RecipeListItem(props) {

  console.log(props);

  return (
    <li>
      <section className="recipe-container">
        <img
          className="recipe-img"
          src={props.image}
          alt={props.name}
          onClick={() => {
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
              props.setFavourite(true);
            }}
          />}
          {props.favourite && <FontAwesomeIcon icon={faStar} className="favourite-btn-true" onClick={() => {props.setFavourite(false)}} />}
        </div>
      </section>
      {props.recipe && <RecipeView
        id={props.id}
        name={props.name}
        ids={props.ids}
        ingredients={props.ingredients_name}
        description={props.description}
        instructions={props.instructions}
        closeRecipeView={props.setRecipe}
        // favourite={props.favourite}
        // setFavourite={props.setFavourite}
      />}
    </li>
  )
}

export default RecipeListItem;