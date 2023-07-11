import React, { useState } from 'react'
import Form from '.Form'

export default function Sauce(props) {
    const { name, origin, _id } = props
    const [editToggle, setEditToggle] = useState(false)

    return (
        <div className='sauce'>
            { !editToggle ? 
            <>
            <h1>Name: {name}</h1>
            <p>Origin: {origin}</p>
            <button
                className='delete-btn'
                onClick={() => props.deletedSauce(_id)}>
                Delete
            </button>
            <button className='edit-btn'
                onClick={() => setEditToggle(prevToggle => !prevToggle)}>
                Edit
            </button>
        </>
        :
        <>
        <Form
            name={name}
            origin={origin}
            btnText="Submit Edit"
            submit={props.editSauce}
            _id= {_id}
        />
        <button
            onClick={()=> setEditToggle(prevToggle => !prevToggle)}>
            Close
        </button>
        </>
        }
        </div>
    )
}