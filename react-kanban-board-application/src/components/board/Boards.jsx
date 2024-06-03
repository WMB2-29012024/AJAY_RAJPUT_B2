import { useState } from "react";
import "../board/Boards.css";
import Cardlist from "../Cardlist/Cardlist";

const Boards = () => {
  const [list, setList] = useState([]);
  const [activeCard, setActiveCard] = useState(null);
  const [count, setCount] = useState(0);

  const handleButtonClick = () => {
    setCount(count + 1);
    setList([...list, { id: count, title: "", cards: [] }]);
  };

  const updateCardValue = (listId, cardId, newValue) => {
    setList((prevList) => prevList.map((list) => {
      if (list.id === listId) {
        return {
          ...list,
          cards: list.cards.map((card) =>
            card.id === cardId ? { ...card, value: newValue } : card
          ),
        };
      }
      return list;
    }));
  };

  return (
    <div className="Boards">
      <div className="Add-Board">
        <p>Add Board</p>
        <button onClick={handleButtonClick}>+</button>
      </div>
      <div className="Boardlist">
        {list.map((val) => (
          <Cardlist
            CardlistId={val.id}
            key={val.id}
            list={list}
            setList={setList}
            setActiveCard={setActiveCard}
            activeCard={activeCard}
            updateCardValue={updateCardValue}
          />
        ))}
      </div>
      <h1>{activeCard ? `Active Card ID: ${activeCard.cardId}` : "No Active Card"}</h1>
    </div>
  );
};

export default Boards;
