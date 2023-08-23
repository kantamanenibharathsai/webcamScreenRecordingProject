 /* import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
*/

import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./components/Home"
import Login from "./components/Login"
import Contact from "./components/Contact"
import "./App.css"

export default function App() {
  return (
    <div className="app-container">
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home/>} /> 
        <Route exact path="/login" element={<Login/>} /> 
        <Route exact path="/contact" element={<Contact/>} /> 
      </Routes>
    
    </BrowserRouter>
    </div>
  )
}