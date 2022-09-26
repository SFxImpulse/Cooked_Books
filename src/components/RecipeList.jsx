import RecipeListItem from "./RecipeListItem";
import "./RecipeList.scss";

function RecipeList(props) {

  // const recipies = props.recipies.map(recipe => {

  // })

  return (
    <div>
      <h1 className="recipe-list-header text--bold">Recipe List</h1>
      <ul className="recipe-list">
        <RecipeListItem />
      </ul>
    </div>
  )
}

export default RecipeList;