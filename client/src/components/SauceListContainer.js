import axios from "axios";
import { React, useEffect, useState } from "react";
import SauceList from "./SauceList";
import { useNavigate } from 'react-router-dom';
import Form from './Form'

function SauceListContainer(props) {
    const navigate = useNavigate();
    const { newSauce, hotSauces, setHotSauces, getSauce } = props
    // const [hotSauces, setHotSauces] = useState([]);

    // function getSauce() {
    //   axios
    //     .get("/sauces")
    //     .then(response => setHotSauces(response.data))
    //     .catch(error => console.log(error.response.data.errMsg));
    // }
    // function getSauce() {
    //     axios.get("/sauces", { params: { timestamp: Date.now() } })
    //         .then(response => setHotSauces(response.data))
    //         .catch(error => console.log(error));
    // }  MOVED TO APP.JS SO THAT IT CAN BE SHARED WITH SIBLING COMPONENT, FORM.JS

    // function addSauce(newSauce) {
    //     axios.post("/sauces", newSauce)
    //         .then(response => {
    //             setHotSauces(prevHotSauces => [...prevHotSauces, response.data])
    //         })
    //         .catch(error => console.log(error))
    // } MOVED TO APP.JS IN ORDER TO SHARE WITH SIBLING COMPONENT, FORM

    // console.log(hotSauces)

    useEffect(() => {
        getSauce();
    }, []);

    return (
<>
        {/* <div className='navigate-buttons'>
                <button className="navigate-buttons"  onClick={() => navigate("/")}>Home</button>
                <button className="navigate-buttons"  onClick={() => navigate(-1)}>Go backward</button>
                <button className="navigate-buttons"  onClick={() => navigate(1)}>Go forward</button>
                
            </div> */}
            <h1>Sauces</h1>
            {hotSauces.map(sauce => (
                <SauceList {...sauce} key={sauce._id} />
            ))}
        </>
    );
};


export default SauceListContainer;
