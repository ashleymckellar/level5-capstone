import axios from "axios";
import { React, useEffect, useState } from "react";
import SauceList from "./SauceList";




function SauceListContainer() {
    const [hotSauces, setHotSauces] = useState([]);

    // function getSauce() {
    //   axios
    //     .get("/sauces")
    //     .then(response => setHotSauces(response.data))
    //     .catch(error => console.log(error.response.data.errMsg));
    // }
    function getSauce() {
        axios.get("/sauces", { params: { timestamp: Date.now() } })
            .then(response => setHotSauces(response.data))
            .catch(error => console.log(error.response.data.errMsg));
    }


    useEffect(() => {
        getSauce();
    }, []);

    return (
        <>
            {hotSauces.map(sauce => (
                <SauceList {...sauce} key={sauce.name} />
            ))}
        </>
    );
};


export default SauceListContainer;