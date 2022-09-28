import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faBlender } from "@fortawesome/free-solid-svg-icons"

import "./Navigation.scss";

function Navigation(props) {

  return (
    <nav className="navbar">
      <FontAwesomeIcon icon={faBlender} className="nav-logo" onClick={() => {
        props.setMode(0);
        props.setNav(false);
      }} />
      <h2 className="nav-text">Cooked Books</h2>
      <p className="nav-slogan text--extra-bold">( These Books are Cooked! )</p>
      <section className="nav-item-container">
        <h2 
          className="nav-item text--bold"
          onClick={() => {
            props.setMode(1);
            props.setNav(true);
          }}
        >
          Recipies
        </h2>
        <h2 
          className="nav-item text--bold"
          onClick={() => console.log("Clicked!")}
        >
          Favourites
        </h2>
        <h2 
          className="nav-item text--bold"
          onClick={() => console.log("Clicked!")}
        >
          Grocery List
        </h2>
      </section>
    </nav>
  )
}

export default Navigation;