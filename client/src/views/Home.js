import React, { useEffect, useState } from 'react'
import axios from 'axios';
import AllPets from '../components/AllPets';



    

const Home = (props) => {
    const [pets, setPets] = useState([])
    const[petType, setPetType]= useState([]);

    const allTypes = new Set(pets.map((pet)=>pet.petType)) ;
    console.log(allTypes);
    

    const filterPets = (petType) =>{

        const sortedPets = pets.filter((pet)=>pet.petType === petType)
        console.log(petType)

        setPets(sortedPets);
    };

    // filterPets={filterPets}

    //FilteringButton
    // const handleBtns =(e)=>{
    //     console.log(e.target.value)
    //     if(e.target.value='all'){
    //         setPetType(pets)
    //     }
    //     else{
    //         const sortedPets = pets.filter((pet)=>pet.petType === petType)
    //     }

    // }


    useEffect(() => {
        axios.get('http://localhost:8000/api/pets')
            .then(res => setPets(res.data))

    }, [])


    return (
        <div>
            <AllPets pets={pets} petType ={petType} filterPets={filterPets}/>
        </div>
    )
}

export default Home;