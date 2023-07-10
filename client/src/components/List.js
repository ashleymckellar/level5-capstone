import React from 'react';
import { useNavigate } from 'react-router-dom';



function List(){

const navigate = useNavigate();

    return(
        <>
        <h1>LIST</h1>


        <button onClick={() => navigate("/")}>Home</button>
        <button onClick={() => navigate(-1)}>Go backwards</button>
        <button onClick={() => navigate(1)}>Go forward 1</button>

        </>
    )
};



export default List;