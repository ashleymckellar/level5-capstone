import { React, useEffect, useState } from "react";
import WorldSauce from "./WorldSauce";



function WorldSauceContainer(props) {

    const { foreignSauce, getForeignSauce } = props

    useEffect(() => {
        getForeignSauce();
    }, []);

    return(
        <>
        {foreignSauce.map(sauce => (
                <WorldSauce {...sauce} key={sauce._id} />
            ))}

        </>
    )
};



export default WorldSauceContainer;


//TAKING THIS ONE OUT