import React from 'react';
import { Link, useNavigate } from 'react-router-dom';



function Home() {

    const navigate = useNavigate();

    return (
        <>
        <h1>HOME</h1>
            <Link to="/" style={{ padding: 5 }}>
                Home
            </Link>
            <Link to="/list" style={{ padding: 5 }}>
                List
            </Link>
            <Link to="world" style={{ padding: 5 }}>
                Worldly Hot Sauce
            </Link>
            <Link to="form" style={{ padding: 5 }}>
                Submit New Sauce
            </Link>


            <button onClick={() => navigate("/")}>Home</button>
        <button onClick={() => navigate(-1)}>Go backwards</button>
        <button onClick={() => navigate(1)}>Go forward 1</button>

        </>
    )
};


export default Home;