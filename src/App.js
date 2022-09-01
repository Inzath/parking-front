import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from './components/Navigation';
import Home from './pages/Home';
import Parkings from './pages/Parkings';
import Reservations from './pages/Reservations';
import "./App.css"
import CreateParking from"./pages/CreateParking";
import UpdateParking from "./components/UpdateParking"
import OneParkingReservationsPages from './pages/OneParkingReservationsPages';
import CreateReservationForm from './components/CreateReservationForm';

const App = () => {
  return (

    <div>

      <BrowserRouter>
      <Navigation />
        <Routes>
          <Route path={"/"} element={<Home />} />

          <Route path="/parkings/:id" element={ <OneParkingReservationsPages />} />
          <Route path={"/parkings"} element={ < Parkings />} >
            <Route path="deleteparking/:id" element={ < Parkings />} />
          </Route>

          <Route path="/parkings/updateparking/:id" element={ <UpdateParking />} />

          <Route path={"/reservations"} element={ < Reservations/>} />
          <Route path={"/createparking"} element={ < CreateParking/>} />
          <Route path="*" element={ < Home />} />
          <Route path="/deleteparking/*" element={ < Parkings />} />
          <Route path={"/createreservation"} element={ <CreateReservationForm /> } />

        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;