import RecipeListItem from "./RecipeListItem";
import './RecipeList.scss';

function RecipeList(props) {
  return (
    <div>
      <h1 className="recipe-list-header text--bold">Recipe List</h1>
      <ul className="recipe-list">
        <RecipeListItem />
        <RecipeListItem />
        <RecipeListItem />
        <RecipeListItem />
        <RecipeListItem />
        <RecipeListItem />
      </ul>
    </div>
  )
}

export default RecipeList;