function Home(props) {
  return (
    <div>
      <section className="home-content-container">
        This is the home page.
        <h2 
          className="nav-item text--bold"
          onClick={() => console.log("Clicked!")}
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
    </div>
    
  )
}

export default Home;