import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faStar, faPlus, faCheck } from "@fortawesome/free-solid-svg-icons";
import RecipeView from "./RecipeView";
import "./RecipeListItem.scss";

function RecipeListItem(props) {

  const [recipe, setRecipe] = useState(false);
  const [favourite, setFavourite] = useState(false);

  return (
    <li>
      <section 
        className="recipe-container"
      >  
        <img className="recipe-img" src="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F43%2F2022%2F02%2F17%2F21014-Good-old-Fashioned-Pancakes-mfs_002.jpg" alt="Pancakes" onClick={() => {
          setRecipe(true);
        }}></img>
        <div className="recipe-content-container">
        <h2 className="recipe-name text--extra-bold">Pancakes</h2>
          <FontAwesomeIcon icon={faPlus} className="add-btn" />
          {!favourite && <FontAwesomeIcon icon={faStar} className="favourite-btn-false" onClick={() => {setFavourite(true)}} />}
          {favourite && <FontAwesomeIcon icon={faStar} className="favourite-btn-true" onClick={() => {setFavourite(false)}} />}
        </div>
      </section>
      {recipe && <RecipeView favourite={favourite} closeRecipeView={setRecipe} setFavourite={setFavourite} />}
    </li>
  )
}

export default RecipeListItem;