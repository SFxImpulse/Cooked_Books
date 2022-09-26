import './RecipeView.scss';

function RecipeView(props) {
  return (
    <div className="recipe-view-background">
      <div className="recipe-view-container">
        <div className="closeBtn">
          <button onClick={() => props.closeRecipeView(false)}> X </button>
        </div>
        <div className="recipe-view-title">
          <h1>Pancakes</h1>
        </div>
        <div className="recipe-view-info">
          <p>Recipe Description</p>
          <p>Recipe Instructions</p>
        </div>
        <div className="recipe-view-ingredients"></div>
          <ul>
            <li>
              Milk <button> + </button>
            </li>
            <li>
              Eggs <button> + </button>
            </li>
            <li>
              Flour <button> + </button>
            </li>
          </ul>
        <div className="recipe-view-footer"></div>
          <button>Add Ingredients to Grocery List</button>
          <button>Add Recipe to Favourites</button>
          <button id="cancelBtn" onClick={() => props.closeRecipeView(false)}>Cancel</button>
      </div>
    </div>
  )
};

export default RecipeView;