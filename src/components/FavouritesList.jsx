import FavouritesListItem from "./FavouritesListItem";

import './FavouritesList.scss';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

function FavouritesList(props) {

  let favourites;

  if (props.favourites.length > 0) {
    favourites = props.favourites.map(favourite => {
      return (
        <FavouritesListItem
          key={favourite.id}
          id={favourite.id}
          name={favourite.name}
          ingredients={favourite.ingredients}
          description={favourite.description}
          instructions={favourite.instructions}
          image={favourite.image}
          favourite={props.favourite}
          setRecipe={props.setRecipe}
          value={props.value}
          selected={favourite.name === props.value}
          setRecipeName={props.setRecipeName}
          addToList={props.addToList}
          favourites={props.favourites}
          manageFavourites={props.manageFavourites}
        />
      )
    });
  }

  return(
    <div className="favourites-list-container">
      <section className="favourites-list-search">
        <input
          className="favourites-list-search-bar"
          placeholder="Find the Apple of your Ribeye..."
          onFocus={(e) => {
            e.target.placeholder = "";
          }}
          onBlur={(e) => {
            e.target.placeholder = "What the Fork is for Dinner?!"
          }}
        />
        <FontAwesomeIcon
          icon={faMagnifyingGlass}
          className="favourites-list-search-icon"
        />
      </section>
        <h1 className="favourites-list-header text--bold">Favourites List</h1>
        {favourites && <ul className="favourites-list">
          {favourites}
        </ul>}
        {!favourites && 
        <h2 className="favourites-list-warning text--bold">Your list is empty! Please look over our recipes and add some items to your list!</h2>
        }
    </div>
  )
};

export default FavouritesList;