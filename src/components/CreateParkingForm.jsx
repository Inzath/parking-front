import axios from 'axios';
import React, { useEffect, useState } from 'react';

const CreateParkingForm = (props) => {
 const [name,setName] = useState('');
 const [type,setType] = useState('');
 const [city,setCity] = useState('');

 
useEffect(() => {
console.log(name)
}, [name])

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(e.target)
        axios.post("http://localhost:8080/parkings", {
            "name": name,
            "type":type,
            "city":city
        }).then((res) => console.log(res) )
        setName('')
        setType('')
        setCity('')
        window.location = '/parkings'    
    }   



    return (
        <div className="formulaire" >
            <form onSubmit={(e) => handleSubmit(e)} >
                <p>
                    <label htmlFor="nom">Nom parking : </label>
                    <input type="text" name="name" value={name} onChange={(e)=> setName(e.target.value) }  required />
                </p>
                <p>
                    <label htmlFor="type">Type :</label>
                    <input type="text" name="type" value={type} onChange={(e)=> setType(e.target.value) } required />
                </p>

                <p>
                    <label htmlFor="city">City : </label>
                    <input type="text" name="city" value={city} onChange={(e) => setCity(e.target.value)} required />
                </p>
               
                <button type="submit" className='btn btn-outline'>Envoyer</button>

            </form>
        </div>
    );
};

export default CreateParkingForm