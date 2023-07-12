import React from "react"
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css';

// Imported Components
// import Home from './components/Home.js'
// import List from './components/SauceList.js'
// import World from './components/World.js'
// import Form from './components/Form.js'
import Navbar from './components/Navbar.js'
// import SauceListContainer from "./components/SauceListContainer"; // SauceListContainer maps through the API and displays on SauceList.js;STILL need to figure out how to stop from duplicating
//moved routes to NavBar

function App() {
  return (
    <>


    <Navbar />
    </>
  );
}

export default App;
