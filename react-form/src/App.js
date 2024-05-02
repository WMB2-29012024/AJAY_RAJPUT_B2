import logo from './logo.svg';
import './App.css';
import CardComponent from './components/CardComponent';
import FormComponent from './components/FormComponent';
import { useState } from 'react';

function App() {
  const [inputText,setInputText]=useState("")
  return (
    <div>
    <FormComponent setInputText={setInputText}/>
      <CardComponent inputText={inputText}/>

    </div>
  );
}

export default App;
