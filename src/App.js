
import './App.css';
import { useState } from 'react';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {

  const [count,setCount] = useState(0);

  const increment = ()=>{
    setCount(count+1);
  }
  const decrement = ()=>{
    setCount(count-1);
  }

  return (
   <div>
      <span className='title'>My counter</span>
      <p className='subtitle'>The count is {count}</p>
      <button onClick={decrement} className='button'>-</button>
      <button onClick={increment} className='button'>+</button>
    </div>
 
  );
}

export default App;
