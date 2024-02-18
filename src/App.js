
import './App.css';
import { useState } from 'react';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function buttonClick(){
  console.log("Button is clicked")
}
function App() {

  return (
   <div>

      <h1> React Event Handling</h1> <br/><br/>

      <button onClick={buttonClick}>
        Click
      </button>
    </div>
 
  );
}

export default App;
