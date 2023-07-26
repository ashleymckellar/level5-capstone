import React from "react";
import { Link, useNavigate } from "react-router-dom";



function Header() {

    const navigate = useNavigate(); // A navigation function that is used to navigate to different path within the application

    return (
        <>
            <div className="route-link">
                {/* Link - used to navigate within the application */}
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
                {/* navigate - used to navigate within the application */}
                <button className="my-btn" onClick={() => navigate("/")}>Home</button>
                <button className="my-btn" onClick={() => navigate(-1)}>Go backward</button>
                <button className="my-btn" onClick={() => navigate(1)}>Go forward</button>
            </div>
        </>
    )
};

export default Header;