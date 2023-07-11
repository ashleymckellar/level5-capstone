import React, {useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'



function List() {

    const navigate = useNavigate();

    return (
        <>
            <h1>LIST</h1>

            <div className='navigate-buttons'>
                <button className="navigate-buttons"  onClick={() => navigate("/")}>Home</button>
                <button className="navigate-buttons"  onClick={() => navigate(-1)}>Go backward</button>
                <button className="navigate-buttons"  onClick={() => navigate(1)}>Go forward</button>
            </div>
        </>
    )
};



export default List;