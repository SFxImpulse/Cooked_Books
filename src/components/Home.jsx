import './Home.scss';

function Home(props) {
  return (
    <section className="home-content-container">
      <div className="welcome-container">
        <h1 className="welcome-text text--bold">Welcome to Cooked Books!</h1>
      </div>
      <div className="nav-item-container">
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
      </div>
    </section>
  )
}

export default Home;