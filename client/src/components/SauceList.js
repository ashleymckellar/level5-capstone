import React from "react";
import { useNavigate } from "react-router-dom";




function SauceList(props){

    const navigate = useNavigate();


    return(
        <>
        <h1>{props.name}</h1>
        <p>{props.heatRating}</p>
        </>
    )
};

export default SauceList;