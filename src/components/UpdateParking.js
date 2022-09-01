import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const UpdateParking = () => {
const params = useParams();
const [name, setName]= useState();
const [type, setType] = useState();
const [city, setCity] = useState();

useEffect(() => {
    axios.get("http://localhost:8080/parkings/" + params.id)
    .then((res) => { 
        console.log(res)
        setName(res.data.name); 
        setCity(res.data.city);
        setType(res.data.type);
    });
    console.log('res')

  },  [params.id])


const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target)
       axios.patch("http://localhost:8080/parkings/" + params.id,{
        "name":name,
        "type":type,
        "city":city,
       }).then((res) => console.log(res) ) 
 setName('')
 setType('')
 setCity('')
 window.location = '/parkings'    
}   

    
    return (
        <div>
            {name}
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
               
                <button type="submit" className='btn btn-outline'>Modifier</button>

            </form>
        </div>
        </div>
    );
    }
export default UpdateParking;