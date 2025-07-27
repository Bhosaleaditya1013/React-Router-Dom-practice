import React from "react";
import {BrowserRouter, Routes,Route} from 'react-router-dom'
import Navbar from "./MyComponents/Navbar";
import Home from "./MyComponents/Home";
import About from "./MyComponents/About";
import Contact from "./MyComponents/Contact";
import "./App.css"


function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar title="NaviGation System" />
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/about" element={<About />}></Route>
      <Route path="/contact" element={<Contact />}></Route>
    </Routes>

    
    </BrowserRouter>
    
    </>
    
  );
}

export default App;
