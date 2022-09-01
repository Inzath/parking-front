import axios from 'axios';
import Garages from '../components/Garages';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


const Parkings = () => {
  const[data, setData] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8080/parkings")
             .then((res) => setData(res.data));
            }, []);
            console.log(data)
                
const handleChange = (e) => {
   
 
    axios.post("http://localhost:8080/parkings", {data}).then((res) => 
    console.log(res) )
    e.preventDefault();
    window.location = '/parkings'    
}   


    return (
        <div className='acceuil--' > 
            <h1> Nos parkings</h1>
            <br />
            <Link to='/createparking' className=''   >
                <button className='ajouter'>
                    Ajouter un Parking
                </button>          
            </Link> 

            <Link to='/CreateReservation' className=''   >
                <button className='ajout'>
                    Ajouter une reservation
                </button>          
            </Link> 

            <ul className='parc'>
            
                {
                  data.map((parking, index) => (
                     < Garages key={index} parking={parking} />
                  ))                    
                }
            </ul>
            
        </div>
    );
};

export default Parkings;