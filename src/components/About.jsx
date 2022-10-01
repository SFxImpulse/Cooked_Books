import "./About.scss";

function About(props) {
  return (
    <section className="about-container">
      <h1 className="about-header text--bold">About</h1>
      <p className="about-text">Here at Cooked Books, we are passionate about making recipies the world over as easy to access and create as possible. We are committed to providing fast and useful information concerning recipies, their historical and sociocultural context, and their ingredients and instructions.</p>
      <p className="about-text">Our commitment to authentic food and historical accuracy has led us to find recipies made by people of the same culture and ethnicity, allowing for accurate representation of food and their cultures.</p>
      <p className="about-text">Our website functionality is created with ease of use in mind, allowing for a relaxing and straightforward user experience without much fuss. Recipies and their ingredients are but a search and click away, and creating a grocery list is just as easy to do.</p>
      {/* <p className="about-text"></p> */}
    </section>
  )
};

export default About;