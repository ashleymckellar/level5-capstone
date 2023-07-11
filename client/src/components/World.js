import React from "react";
import { useNavigate } from "react-router-dom";



function World() {

    const navigate = useNavigate();

    return (
        <>
        <>WORLDLY</>

        <button onClick={() => navigate("/")}>Home</button>
        <button onClick={() => navigate(-1)}>Go backwards</button>
        <button onClick={() => navigate(1)}>Go forward 1</button>
        <button onClick={() => navigate("/form")}>Submit New Sauce</button>
        </>
    )
}


export default World;



///WORLDLY hot sauce - china, brazile, whereever- min 5