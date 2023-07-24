import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Home from './Home.js'
import List from './SauceList.js'
import World from './WorldSauce.js'
import Form from './Form.js'
// import Navbar from './components/Navbar.js'
import SauceListContainer from "./SauceListContainer";

export default function Navbar() {
    return (
        <>
        <Router>
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/list" element={<SauceListContainer />}/>
            <Route path="/world" element={<World />}/>
            <Route path="/form" element={<Form />} />
            <Route path="/search" element={<Search />} />
          </Routes>
        </Router>
        </>
    )
}