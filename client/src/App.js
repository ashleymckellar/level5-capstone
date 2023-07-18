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

  const [hotSauces, setHotSauces] = useState([]);
  const [newSauce, setNewSauce] = useState({})

  function getSauce() {
    axios.get("/sauces", { params: { timestamp: Date.now() } })
        .then(response => setHotSauces(response.data))
        .catch(error => console.log(error));
  }

  function addSauce(newSauce) {
    console.log(newSauce)
    axios.post("/sauces", newSauce)
      .then(response => {
          setHotSauces(prevHotSauces => [...prevHotSauces, response.data])
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
}, [newSauce])

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/saucelist" element={<SauceListContainer hotSauces={hotSauces} setHotSauces={setHotSauces} getSauce={getSauce}/>} />
          <Route path="/world" element={<World />} />
          <Route path="/form" element={<Form setHotSauces={setHotSauces} newSauce={newSauce} hotSauces={hotSauces} addSauce={addSauce} />} />
          <Route path="/sauce/:sauceId" element={<Sauce />} />
        </Routes>
      </Router>
    </>

    
  );
  }

export default App;




//REWRITE into Route        {/* <Route path="/form" element={<Form />} /> */}