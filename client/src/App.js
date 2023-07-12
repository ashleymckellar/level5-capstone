import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import axios from "axios";

// Imported Components
import Home from './components/Home.js';
import World from './components/World.js';
import Form from './components/Form.js';
import Sauce from "./components/Sauce.js";
// import SauceList from "./components/SauceList.js";
import SauceListContainer from "./components/SauceListContainer";


function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/saucelist" element={<SauceListContainer />} />
          <Route path="/world" element={<World />} />
       <Route path="/form" element={<Form />} />
          <Route path="/sauce/:sauceId" element={<Sauce />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;




//REWRITE into Route        {/* <Route path="/form" element={<Form />} /> */}