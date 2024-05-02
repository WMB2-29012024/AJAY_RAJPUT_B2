import {useState} from "react";
import './App.css';
import Buttons from './components/Buttons';
import CountComponent from './components/CountComponent';

function App() {
  const [count,setCount]=useState(0);
  return (

    <div><CountComponent countNumber= {count}/>
    <Buttons  setCount={setCount}  /></div>
  );
}

export default App;
