import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import React from 'react';

import Hero from './components/Hero/Hero.jsx';
import About from './components/About/about.jsx';
import Devider from './components/Devider/devider.jsx';
import Info from './components/Info/info.jsx';
import Carusell from "./components/carusell/carusell.jsx";

import './App.css'
function App() {
    const [count, setCount] = useState(0);
    
  return (
    <>
      <Hero/>
      <About/>
      <Devider/>
      <Info/>
      <Devider/>
      <Carusell/>
    </>  
  );
}



export default App;
