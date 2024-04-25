// Card.js
import React from "react";
import "./card.css"; // Correct CSS import

const Card = ({ suit, value }) => {
  const color = suit === "♣" || suit === "♠" ? "black" : "red";
  return <div className={`card ${color}`}>{suit}</div>;
};

export default Card;
