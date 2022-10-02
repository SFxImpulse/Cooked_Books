import './RecipeView.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faPlus, faCheck, faXmark } from "@fortawesome/free-solid-svg-icons";

function RecipeView(props) {

  return (
    <div className="recipe-view-background">
      <div className="recipe-view-container">
        <div className="closeBtn">
          <button onClick={() => props.closeRecipeView(false)}><FontAwesomeIcon icon={faXmark} /></button>
        </div>
        <div className="recipe-view-title">
          <h1>Pancakes</h1>
        </div>
        <div className='recipe-view-content'>
          <div className="recipe-view-info">
            <h2>Description</h2>
            <p>I'm baby fanny pack chia readymade hexagon salvia pour-over kickstarter quinoa butcher keffiyeh copper mug four loko tousled. Shabby chic food truck biodiesel aesthetic scenester authentic. DSA vice actually vibecession stumptown irony. Distillery tote bag enamel pin before they sold out health goth next level, succulents snackwave fit swag. Normcore bespoke austin forage, crucifix la croix cronut chia bruh pok pok sriracha helvetica.</p>
            <h2>Instructions</h2>
            <ol>
              <li>Make batter.</li>
              <li>Pour batter in batches.</li>
              <li>Flip when golden brown on one side.</li>
              <li>Serve with maple syrup and a slab of butter.</li>
            </ol>
          </div>
          <div className="recipe-view-ingredients">
            <h2>Ingredients</h2>
            <ul>
              <li>
                <button><FontAwesomeIcon icon={faPlus} className="add-btn" /></button>Milk
              </li>
              <li>
                <button><FontAwesomeIcon icon={faPlus} className="add-btn" /></button>Eggs
              </li>
              <li>
                <button><FontAwesomeIcon icon={faPlus} className="add-btn" /></button>Flour
              </li>
            </ul>
          </div>
        </div>
        <div className="recipe-view-footer">
          <button id="confirm-btn">Save to Grocery List</button>
          {!props.favourite && <button id="save-btn" onClick={() => props.setFavourite(true)}>Favourite this Recipe</button>}
          {props.favourite && <button id="unsave-btn" onClick={() => props.setFavourite(false)}>Unfavourite this Recipe</button>}
          <button id="cancel-btn" onClick={() => props.closeRecipeView(false)}>Cancel</button>
        </div>
      </div>
    </div>
  )
};

export default RecipeView;