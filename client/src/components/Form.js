import { React, useState } from 'react';
import SauceList from "./SauceList"
import "bootstrap/dist/css/bootstrap.min.css"
// import { Button } from "react-bootstrap"

function Form(props) {

    const initInputs = { name: props.name || "", heatRating: props.heatRating || "", origin: props.origin || "",  description: props.description || "", ingredients: props.ingredients || "", imageUrl: props.imageUrl || ""}; //PUT/Update 
    const [inputs, setInputs] = useState(initInputs);
    const { newSauce, hotSauces, addSauce, getSauce } = props
    const [isSubmitted, setIsSubmitted] = useState(false)
    const [validationError, setValidationError] = useState("")
    const [requiredFieldError, setRequiredFieldError] = useState("")

    const handleChange = (e) => {
        const { name, value } = e.target
        
        const regex = /^[0-9]+$/;
        console.log(name, value)
        if(name === "heatRating" && !regex.test(value)) {
            setValidationError("Please enter a valid number.")
            setRequiredFieldError("")
            return
        }


    
        // setValidationError("");
        //  else if(name === "name" && value === "" || name === "origin" && value === "") 
        //     {
        //     setRequiredFieldError("Please enter a value in required fields.")
        //     setValidationError("")
        //     console.log("test")
            
        //     //return
        // } else {
        //     setValidationError("");
        //     setRequiredFieldError("")
        // }
        setInputs(prevInputs => ({ ...prevInputs, [name]: value }))
    };

   

    console.log(inputs)
    const handleSubmit = (e) => {
        e.preventDefault()
        
        props.addSauce(inputs)
        getSauce()
        setIsSubmitted(true)
        setInputs({ name: "", 
                    heatRating: "", 
                    origin:  "",  
                    description:  "",  
                    ingredients: "", 
                    imageUrl:  ""});
        
    };

    const regex = /^[0-9]+$/;
    const isDisabled = !(inputs.name && inputs.origin && regex.test(inputs.heatRating))
    // const isError = !(inputs.name && inputs.origin)

    const onBlur = (e)=> {
        
        const {name, value} = e.target
        console.log(name, value)
        if (value === "") {
            setRequiredFieldError("Please enter a value in required fields.")

        }

    }
   
    return (
        <div>
            
                <form onSubmit={handleSubmit}>

                    <input
                        type="text"
                        name="name"
                        value={inputs.name}
                        onChange={handleChange}
                        onBlur={onBlur}
                        placeholder="Sauce Brand Name" />
                    <input
                        type="text"
                        name="heatRating"
                        value={inputs.heatRating}
                        onChange={handleChange}
                        placeholder="Scoville Heat Rating" />
                    <input
                        type="text"
                        name="origin"
                        value={inputs.origin}
                        onChange={handleChange}
                        onBlur={onBlur}
                        placeholder="Origin" />
                    <input
                        type="text"
                        name="description"
                        value={inputs.description}
                        onChange={handleChange}
                        placeholder="Description" />
                    <input
                        type="text"
                        name="ingredients"
                        value={inputs.ingredients}
                        onChange={handleChange}
                        placeholder="Ingredients" />
                    <input
                        type="text"
                        name="imageUrl"
                        value={inputs.imageUrl}
                        onChange={handleChange}
                        placeholder="Image URL" />
                        {validationError && <p style={{color: 'red'}}>{validationError}</p>}
                        {isError && <p style={{color: 'red'}}>{requiredFieldError}</p>}
                    <button disabled={isDisabled}>Submit</button>
                </form>
                
                {isSubmitted && (
                    <>
                        <h1 style={{color: 'orange'}}>Thank you for submitting a new sauce!</h1>
                        <h1>Sauces</h1>
                        {hotSauces.map(sauce => (
                    <       SauceList {...sauce} key={sauce._id} />
            ))}
            </>
            )}
        </div>
    )
    }

// will make the "thank you" message a modal using bootstrap later on
//will try to fix issue where form validation error isn't showing up



export default Form;