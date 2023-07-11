import React from "react";
import { useNavigate } from "react-router-dom";



function World() {

    const navigate = useNavigate();

    return (
        <>
            <>WORLDLY</>

            <div>
                <button className="navigate-buttons" onClick={() => navigate("/")}>Home</button>
                <button className="navigate-buttons"  onClick={() => navigate(-1)}>Go backward</button>
                <button className="navigate-buttons"  onClick={() => navigate(1)}>Go forward</button>
            </div>
        </>
    )
}


export default World;



///WORLDLY hot sauce - china, brazile, whereever- min 5