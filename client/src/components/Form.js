import { React, useState } from 'react';

function Form(props) {

    const initInputs = { name: props.name || "", heatRating: props.heatRating || "", origin: props.origin || "",  description: props.description || "", ingredients: props.ingredients || "", imgUrl: props.imgUrl || ""}; //PUT/Update 
    const [inputs, setInputs] = useState(initInputs);
    const { newSauce, hotSauces, addSauce } = props

    const handleChange = (e) => {
        const { name, value } = e.target//
        setInputs(prevInputs => ({ ...prevInputs, [name]: value }))
    };

    // const handleSubmit = (e) => {
    //     e.preventDefault()
    //     props.submit(inputs, props._id)
    //     setInputs(initInputs)
    // }

    const handleSubmit = (e) => {
        e.preventDefault()
        // props.setNewSauce({name: "hot", origin: "usa"})
        props.setHotSauces((prevHotSauces) =>{
            console.log(prevHotSauces)
            return [...prevHotSauces, newSauce]
        })
        addSauce()
    };

    console.log(hotSauces)
    return (
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
    )
    }


export default Form;