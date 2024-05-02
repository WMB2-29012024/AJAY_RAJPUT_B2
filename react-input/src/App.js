import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import InputComponent from './components/InputComponent';
import TextComponent from './components/TextComponent';

function App() {
const [inputText,setInputText]=useState("")
  return (
   <div><InputComponent setInputText={setInputText}/>
   <TextComponent inputText={inputText}/>
   </div>
  );
}

export default App;
