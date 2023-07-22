import { React, useState } from 'react';
import SauceList from "./SauceList"

function Form(props) {

    const initInputs = { name: props.name || "", heatRating: props.heatRating || "", origin: props.origin || "",  description: props.description || "", ingredients: props.ingredients || "", imageUrl: props.imageUrl || ""}; //PUT/Update 
    const [inputs, setInputs] = useState(initInputs);
    const { newSauce, hotSauces, addSauce, getSauce } = props
    const [isSubmitted, setIsSubmitted] = useState(false)
    const [validationError, setValidationError] = useState("")

    const handleChange = (e) => {
        const { name, value } = e.target//
        
        const regex = /^[0-9]+$/;
        if(name === "heatRating" && !regex.test(value)) {
            setValidationError("Please enter a valid number.")
            return
        }
        setValidationError("")
        setInputs(prevInputs => ({ ...prevInputs, [name]: value }))
    };

    // const handleSubmit = (e) => {
    //     e.preventDefault()
    //     props.submit(inputs, props._id)
    //     setInputs(initInputs)
    // }

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

    console.log(typeof getSauce)
    const regex = /^[0-9]+$/;
    const isDisabled = !(inputs.name && inputs.origin && regex.test(inputs.heatRating))
   
console.log(validationError)

    console.log(hotSauces)
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
                        name="heatRating"
                        value={inputs.heatRating}
                        onChange={handleChange}
                        placeholder="Scoville Heat Rating" />
                    <input
                        type="text"
                        name="origin"
                        value={inputs.origin}
                        onChange={handleChange}
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
                    <button disabled={isDisabled}>Submit</button>
                </form>
                
                {isSubmitted && (
                    <>
                        <h1>Thank you for submitting a new sauce!</h1>
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