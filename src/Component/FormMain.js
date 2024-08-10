import React, { useReducer, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BookingForm from './BookingForm';

// Function to fetch available times for today's date
const initializeTimes = () => {
  const today = new Date().toISOString().split('T')[0]; // Get today's date in YYYY-MM-DD format
  return fetchAPI(today); // Fetch available times for today
};

// Reducer function to update available times based on the selected date
const updateTimes = (state, action) => {
  switch (action.type) {
    case 'update':
      return fetchAPI(action.payload); // Fetch available times for the selected date
    default:
      throw new Error('Unknown action type');
  }
};

const Main = () => {
  // State to manage form data
  const [formData, setFormData] = useState({
    date: '',
    time: '',
    guests: 1,
    occasion: '',
  });

  // Reducer to manage available times
  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());

  // useNavigate hook for programmatic navigation
  const navigate = useNavigate();

  // Handle changes in form fields
  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });

    if (id === 'date') {
      dispatch({ type: 'update', payload: value }); // Update available times when date changes
    }
  };

  // Function to handle form submission
  const submitForm = (formData) => {
    return submitAPI(formData); // Assuming submitAPI returns true if successful, false if not
  };

  // Handle form submit event
  const handleSubmit = (e) => {
    e.preventDefault();

    if (submitForm(formData)) {
      navigate('/confirmed'); // Navigate to the confirmation page if submission is successful
      console.log("Form submitted successfully");
    } else {
      console.log("Form submission failed");
      alert("There was an issue with your reservation. Please try again.");
    }
  };

  return (
    <div>
      <BookingForm
        formData={formData}
        availableTimes={availableTimes}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />
    </div>
  );
};

export default Main;
