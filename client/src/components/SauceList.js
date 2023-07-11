import React, {useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'



function SauceList(props) {

    const navigate = useNavigate();

    return (
        <>
            <h1>Sauces</h1>
<h1>{props.name}</h1>
<p>{props.heatRating}</p>
            <div className='navigate-buttons'>
                <button className="navigate-buttons"  onClick={() => navigate("/")}>Home</button>
                <button className="navigate-buttons"  onClick={() => navigate(-1)}>Go backward</button>
                <button className="navigate-buttons"  onClick={() => navigate(1)}>Go forward</button>
            </div>
        </>
    )
};



export default SauceList;