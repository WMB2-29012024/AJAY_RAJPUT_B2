import React from "react";
import Card from "./Card";
import './Button.css';
import { useState,useEffect } from "react";
const   Button = () => {
    
    const [count, setCount] = useState(1); 
    const [avatar, setAvatar] = useState(''); 
    const [title, setTitle] = useState(''); 
  
    useEffect(() => {
      const fetchData = async () => {
        if (count > 0 && count <90) {  
          const response = await fetch(
            `https://jsonplaceholder.typicode.com/albums/${count}/photos`
          );
          const data = await response.json();
          if (data.length > 0 ) {
            setTitle(data[0].title); 
            setAvatar(data[0].thumbnailUrl); 
          } else {
            setAvatar(''); 
            setTitle(''); 
          }
        }
      };
      fetchData();
    }, [count]); 
  
    const handleNextClick = () => {
      setCount(count => (count < 100 ? count + 1:count));
    };
  
    const handlePreviousClick = () => {
      setCount(count => (count > 1 ? count - 1 : 1)); 
    };
  return (
    <div className="Buttons">
      <button className="btn" onClick={handleNextClick}>Next</button>
<Card  count={count}    title = {title}avatar={avatar}/>
      <button className="btn" onClick={handlePreviousClick}>Previous</button>
    </div>
  );
};

export default Button;
