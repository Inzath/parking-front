import React, { useState, useEffect } from 'react';
import axios from 'axios';


const CreateReservationForm = (props) => {
    const [data, setData] = useState([]);
    const [city, setCity] = useState('');
    const [client, setClient] = useState('');
    const [debut, setDebut] = useState('');
    const [fin, setFin] = useState('');
    const [parkingId, setParkingId] = useState('');


    useEffect(() => {
        axios.get("http://localhost:8080/parkings")
             .then((res) => setData(res.data));
            }, []);
            
    return (

        
        <div>
            <form className='reserver-' >
                <div>
                    <select className='' onChange={(e) => setParkingId (e.target.value)}>

                   { data.map((parkings, index) => (
                  <option key={index} value={parkings._id} className="" > {parkings.name}  </option>
                  )) }
                    </select>
                </div>
                <div>
                    <label htmlFor="city">City :</label>
                    <input type="text" name="city" value={city} onChange={(e) => setCity(e.target.value)} required />
                </div>

                <div>
                    <label htmlFor="clientName">Nom Client : </label>
                    <input type="text" name="client" value={client} onChange={(e) => setClient(e.target.value)} required />
                </div>
                <div>
                    <label htmlFor="checkin"> date Début : </label>
                    <input type="date" name="debut" value={debut} onChange={(e) => setDebut(e.target.value)} required />
                </div>
                <div>
                    <label htmlFor="checkout">Date Fin : </label>
                    <input type="date" name="fin" value={fin} onChange={(e) => setFin(e.target.value)} required />
                </div>

                <button type="submit" className='envoi'>Envoyer</button>

            </form>
        </div>
    );
};

export default CreateReservationForm;