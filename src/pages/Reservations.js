
import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Reservations = () => {
const[data, setData] = useState([]);


    useEffect(() => {
        axios.get("http://localhost:8080/reservations")
           .then((res) => setData(res.data));
    }, []);
    
    return (
        <div className='popo'  >
            <h1>Nos reservations</h1>
            <ul>
                {
                  data.map((reservations, index) => (
                    <li key={index}>{reservations.id} {reservations.parking} {reservations.parkingId} {reservations.city} {reservations.clientName} {reservations.vehicle} {reservations.licensePlate} {reservations.checkin} {reservations.checkout}  </li>
                  ))  
                }
            </ul>
        </div>
    );
};

export default Reservations;