import './Home.scss';

function Home(props) {
  return (
    <section className="home-content-container">
      <div className="welcome-container">
        <h1 className="text--bold">Welcome to Cooked Books!</h1>
        <p className="text--regular">Start browsing our recipies and create your grocery list!</p>
      </div>
      <div className="nav-item-container">
      <h2
          className="nav-item text--bold"
          onClick={() => {
            props.setMode(1);
            props.setNav(true);
          }}
        >
          About
        </h2>
        <h2
          className="nav-item text--bold"
          onClick={() => {
            props.setMode(2);
            props.setNav(true);
          }}
        >
          Recipies
        </h2>
        <h2
          className="nav-item text--bold"
          onClick={() => {
            props.setMode(3);
            props.setNav(true);
          }}
        >
          Grocery List
        </h2>
        <h2
          className="nav-item text--bold"
          onClick={() => {
            props.setMode(4);
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