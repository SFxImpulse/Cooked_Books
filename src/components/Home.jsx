import './Home.scss';

function Home(props) {
  return (
    <section className="home-content-container">
      <div className="welcome-container">
        <h1 className="text--bold">Welcome to Cooked Books!</h1>
        <p className="text--regular">Start browsing our recipes and create your grocery list!</p>
      </div>
      <div className="nav-item-container">
      <h2
          className="nav-item text--bold"
          onClick={() => {
            props.setDisplay(1);
            props.setNav(true);
          }}
        >
          About
        </h2>
        <h2
          className="nav-item text--bold"
          onClick={() => {
            props.setDisplay(2);
            props.setNav(true);
          }}
        >
          Recipes
        </h2>
        <h2
          className="nav-item text--bold"
          onClick={() => {
            props.setDisplay(3);
            props.setNav(true);
          }}
        >
          Grocery List
        </h2>
        <h2
          className="nav-item text--bold"
          onClick={() => {
            props.setDisplay(4);
            props.setNav(true);
          }}
        >
          Favourites
        </h2>
      </div>
    </section>
  )
}

export default Home;