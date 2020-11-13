import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { navigate } from '@reach/router';

const OnePet = (props) => {
    const [pets, setPets] = useState([])
    const [pet, setPet] = useState({})


    

    useEffect(() => {
        axios.get(`http://localhost:8000/api/pets/${props.id}`)
            .then(res => { setPet({ ...res.data }) })
        // eslint-disable-next-line
    }, [props])
    const removeFromDom = _id => {
        setPets(pets.filter(pet => pet._id !== _id));
    }



    const adoptPet = (_id) => {
        axios.delete(`http://localhost:8000/api/pets/${_id}`)
            .then(res => {
                console.log(res)
                removeFromDom(_id)
                navigate('/')
            })
            .catch(err => console.log(err))
    }




    return (

        <div className="col-sm-4 mb-3">

            <div className="card text-white bg-secondary mb-3">
                <div className="card-header">Details about: {pet.name}</div>
                <div className="card-body">
                    <p className="card-text"><em>Type: {pet.petType}</em></p>
                    <p className="card-text">Description: {pet.description}</p>
                    <p className="card-text">Skills:</p>

                    <ul className="card-text">
                        <li>{pet.skillOne}</li>
                        <li>{pet.skillTwo}</li>
                        <li>{pet.skillThree}</li>
                    </ul>
                </div>
                <div className="card-footer">
                    <button className="btn btn-info" onClick={(e) => { adoptPet(pet._id) }}>Adopt</button>
                </div>
            </div>
        </div>
    )
}

export default OnePet