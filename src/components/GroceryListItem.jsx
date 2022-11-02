import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

import "./GroceryListItem.scss";

function GroceryListItem(props) {

  console.log(props.ingredients);

  const ingredients = props.ingredients.map(ingredient => {
      
    return (
      <li key={ingredient.id} className="grocery-list-item">
        <button 
          className="grocery-list-item-x" 
          onClick={() => {
            props.removeFromList(ingredient.id, ingredient, props.ingredients);
          }}
        >
          <FontAwesomeIcon icon={faXmark} />
        </button>
        <p className="grocery-list-item-text text--regular">{ingredient.name}</p>
      </li>
    );
  });

  return (
    <div>
      {props.ingredients.length > 0 && ingredients}
    </div>
  )
};

export default GroceryListItem;