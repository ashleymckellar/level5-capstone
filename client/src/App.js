import React from "react"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css';

// Imported Components
import Home from './components/Home.js'
import List from './components/List.js'
import World from './components/World.js'
import Form from './components/Form.js'


function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/list" element={<List />}/>
        <Route path="/world" element={<World />}/>
        <Route path="/form" element={<Form />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
