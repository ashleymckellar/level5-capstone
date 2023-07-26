import { React, useEffect, useState } from "react";
import SauceList from "./SauceList"; // imported so that each individual prop/s can be rendered/transferred onto SauceList.js


function SauceListContainer(props) {

    const { hotSauces, setHotSauces, getSauce } = props // function, State comes from Parent Component App.js

    useEffect(() => { // calls getSauce() function which contains the API information for all of the hot sauce/s but runs it only once due to the empty array[]
        getSauce();
    }, []);

    return (
        <>
            <h1>Sauces</h1>
            {hotSauces.map(sauce => (// JSX inside curly brackets. map over to iterate over each sauce object in hotSauce(State) array that is contained in the Parent Component App.js
            //sauce - callback function for the map method. iterates each sauce(one at a time)
                <SauceList {...sauce} key={sauce._id} />//This JSX renders a SauceList component for each sauce in hotSauces array
                //{...sauce} - spread operator passes all props of the 'sauce' onject - name, heatRating, description, etc... -- will pas as individual props name={props.name} in SauceList.js
            ))}
        </>
    );
};


export default SauceListContainer;