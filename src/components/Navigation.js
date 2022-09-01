import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return (
        <nav className="navigation">
            <ul className="nav">
                <NavLink to="/" className={(nav) => (nav.isActive ?"nav-active" : "")} >
                    <li className="nav--link">Accueil</li>
                </NavLink>
                <NavLink to="/parkings">
                    <li className='nav--link'>Parkings</li>
                </NavLink>
                <NavLink to="/reservations" className={(nav) => (nav.isActive ?"nav-active" : "")} >
                    <li className='nav--link'>Reservations</li>
                </NavLink>
            </ul>
        </nav>
    );
};

export default Navigation;