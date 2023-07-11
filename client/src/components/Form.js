import React, { useState } from 'react'



function Form(props){
    const initInputs = { name: props.name || "", origin: props.origin || ""}
    const [ inputs, setInputs ] = useState(initInputs)

    const handleChange = (e) => {
        const { name, origin } = e.target
        setInputs(prevInputs => ({...prevInputs, [name]: origin}))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        props.submit(inputs, props._id)
        setInputs(initInputs)
    }

    return(
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
            <button>{props.btnText}</button>





        </form>
        
        
    )
};


export default Form;