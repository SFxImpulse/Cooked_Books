import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

import "./GroceryListItem.scss";

function GroceryListItem(props) {
  return (
    <li className="grocery-list-item">
      <button className="grocery-list-item-x">
        <FontAwesomeIcon icon={faXmark} />
      </button>
      <p className="grocery-list-item-text text--regular"></p>
    </li>
  )
};

export default GroceryListItem;