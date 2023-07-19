import React from "react";
import { Link, useNavigate } from "react-router-dom";



function Header() {

    const navigate = useNavigate();

    return (
        <div>
             <Link to="/" style={{ padding: 5 }} className='navigate-buttons'>
                Home
            </Link>
            <Link to="/saucelist" style={{ padding: 5 }} className='navigate-buttons'>
                Sauce List
            </Link>
            <Link to="world" style={{ padding: 5 }}className='navigate-buttons'>
                Worldly Hot Sauce
            </Link>
            <Link to="form" style={{ padding: 5 }}className='navigate-buttons'>
                Submit New Sauce
            </Link>
            
            <div className="navigate-buttons">
                <button className="navigate-buttons"  onClick={() => navigate("/")}>Home</button>
                <button className="navigate-buttons"  onClick={() => navigate(-1)}>Go backward</button>
                <button className="navigate-buttons"  onClick={() => navigate(1)}>Go forward</button>
            </div>
        </div>
    )
};

export default Header;

//FOR the Route forward and backward button to display on all pages; no need to code into each route