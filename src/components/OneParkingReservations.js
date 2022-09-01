import React, { useState, useEffect } from 'react';
import {useParams}  from 'react-router-dom';
import axios from 'axios';


const OneParkingReservations = (props) => {
  const [data, setData] = useState ([]);
  const params = useParams ();
  //props.preventDefault();
  //console.log(props.target)

  useEffect(() => {
    axios.get("http://localhost:8080/parkings/"+params.id+"/reservations")
         .then((res) => setData(res.data));
        }, [params.id]);
        console.log(data)

return (
        <div className='One'>

{
                  data.map((reservation, index) => (
                    <div>
                      {reservation.clientName}
                    </div>
                  ))                    
                }
        </div>
       );

};
export default OneParkingReservations;




