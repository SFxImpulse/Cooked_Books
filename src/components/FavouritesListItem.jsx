import RecipeListItem from "./RecipeListItem";

function FavouritesListItem(props) {
  return (
    <li>
      {props.favourite && <RecipeListItem
        recipe={props.recipe}
        setRecipe={props.setRecipe}
        favourite={props.favourite}
        setFavourite={props.setFavourite}
      />}
    </li>
  )
};

export default FavouritesListItem;