import React from "react"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css';

// Imported Components
import Home from './components/Home.js'
import List from './components/SauceList.js'
import World from './components/World.js'
import Form from './components/Form.js'
import SauceListContainer from "./components/SauceListContainer"; // SauceListContainer maps through the API and displays on SauceList.js;STILL need to figure out how to stop from duplicating


function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/list" element={<SauceListContainer />}/>
        <Route path="/world" element={<World />}/>
        <Route path="/form" element={<Form />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
