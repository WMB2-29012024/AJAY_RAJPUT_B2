import "./App.css";
import {Route, Routes } from "react-router-dom";
import NavBar from "./pages/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Work from "./pages/Work";

function App() {
  return (
    <div className="App">
      Hello world
      <Routes>
        <Route path="/" element={<NavBar />}/>
        <Route path="/home" element={<Home  />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/work" element={<Work />} />
      </Routes>
      
    </div>
  );
}

export default App;
