import React, { useState } from "react";
import "./Card.css";
import { X } from "react-feather";

const Card = ({ idx, card, deleteCard, setActiveCard, updateCardValue }) => {
  const [cardShowInput, setCardShowInput] = useState(true);
  const [cardValue, setCardValue] = useState("");

  const handleCardShow = (e) => {
    setCardValue(e.target.value);
  };

  const handleCardDeleteCard = () => {
    deleteCard(idx);
  };

  const handleCardShowSubmit = (event) => {
    event.preventDefault();
    setCardShowInput(false);
    updateCardValue(cardValue);
  };

  return (
    <div
      className="Card"
      draggable
      onDragStart={() => setActiveCard()}
      onDragEnd={() => setActiveCard(null)}
    >
      <div className="parent-title--delete">
        {cardShowInput ? (
          <form onSubmit={handleCardShowSubmit}>
            <input
              id="addcard-value"
              type="text"
              placeholder="Add Card"
              value={cardValue}
              onChange={handleCardShow}
            />
          </form>
        ) : (
          <h4>{cardValue}</h4>
        )}
        <button className="deleteCardButton" onClick={handleCardDeleteCard}>
          <X />
        </button>
      </div>
    </div>
  );
};

export default Card;
