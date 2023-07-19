import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import axios from "axios";

// Imported Components
import Home from './components/Home.js';
// import World from './components/WorldSauce.js';
import Form from './components/Form.js';
import Sauce from "./components/Sauce.js";
import SauceListContainer from "./components/SauceListContainer";
import Header from "./components/Header";
import WorldSauceContainer from "./components/WorldSauceContainer";// OC adds foreign


function App() {

  const [hotSauces, setHotSauces] = useState([]);
  const [newSauce, setNewSauce] = useState({})

  // oc foreignsauces and new foreignsauces
const [foreignSauce, setForeignSauce] = useState([]);
const [newForeignSauce, setNewForeignSauce] = useState({});


  //GET all
  function getSauce() {
    axios.get("/sauces", { params: { timestamp: Date.now() } })
        .then(response => setHotSauces(response.data))
        .catch(error => console.log(error));
  }

// GET foreign sauces
function getForeignSauce() {
  axios.get("/world", { params: { timestamp: Date.now() } })
  .then(response => setNewForeignSauce(response.data))
  .catch(error => console.log(error))
};

// POST foreign one
function addForeignSauce(newSauce) {
  console.log(newSauce)
  axios.post("/sauces/world", newSauce)
    .then(response => {
        getForeignSauce()
    })
    .catch(error => console.log(error))
};

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

useEffect(() => {
  getSauce();
}, []);

useEffect(()=> {
  console.log(newSauce);
}, [newSauce]);
useEffect(() => {
  getForeignSauce();
}, []);
//foreign sauce
useEffect(()=> {
  console.log(newForeignSauce);
}, [newForeignSauce]);

  return (
    <>
   
      <Router>
      <div>
    <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/saucelist" element={<SauceListContainer hotSauces={hotSauces} setHotSauces={setHotSauces} getSauce={getSauce}/>} />
          {/* OC world saucelist */}
          <Route path="/world" element={<WorldSauceContainer foreignSauce={foreignSauce} setForeignSauce={setForeignSauce} getForeignSauce={getForeignSauce}/>} /> 
          {/* OC  world*/}
          <Route path="/form" element={<Form newSauce={newSauce} addSauce={addSauce} getSauce={getSauce} hotSauces={hotSauces}/>} />
          <Route path="/sauce/:sauceId" element={<Sauce />} />
        </Routes>
      </div>

      </Router>
    </>

    
  );
  }

export default App;




//REWRITE into Route        {/* <Route path="/form" element={<Form />} /> */}