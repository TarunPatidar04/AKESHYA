import React from "react";
import "./Card.css";

const Card = ({ heading, description }) => {
  return (
    <div className="card">
      <a className="card1" >
        <p className="heading">{heading}</p>
        <p className="small">{description}</p>
        <div className="go-corner" href="#"></div>
      </a>
    </div>
  );
};

export default Card;
