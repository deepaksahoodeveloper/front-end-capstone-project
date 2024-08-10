// BookingForm.js
import React from 'react';
import './BookingForm.css';

const BookingForm = ({ formData, availableTimes, handleChange, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="date">Choose date</label>
      <input type="date" id="date" value={formData.date} onChange={handleChange} />
      
      <label htmlFor="time">Choose time</label>
      <select id="time" value={formData.time} onChange={handleChange}>
        {availableTimes.map((time) => (
          <option key={time} value={time}>{time}</option>
        ))}
      </select>
      
      <label htmlFor="guests">Number of guests</label>
      <input 
        type="number" 
        id="guests" 
        value={formData.guests} 
        min="1" 
        max="10" 
        onChange={handleChange} 
      />
      
      <label htmlFor="occasion">Occasion</label>
      <select id="occasion" value={formData.occasion} onChange={handleChange}>
        <option value="Birthday">Birthday</option>
        <option value="Anniversary">Anniversary</option>
      </select>
      
      <input type="submit" value="Make Your reservation" />
    </form>
  );
};

export default BookingForm;
