import { React, useState } from 'react';
import SauceList from "./SauceList" // imported so we can export any Changes/Added or if State hotSauces the stayed the same; works with Changes/Added const initInputs = { name: props.name || "", etc... 

import "bootstrap/dist/css/bootstrap.min.css"

function Form(props) {

    const { newSauce, hotSauces, addSauce, getSauce } = props // State,function comes from App.js; from Parent to Child Component

    const initInputs = { name: props.name || "", heatRating: props.heatRating || "", origin: props.origin || "", description: props.description || "", ingredients: props.ingredients || "", imageUrl: props.imageUrl || "" }; //PUT/Update 
    const [inputs, setInputs] = useState(initInputs);//updates State for initInputs Object/s
    const [isSubmitted, setIsSubmitted] = useState(false)// Set to false and when true or setIsSubmitted is actived on line 37(if not changed) --props.addSauce(inputs)...setIsSubmitted(true)... which has the data that is being updated
    const [validationError, setValidationError] = useState("")
    const [requiredFieldError, setRequiredFieldError] = useState("")

    const handleChange = (e) => {
        const { name, value } = e.target //targets the input/s field element that holds name, value attribute/s; name = used to id wich input field value is being changed, value = represents current value of the input field after the change 
        const regex = /^[0-9]+$/;// regex - only allows numbers to be entered for heatRating
        console.log(name, value)
        if (name === "heatRating" && !regex.test(value)) { // checks to see if name="heatRating" and value match the regular pattern for numbers ins being used
            setValidationError("Please enter a valid number.")
            setRequiredFieldError("") // clears errors if numbers were entered as value
            return
        }
        setInputs(prevInputs => ({ ...prevInputs, [name]: value })) // if no errors then heatRating will be updated 
    };

    console.log(inputs)

    const handleSubmit = (e) => { // handleSubmit = event handler used for submitting form
        e.preventDefault() // Stops page refresh when form is submitted

        props.addSauce(inputs) // function addSauce is called from Parent(App.js) Component through props; which adds new sauce/s or data (contained in the inputs object)
        getSauce() // function from Parent Component(App.js) in charge of fetching data from the API/database, updates data and renders in SauceList.js Component
        setIsSubmitted(true)  // Changes State from false to true which triggers conditional render on line 119 - isSubmitted && ...
        setInputs({ // Resets the State of the `inputs` variable to an empty object/s; By resetting it clears input fields on the form after submitting
            name: "",
            heatRating: "",
            origin: "",
            description: "",
            ingredients: "",
            imageUrl: ""
        });
    };

    const regex = /^[0-9]+$/;
    const isDisabled = !(inputs.name && inputs.origin && regex.test(inputs.heatRating)) // disables button if name, origin and heatRating(doesn't use ONLY numbers) is missing text or numbers
    const isError = !(inputs.name && inputs.origin)

    const onBlur = (e) => {

        const { name, value } = e.target
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
                    name="name" // id the input field uniquely; important when handling form submissions/managing form data in React Component
                    value={inputs.name} // binds with input.name State variable which updates with new value in the State
                    onChange={handleChange} // calls handleChange function when value changes 
                    onBlur={onBlur} // when click/tab out of input field without putting in correct value - text 
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

{/* Display error message for name,heatRating, origin if nothing is typed in which then disables the button */}
                {validationError && <p style={{ color: 'red' }}>{validationError}</p>} 
                {isError && <p style={{ color: 'red' }}>{requiredFieldError}</p>}
                <button disabled={isDisabled}>Submit</button>
            </form>
            {/* isSubmitted is the State which is false but when there is an update/Added(true) this will initiate and added to hotSauce State and SauceList */}
            {isSubmitted && (
                <>
                    <h1 style={{ color: 'orange' }}>Thank you for submitting a new sauce!</h1>
                    <h1>Sauces</h1>
                    {hotSauces.map(sauce => ( // map over hotSauces (which is in Parent Component App.js) array and renders a SauceList Component for each object
                        <       SauceList {...sauce} key={sauce._id} /> //{...sauce} - spreads the properties of each sauce object as rpops to SauceList.js Component to access the properties of each sauce individually the sauce.id gives each one a unique identifier
                    ))}
                </>
            )}
        </div>
    )
}

// will make the "thank you" message a modal using bootstrap later on
//will try to fix issue where form validation error isn't showing up



export default Form;