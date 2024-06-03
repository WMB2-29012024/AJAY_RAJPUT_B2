import React, { useState } from "react";
import "./Cardlist.css";
import Card from "../TaskComponents/Card";
import { X } from "react-feather";
import Droparea from "../Droparea";

function Cardlist({
  CardlistId,
  list,
  setList,
  activeCard,
  setActiveCard,
  updateCardValue,
}) {
  const [showInput, setShowInput] = useState(true);
  const [title, setTitle] = useState("");

  const handleButtonClickInCard = () => {
    const newList = list.map((item) => {
      if (item.id === CardlistId) {
        return {
          ...item,
          cards: [...item.cards, { id: item.cards.length, value: "" }],
        };
      }
      return item;
    });
    setList(newList);
  };

  const handleButtonDeleteCardlist = () => {
    const filteredList = list.filter((data) => data.id !== CardlistId);
    setList(filteredList);
  };

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleTitleSubmit = (e) => {
    e.preventDefault();
    setShowInput(false);
    const newList = list.map((item) => {
      if (item.id === CardlistId) {
        return { ...item, title };
      }
      return item;
    });
    setList(newList);
  };

  const handleDeleteCard = (cardId) => {
    const newList = list.map((item) => {
      if (item.id === CardlistId) {
        const newCards = item.cards.filter((card) => card.id !== cardId);
        return { ...item, cards: newCards };
      }
      return item;
    });
    setList(newList);
  };

  const cardList = list.find((item) => item.id === CardlistId)?.cards || [];

  return (
    <div className="Cardlist">
      <div className="deleteCardListButtonParent">
        {showInput ? (
          <form onSubmit={handleTitleSubmit}>
            <input
              id="title-input"
              type="text"
              placeholder="Add Title i.e, Progress"
              value={title}
              onChange={handleTitleChange}
            />
          </form>
        ) : (
          <h1>{title}</h1>
        )}
        <button
          className="deleteCardListButton"
          onClick={handleButtonDeleteCardlist}
        >
          <X />
        </button>
      </div>
      {cardList.map((card, idx) => (
        <React.Fragment key={card.id}>
          <Card
            idx={card.id}
            card={card}
            deleteCard={() => handleDeleteCard(card.id)}
            setActiveCard={() =>
              setActiveCard({ cardId: card.id, listId: CardlistId })
            }
            updateCardValue={(newValue) =>
              updateCardValue(CardlistId, card.id, newValue)
            }
          />
          <Droparea
            setList={setList}
            activeCard={activeCard}
            setActiveCard={setActiveCard}
            list={list}
            idx={idx + 1}
            CardlistId={CardlistId}
          />
        </React.Fragment>
      ))}
      <button className="add-card-btn" onClick={handleButtonClickInCard}>
        Add Card
      </button>
      <Droparea
        setList={setList}
        activeCard={activeCard}
        setActiveCard={setActiveCard}
        list={list}
        idx={cardList.length}
        CardlistId={CardlistId}
      />
    </div>
  );
}

export default Cardlist;
