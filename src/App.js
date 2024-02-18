
import './App.css';
import { useState, useEffect } from 'react';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import { BrowserRouter, Route, Routes } from 'react-router-dom';



function App() {

  const[count,setCount]=useState(0);

  const increment=()=>{
  setCount(count+1);
  };

  const decrement=()=>{
    setCount(count-1);
    };

    useEffect(()=>{
      //side effect
    console.log(`New count is: ${count}`);
    },[count])

  return (
   <div>

      <h1> Count: {count}</h1> <br/><br/>

      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
 
  );
}

export default App;
