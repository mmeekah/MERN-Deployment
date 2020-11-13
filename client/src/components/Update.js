import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { navigate } from '@reach/router'

const Update = (props) => {
    const { id } = props
    const [name, setName] = useState('')
    const [petType, setPetType] = useState('')
    const [description, setDescription] = useState('')
    const [skillOne, setSkillOne] = useState('')
    const [skillTwo, setSkillTwo] = useState('')
    const [skillThree, setSkillThree] = useState('')
    const [errors, setErrors] = useState({})

    
    useEffect(() => {
        axios.get(`http://localhost:8000/api/pets/${id}`)
            .then(res => {
                setName(res.data.name);
                setDescription(res.data.description);
                setPetType(res.data.petType);
                setSkillOne(res.data.skillOne);
                setSkillTwo(res.data.skillTwo);
                setSkillThree(res.data.skillThree);
            })
        // eslint-disable-next-line
    }, [props])


    const updatePet = (e) => {
        e.preventDefault();
        const updatedPet = { name, petType, description, skillOne, skillTwo, skillThree }
        axios.put(`http://localhost:8000/api/pets/${id}`, updatedPet)
            .then(res => {
                console.log(res)
                if (res.data.errors) {
                    setErrors(res.data.errors)
                } else {
                    navigate(`/pets/${id}`)
                }
            })
            .catch(err => console.log(err))
    }


    return (
        <div className="col-sm-3 ">
            <form onSubmit={updatePet}>
                <div className="form-group">
                    {errors.name ? <p className="text-danger">{errors.name.message}</p> : ''}
                    <input
                        type="text"
                        className="form-control"
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    {errors.petType ? <p className="text-danger">{errors.petType.message}</p> : ''}
                    <input
                        type="text"
                        className="form-control"
                        value={petType}
                        onChange={e => setPetType(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    {errors.description ? <p style={{ color: 'red' }}>{errors.description.message}</p> : ""}
                    <textarea
                        rows="4"
                        cols="30"
                        className="form-control"
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                    />
                </div>
                <p>Skills (optional)</p>
                <div className="form-group">
                    <input
                        type="text"
                        className="form-control"
                        value={skillOne}
                        onChange={e => setSkillOne(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <input
                        type="text"
                        className="form-control"
                        value={skillTwo}
                        onChange={e => setSkillTwo(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <input
                        type="text"
                        className="form-control"
                        value={skillThree}
                        onChange={e => setSkillThree(e.target.value)}
                    />
                </div>
                <input type="submit" className="btn btn-warning btn-block" value="Update" />
            </form>
        </div>
    )
}

export default Update