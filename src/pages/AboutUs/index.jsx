import React from "react";
import "./AboutUs.scss";
import Card from "../../components/Card";
import cardImage from "../../assets/images/nature1.jpg";
import cardImage1 from "../../assets/images/nature2.jpg";
import cardImage2 from "../../assets/images/nature3.jpg";
import cardImage3 from "../../assets/images/nature4.jpg";
import Navbar from "../../components/Navbar";

export default function AboutUs() {
  const cardDataArray = [
    {
      imageUrl: cardImage,
      title: "Beautiful Butterfly",
      text: "Dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s more recently with desktop publishing software like Aldus PageMaker including versions of Lorem",
    },
    {
      imageUrl: cardImage1,
      title: "Beautiful River",
      text: "Dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s more recently with desktop publishing software like Aldus PageMaker including versions of Lorem",
    },
    {
      imageUrl: cardImage2,
      title: "Beautiful Flowers",
      text: "Dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s more recently with desktop publishing software like Aldus PageMaker including versions of Lorem",
    },
    {
      imageUrl: cardImage3,
      title: "Beautiful ",
      text: "Dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s more recently with desktop publishing software like Aldus PageMaker including versions of Lorem",
    },
  ];
  return (
    <div className="aboutUsContainer">
      <Navbar />
      <div className="cardContainer">
        {cardDataArray.map((cardData, index) => (
          <Card key={index} cardData={cardData} />
        ))}
      </div>
    </div>
  );
}
