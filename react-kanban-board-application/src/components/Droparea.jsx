import React, { useState } from "react";
import "./Drophere.css";

const Droparea = ({ activeCard, setActiveCard, list, setList, CardlistId, idx }) => {
  const [showDrop, setShowDrop] = useState(false);

  return (
    <section
      className={showDrop ? "drophere" : "hide-drop-area"}
      onDragEnter={() => setShowDrop(true)}
      onDragLeave={() => setShowDrop(false)}
      onDrop={() => {
        setShowDrop(false);
        if (activeCard == null || activeCard.cardId === undefined) return;

        setList((prevList) => {
          let cardToMove = null;
          const updatedList = prevList.map(list => {
            if (list.id === activeCard.listId) {
              const updatedCards = list.cards.filter(card => {
                if (card.id === activeCard.cardId) {
                  cardToMove = card;
                  return false;
                }
                return true;
              });
              return { ...list, cards: updatedCards };
            }
            return list;
          }).map(list => {
            if (list.id === CardlistId && cardToMove) {
              const updatedCards = [...list.cards];
              updatedCards.splice(idx, 0, cardToMove);
              return { ...list, cards: updatedCards };
            }
            return list;
          });

          setActiveCard(null); // Clear active card after drop
          return updatedList;
        });
      }}
      onDragOver={(e) => e.preventDefault()}
    >
      Drop Here
    </section>
  );
};

export default Droparea;
