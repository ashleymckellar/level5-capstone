import React from 'react';
import { Link, useNavigate } from 'react-router-dom';



function Home() {

    const navigate = useNavigate();

    return (
        <>
            <h1>HOME</h1>
            <Link to="/" style={{ padding: 5 }} className='navigate-buttons'>
                Home
            </Link>
            <Link to="/saucelist" style={{ padding: 5 }}>
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
        </>
    )
};


export default Home;