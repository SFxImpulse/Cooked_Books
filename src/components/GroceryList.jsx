import GroceryListItem from "./GroceryListItem";
import "./GroceryList.scss";

function GroceryList(props) {

  const groceryList = props.groceryList.map(item => {

    return (
      <GroceryListItem
        key={item.id}
        id={item.id}
        name={item.name}
        ingredients={item.ingredients}
        removeFromList={props.removeFromList}
      />
    )
  });
  
  return(
    <div className="grocery-list-container">
      <h1 className="grocery-list-header text--bold">Grocery List</h1>
      <section className="grocery-list-content">
      {props.groceryList.length > 0 && 
        <ul className="grocery-list">
          {groceryList}
        </ul>
      }
      </section>
      {props.groceryList.length < 1 && 
        <h2 className="text--bold">Your list is empty! Please look over our recipies and add some items to your list!</h2>
      }
    </div>
  )
};

export default GroceryList;