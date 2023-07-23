import React from "react";
// import { useNavigate } from "react-router-dom";




function SauceList(props) {
    // const navigate = useNavigate();
    return (
        <div className="col-sm-3 col-lg-3 img-fluid rounded mx-auto d-block">
            
            {/* <h1>Sauces</h1> */}
            {/* HAVE the hot sauces display */}
            <h1>brand name:{props.name}</h1>
            <h4>birth place: {props.origin}</h4>
            <p>Scoville rating:{props.heatRating}</p>
            <p>{props.description}</p>
            <p>Ingredients: {props.ingredients}</p>
            <img src={props.imageUrl}/> 
        </div>
    )
};

export default SauceList;