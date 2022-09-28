import RecipeView from "./RecipeView";
import "./RecipeListItem.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faStar, faPlus, faCheck } from "@fortawesome/free-solid-svg-icons";

function RecipeListItem(props) {

  return (
    <li>
      <section className="recipe-container">
        <img
          className="recipe-img"
          src="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F43%2F2022%2F02%2F17%2F21014-Good-old-Fashioned-Pancakes-mfs_002.jpg"
          alt="Pancakes"
          onClick={() => {
            props.setRecipe(true);
          }}
        />
        <div className="recipe-content-container">
        <h2 className="recipe-name text--bold">Pancakes</h2>
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
        closeRecipeView={props.setRecipe}
        favourite={props.favourite}
        setFavourite={props.setFavourite}
      />}
    </li>
  )
}

export default RecipeListItem;