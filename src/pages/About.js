import React from "react";
import cocktails from "../assets/cocktails.svg";
const About = () => {
  return (
    <section className="section page hero-center">
      <div className="hero-image-container">
        <img src={cocktails} alt="questions" className="hero-image" />
      </div>
      <div className="hero-info">
        <h3>
          Welcome to <span className="hero-text">CocktailDB</span>
        </h3>
        <p>
          Cocktails DB allows you to search about various different kinds of
          cocktails available in the world and their ingredients. True delight
          for a Cocktails lover! What's your favourite drink?
        </p>
        {/* <button className="btn">
          <Link to="/explore">Explore Now</Link>
        </button> */}
      </div>
    </section>
  );
};

export default About;
