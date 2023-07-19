// import axios from "axios";
import React from "react";
// import { useNavigate } from "react-router-dom";
// import SauceList from "./SauceList";



function WorldSauce(props) {
    return (
        <>
        <>WORLDLY</>
        <h1>brand name:{props.name}</h1>
            <h4>birth place: {props.origin}</h4>
            <p>Scoville rating:{props.heatRating}</p>
            <p>Ingredients: {props.ingredients}</p>
        </>
    )
}



export default WorldSauce;



///WORLDLY hot sauce - china, brazile, whereever- min 5
//TAKING THIS ONE OUT