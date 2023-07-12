import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios'
// import Navbar from './Navbar.js'
// import World from './World.js'



function SauceList(props) {

    // const navigate = useNavigate();

    return (
        <>
        
        
            
<h1>Name: {props.name}</h1>
<p>Scoville Heat Units: {props.heatRating}</p>
            {/* <div className='navigate-buttons'>
                <button className="navigate-buttons"  onClick={() => navigate("/")}>Home</button>
                <button className="navigate-buttons"  onClick={() => navigate(-1)}>Go backward</button>
                <button className="navigate-buttons"  onClick={() => navigate(1)}>Go forward</button>
            </div> */}
        </>
    )
};



export default SauceList;