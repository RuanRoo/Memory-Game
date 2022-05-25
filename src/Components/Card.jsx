import React from "react";
import "./card.css";

// card component being passed props to handle the click event and flip the cards

const Card = ({ card, handleChoice, flipped, disabled }) => {
  const handleClick = () => {
    if (!disabled) {
      handleChoice(card);
    }
  };
  return (
    <div className="card">
      <div className={flipped ? "flipped" : ""}>
        <img className="front" src={card.src} alt="front of card" />
        <img
          className="back"
          src="/Images/natalie-chaney.jpg"
          onClick={handleClick}
          alt="back of card"
        />
      </div>
    </div>
  );
};
export default Card;
