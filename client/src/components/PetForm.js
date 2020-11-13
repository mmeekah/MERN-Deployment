import React, { useState } from 'react';
import axios from 'axios';
import { navigate } from '@reach/router';

const PetForm = (props) => {
    const [name, setName] = useState('')
    const [petType, setPetType] = useState('')
    const [description, setDescription] = useState('')
    const [skillOne, setSkillOne] = useState('')
    const [skillTwo, setSkillTwo] = useState('')
    const [skillThree, setSkillThree] = useState('')
    const [errors, setErrors] = useState({})

    const onSubmitHandler = (e) => {
        e.preventDefault();
        const newPet = { name, petType, description, skillOne, skillTwo, skillThree }
        axios.post('http://localhost:8000/api/pets', newPet)
            .then(res => {
                console.log(res)
                if (res.data.errors) {
                    setErrors(res.data.errors)
                }
                else {
                    navigate('/')
                }
            })
            .catch(err => console.log(err))
    }


    return (
        <div className="col-sm-3 ">
            <form onSubmit={onSubmitHandler}>
                <div className="form-group">
                    {errors.name ? <p className="text-danger">{errors.name.message}</p> : ''}
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Pet Name..."
                        onChange={e => setName(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    {errors.petType ? <p className="text-danger">{errors.petType.message}</p> : ''}
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Pet Type..."
                        onChange={e => setPetType(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    {errors.description ? <p style={{ color: 'red' }}>{errors.description.message}</p> : ""}
                    <textarea
                        rows="4"
                        cols="30"
                        className="form-control"
                        placeholder="Pet Decription..."
                        onChange={e => setDescription(e.target.value)}
                    />
                </div>
                <p>Skills (optional)</p>
                <div className="form-group">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Skill 1..."
                        onChange={e => setSkillOne(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Skill 2..."
                        onChange={e => setSkillTwo(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Skill 3..."
                        onChange={e => setSkillThree(e.target.value)}
                    />
                </div>
                <input type="submit" className="btn btn-warning btn-block" value="Add Pet" />
            </form>
        </div>
    )
}

export default PetForm