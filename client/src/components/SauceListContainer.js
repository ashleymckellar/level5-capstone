import { React, useEffect, useState } from "react";
import SauceList from "./SauceList";


function SauceListContainer(props) {

    const { hotSauces, setHotSauces, getSauce } = props

    useEffect(() => {
        getSauce();
        
    }, []);

    return (
        <>
            <h1>Sauces</h1>
            {hotSauces.map(sauce => (// JSX inside curly brackets. map over to iterate over each sauce object in hotSauce(State) array
            //sauce - callback function for the map method. iterates each sauce(one at a time)
                <SauceList {...sauce} key={sauce._id} />//This JSX renders a SauceList component for each sauce in hotSauces array
                //{...sauce} - spread operator passes all props of the 'sauce' onject - name, heatRating, description, etc... -- will pas as individual props name={props.name} in SauceList.js
            ))}
        </>
    );
};


export default SauceListContainer;