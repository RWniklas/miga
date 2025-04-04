import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import React from 'react';

import Hero from './components/Hero/Hero.jsx';

import './App.css'
function App() {
    const [count, setCount] = useState(0);
    
  return (
    
      <Hero/>
      
  );
}



export default App;
