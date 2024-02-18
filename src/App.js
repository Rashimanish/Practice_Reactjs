
import './App.css';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      <h1>Static Content</h1>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}>
        </Route>
        <Route path='/About' element={<About/>}>
        </Route>
        <Route path='/Contact' element={<Contact/>}>
        </Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
