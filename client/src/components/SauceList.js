import React from "react";
import { useNavigate } from "react-router-dom";




function SauceList(props){

    const navigate = useNavigate();


    return(
        <div>
            <h1>Sauces</h1>
            {/* HAVE the hot sauces display */}
            <h1>brand name:{props.name}</h1>
            <h4>birth place: {props.origin}</h4>
            <p>Scoville rating:{props.heatRating}</p>
            <p>Ingredients: {props.ingredients}</p>

            <button onClick={() => navigate("/")}>Home</button>
            <button onClick={() => navigate(-1)}>Go backwards</button>
            <button onClick={() => navigate(1)}>Go forward 1</button>

        </div>
    )
};

export default SauceList;