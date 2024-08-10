import React, { useReducer, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Component/Header';
import Main from './Component/Main';
import Footer from './Component/Footer';
import BookingForm from './Component/BookingForm';
import './Component/BookingForm.css';
import ConfirmedBooking from './Component/ConfirmedBooking';

const initializeTimes = () => {
  return ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
};

const updateTimes = (state, action) => {
  switch (action.type) {
    case 'update':
      return initializeTimes();
    default:
      throw new Error();
  }
};

function App() {
  const [formData, setFormData] = useState({
    date: '',
    time: '',
    guests: 1,
    occasion: '',
  });

  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });

    if (id === 'date') {
      dispatch({ type: 'update', payload: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<><Header /> <Main formData={formData} availableTimes={availableTimes} handleChange={handleChange} handleSubmit={handleSubmit} /> <Footer /> </>} />
        <Route path="/book" element={<BookingForm formData={formData} availableTimes={availableTimes} handleChange={handleChange} handleSubmit={handleSubmit} />} />
        <Route path="/confirmed" element={<ConfirmedBooking />} />
      </Routes>
    </Router>
  );
}

export default App;
