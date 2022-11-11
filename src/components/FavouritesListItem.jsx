import RecipeListItem from "./RecipeListItem";

import "./FavouritesListItem.scss";

function FavouritesListItem(props) {
  return (
    <RecipeListItem
      key={props.id}
      id={props.id}
      name={props.name}
      ingredients={props.ingredients}
      description={props.description}
      instructions={props.instructions}
      image={props.image}
      props={props.favourite}
      setRecipe={props.setRecipe}
      value={props.value}
      setRecipeName={props.setRecipeName}
      addToList={props.addToList}
      favourites={props.favourites}
      manageFavourites={props.manageFavourites}
    />
  )
};

export default FavouritesListItem;