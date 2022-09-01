import React from 'react';

const Reserves = (props) => {
    return (
        <div className='Reserves'>
            {props.Reserves.id} {props.Reserves.parking} {props.Reserves.parkingId} {props.Reserves.city} {props.Reserves.clientName} {props.Reserves.vehicule} {props.Reserves.licencesPlate} {props.Reserves.checkin} {props.Reserves.checkout}
        </div>
    );
};

export default Reserves;