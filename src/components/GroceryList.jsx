import GroceryListItem from "./GroceryListItem";
import "./GroceryList.scss";

function GroceryList(props) {
  return(
    <div className="grocery-list-container">
      <h1 className="grocery-list-header text--bold">Grocery List</h1>
      <section className="grocery-list-content">
        <ul className="grocery-list">
          <GroceryListItem />
        </ul>
      </section>
    </div>
  )
};

export default GroceryList;