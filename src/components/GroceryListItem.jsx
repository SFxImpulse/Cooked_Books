import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

import "./GroceryListItem.scss";

function GroceryListItem(props) {

  const ingredients = props.ingredients.map(ingredient => {
    
    return (
      <li key={ingredient.id} className="grocery-list-item">
        <button className="grocery-list-item-x">
          <FontAwesomeIcon icon={faXmark} />
        </button>
        <p className="grocery-list-item-text text--regular">{ingredient.name}</p>
      </li>
    );
  });

  return (
    <div>
      {ingredients}
    </div>
  )
};

export default GroceryListItem;