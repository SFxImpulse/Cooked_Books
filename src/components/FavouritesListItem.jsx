import RecipeListItem from "./RecipeListItem";

import "./FavouritesListItem.scss";

function FavouritesListItem(props) {
  return (
    <li>
      {props.favourite && <RecipeListItem
        recipe={props.recipe}
        setRecipe={props.setRecipe}
        favourite={props.favourite}
        setFavourite={props.setFavourite}
      />}
      {!props.favourite && <span className="empty-list-text text--regular">
        Your favourites list is empty! Add some recipes you like.
        </span>}
    </li>
  )
};

export default FavouritesListItem;