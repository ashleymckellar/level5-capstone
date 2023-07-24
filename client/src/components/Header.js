import React from "react";
import { Link, useNavigate } from "react-router-dom";



function Header() {

    const navigate = useNavigate();

    return (
        <>
            <div className="route-link">
                <Link to="/">
                    Home
                </Link>
                <Link to="/saucelist">
                    Sauce List
                </Link>
                <Link to="form">
                    Submit New Sauce
                </Link>
                <Link to="search">
                    Sauce Search
                </Link>
            </div>
            <div className="my-btn">
                <button className="my-btn" onClick={() => navigate("/")}>Home</button>
                <button className="my-btn" onClick={() => navigate(-1)}>Go backward</button>
                <button className="my-btn" onClick={() => navigate(1)}>Go forward</button>
            </div>
        </>
    )
};

export default Header;

//FOR the Route forward and backward button to display on all pages; no need to code into each route