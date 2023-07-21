import { React, useState } from 'react';
import SauceList from "./SauceList"

function Form(props) {

    const initInputs = { name: props.name || "", heatRating: props.heatRating || "", origin: props.origin || "",  description: props.description || "", ingredients: props.ingredients || "", imgUrl: props.imgUrl || ""}; //PUT/Update 
    const [inputs, setInputs] = useState(initInputs);
    const { newSauce, hotSauces, addSauce, getSauce } = props
    const [isSubmitted, setIsSubmitted] = useState(false)

    const handleChange = (e) => {
        const { name, value } = e.target//
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
    };

    console.log(hotSauces)
    return (
        <div>
            {!isSubmitted? (
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
                        name="imgUrl"
                        value={inputs.imgUrl}
                        onChange={handleChange}
                        placeholder="Image URL" />
                    <button>Submit</button>
                </form>
            ) : (
                
                <>
                <h1>Thank you for submitting a new sauce!</h1>
                <h1>Sauces</h1>
                {hotSauces.map(sauce => (
                    <SauceList {...sauce} key={sauce._id} />
            ))}
            </>
            )}
        </div>
    )
    }

// will make the "thank you" message a modal using bootstrap later on
//also want to add regex validation to the form for the required fields, and to make scoville field to be
//numeric only.
//also need to make the form not disappear upon submission, but clear out fields instead 

export default Form;