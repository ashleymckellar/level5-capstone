import React from "react";


function SauceList(props) {
    return (
        <div className="col-sm-3 col-lg-3 img-fluid rounded mx-auto d-block">

            {/* Displays name, origin, heatRating, description, ingredient,and imageUrl - whick come as props from SauceListContainer.js */}
            <h1>brand name:{props.name}</h1>
            <h4>birth place: {props.origin}</h4>
            <p>Scoville rating:{props.heatRating}</p>
            <p>{props.description}</p>
            <p>Ingredients: {props.ingredients}</p>
            <img src={props.imageUrl} />
        </div>
    )
};

export default SauceList;