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
      />
    )
  });
  
  return(
    <div className="grocery-list-container">
      <h1 className="grocery-list-header text--bold">{props.groceryList[0].name}</h1>
      <section className="grocery-list-content">
        <ul className="grocery-list">
          {groceryList}
        </ul>
      </section>
    </div>
  )
};

export default GroceryList;