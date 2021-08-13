import React from "react";
import { Link } from "react-router-dom";

const Cocktail = ({ image, name, id, info }) => {
  return (
    <article className="cocktail">
      <div className="img-container">
        <img src={image} alt={name} />
      </div>
      <div className="cocktail-footer">
        <h3>{name.slice(0, 18)}</h3>
        <h4>For : {info.toLowerCase() === "alcoholic" ? "21+" : "16+"}</h4>
        <p>{info}</p>
        <Link to={`/cocktail/${id}`} className="btn btn-primary btn-details">
          Details
        </Link>
      </div>
    </article>
  );
};

export default Cocktail;
