import './RecipeView.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlus, faCheck, faXmark } from "@fortawesome/free-solid-svg-icons";

function RecipeView(props) {

  // console.log(props);

  const ingredients = props.ingredients.map(ingredient => {
    return (
      <li key={ingredient.id} id={ingredient.id}>
        <button onClick={() => {
          props.addToList(1, ingredient);
        }}><FontAwesomeIcon icon={faPlus} className="add-btn"/></button>{ingredient.name}
      </li>
    )
  });

  return (
    <div className="recipe-view-background">
      <div className="recipe-view-container">
        <div className="closeBtn">
          <button onClick={() => {
            props.closeRecipeView(false)
            props.setRecipeName("");
          }}>
            <FontAwesomeIcon icon={faXmark} />
          </button>
        </div>
        <div className="recipe-view-title">
          <h1>{props.name}</h1>
        </div>
        <div className='recipe-view-content'>
          <div className="recipe-view-info">
            <h2>Description</h2>
            <p>{props.description}</p>
            <h2>Instructions</h2>
            <p>{props.instructions}</p>
          </div>
          <div className="recipe-view-ingredients">
            <h2>Ingredients</h2>
            <ul>
              {ingredients}
            </ul>
          </div>
        </div>
        <div className="recipe-view-footer">
          <button id="confirm-btn">Save to Grocery List</button>
          {!props.favourite && <button id="save-btn" onClick={() => props.setFavourite(true)}>Favourite this Recipe</button>}
          {props.favourite && <button id="unsave-btn" onClick={() => props.setFavourite(false)}>Unfavourite this Recipe</button>}
          <button
            id="cancel-btn"
            onClick={() => {
              props.closeRecipeView(false);
              props.setRecipeName("");
            }}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  )
};

export default RecipeView;