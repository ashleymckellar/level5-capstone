import { React, useEffect, useState } from "react";
import SauceList from "./SauceList";


function SauceListContainer(props) {

    const { newSauce, hotSauces, setHotSauces, getSauce } = props

    useEffect(() => {
        getSauce();
    }, []);

    return (
        <>
            <h1>Sauces</h1>
            {hotSauces.map(sauce => (
                <SauceList {...sauce} key={sauce._id} />
            ))}
        </>
    );
};


export default SauceListContainer;