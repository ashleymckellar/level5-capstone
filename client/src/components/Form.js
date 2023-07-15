import React, { useState } from 'react'
import Navbar from './Navbar.js'
import axios from "axios"



function Form(props){
    const initInputs = { name: props.name || "", origin: props.origin || ""}
    const [ inputs, setInputs ] = useState(initInputs)
    const [sauces, setSauces] = useState([])

    const handleChange = (e) => {
        const { name, value } = e.target
        setInputs(prevInputs => ({...prevInputs, [name]: value}))
    }

    // const handleSubmit = (e) => {
    //     e.preventDefault()
    //     props.submit(inputs, props._id)
    //     setInputs(initInputs)
    // }

    const handleSubmit = (e) => {
        e.preventDefault();
        addSauce(inputs)
    }

    console.log(sauces)

    const addSauce = (newSauce) => {
        axios.post("/sauces", newSauce)
        .then(res => {
            setSauces(prevSauces => [...prevSauces, res.data])
        })
        .catch(err => console.log(err))
    }

    return (
        <div>
        
    
        
        <form onSubmit={handleSubmit}>
            <input 
            type="text"
            name="name"
            value={inputs.name}
            onChange={handleChange}
            placeholder="Sauce Brand Name" />
            <input 
            type="text"
            name="origin"
            value={inputs.origin}
            onChange={handleChange}
            placeholder="Origin" />
            <button>Submit</button>

        </form>  
    </div>   
    )
    }


export default Form;