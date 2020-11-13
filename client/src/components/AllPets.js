import React, { useState, useEffect } from 'react'
import { Link, navigate } from '@reach/router';


// function bubble(arr, key) {
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = 0; j < arr.length - i - 1; j++) {
//             if (arr[j][key] > arr[j + 1][key]) {
//                 [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
//             }
//         }
//     }
// }

const AllPets = (props) => {
    const [shelter, setShelter] = useState(props.pets)
    const [pets, setPets] = useState([])
    const {filterPets, petType}= props;


    useEffect(() => {
        setShelter(props.pets);
    }, [props.pets]);

    return (
        <div>
            <h1>These pets are looking for a new home</h1>

            <button value ='fish' className="btn btn-sm btn-info" onClick={()=>filterPets('Fish')}>Fish</button>
            <button value ='cat' className="btn btn-sm btn-info"onClick={()=>filterPets('Kitty')} >Cat</button>
            <button value ='bird' className="btn btn-sm btn-info" onClick={()=>filterPets('Bird')}>Bird</button>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Type</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {shelter.map((pet, _id) => {
                        return (
                            <tr key={pet._id}>
                                <td>{pet.name}</td>
                                <td>{pet.petType}</td>
                                <td>
                                    <Link to={`/pets/${pet._id}`}>
                                        <button className="btn btn-success">Details</button>
                                    </Link>{' '}
                                    <Link to={`/pets/${pet._id}/edit`}>
                                        <button className="btn btn-warning">Edit</button>
                                    </Link>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default AllPets