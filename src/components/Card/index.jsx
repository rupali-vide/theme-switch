import React from "react";
import "./Card.scss";

export default function Card({ cardData }) {
  const { imageUrl, title, text } = cardData;

  return (
    <div className="cardOne">
      <div>
        <img src={imageUrl} className="cardImage" alt={title} />
      </div>
      <div className="cardTitle">{title}</div>
      <p className="cardText">{text}</p>
    </div>
  );
}
