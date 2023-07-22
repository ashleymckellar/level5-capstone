import React from "react";
// import { useNavigate } from "react-router-dom";




function SauceList(props) {
    // const navigate = useNavigate();
    return (
        <div className="col-sm-3 col-lg-3 img-fluid rounded mx-auto d-block">
             <div className="card col mb-5">
                <div className="h-350">
                    <div className="card-body p-4">
                        <div className="text-center">
            {/* <h1>Sauces</h1> */}
            {/* HAVE the hot sauces display */}
                            <h1 className="fw-bolderc customh5">brand name:{props.name}</h1>
                            <h4 className="card-text">birth place: {props.origin}</h4>
                            <p>Scoville rating:{props.heatRating}</p>
                            <p>{props.description}</p>
                            <p>Ingredients: {props.ingredients}</p>
                            <img src={props.imageUrl}className="card-img-top cardsize"/> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default SauceList;