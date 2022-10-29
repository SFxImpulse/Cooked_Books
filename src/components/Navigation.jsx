import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookOpen } from "@fortawesome/free-solid-svg-icons";

import "./Navigation.scss";

function Navigation(props) {

  return (
    <nav className="navbar">
      <FontAwesomeIcon icon={faBookOpen} className="nav-logo" onClick={() => {
        props.setMode(0);
        props.setNav(false);
      }} />
      <h2 className="nav-text">Cooked Books</h2>
      <p className="nav-slogan text--extra-bold">( These Books are Cooked! )</p>
      <section className="nav-item-container">
        <h2
          className="nav-item text--bold"
          onClick={() => {
            props.setMode(0);
            props.setNav(false);
            props.setRecipe(false);
          }}
        >
          Home
        </h2>
        <h2
          className="nav-item text--bold"
          onClick={() => {
            props.setMode(1);
            props.setNav(true);
            props.setRecipe(false);
          }}
        >
          About
        </h2>
        <h2
          className="nav-item text--bold"
          onClick={() => {
            props.setMode(2);
            props.setNav(true);
            props.setRecipe(false);
          }}
        >
          Recipies
        </h2>
        <h2
          className="nav-item text--bold"
          onClick={() => {
            props.setMode(3);
            props.setNav(true);
            props.setRecipe(false);
          }}
        >
          Grocery List
        </h2>
        <h2
          className="nav-item text--bold"
          onClick={() => {
            props.setMode(4);
            props.setNav(true);
            props.setRecipe(false);
          }}
        >
          Favourites
        </h2>
      </section>
    </nav>
  )
}

export default Navigation;