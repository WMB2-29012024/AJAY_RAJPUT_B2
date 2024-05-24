import React from "react";
import "./Card.css";
const Card = ({count,avatar,title}) => {
   
  return (
    <div className="Card">
      <div className="user">
        <img className="avatar" src={`${avatar}`} alt="avatar" />
        <div className="user-name">Rani Park {count}</div>
        <p className="position">Host</p>
      </div>
      <h1 className="description">{title}</h1>
      <div className="location">
        <img src="./images/Vector.svg" alt="" />
        <p>Seoul</p>
      </div>
    </div>
  );
};

export default Card;
