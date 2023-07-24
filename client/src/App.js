import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css"
import { Button } from "react-bootstrap"


// Imported Components
import Home from './components/Home.js';
import Form from './components/Form.js';
import Sauce from "./components/Sauce.js";
import Header from "./components/Header";
import SauceListContainer from "./components/SauceListContainer.js"
import Search from "./components/Search.js"

function App() {

  const [hotSauces, setHotSauces] = useState([]);
  const [newSauce, setNewSauce] = useState({})


  //GET all
  function getSauce() {
    axios.get("/sauces", { params: { timestamp: Date.now() } })
        .then(response => setHotSauces(response.data))
        .catch(error => console.log(error));
  }

  console.log(typeof getSauce)
// POST adds one
  function addSauce(newSauce) {
    console.log(newSauce)
    axios.post("/sauces", newSauce)
      .then(response => {
          getSauce()
      })
      .catch(error => console.log(error))
}

console.log(hotSauces)
console.log(newSauce)
//useEffects - 1. callback function 2. optional array of dependancies
useEffect(() => { // get sauce data, updates in Components State before rendering
  getSauce();
}, []); // due to the empty array it will only run once

useEffect(()=> {
  console.log(newSauce);
}, [newSauce]);

  return (
    <>
   
      <Router>
      <div>
    <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/saucelist" element={<SauceListContainer hotSauces={hotSauces} setHotSauces={setHotSauces} getSauce={getSauce}/>} />
          <Route path="/form" element={<Form newSauce={newSauce} addSauce={addSauce} getSauce={getSauce} hotSauces={hotSauces}/>} />
          <Route path="/sauce/:sauceId" element={<Sauce />} />
          <Route path="/search" element={<Search hotSauces ={hotSauces} getSauce={getSauce}/>}/>
        </Routes>
      </div>

      </Router>
    </>

    
  );
  }

export default App;