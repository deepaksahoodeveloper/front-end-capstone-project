import React from 'react';
import './HeroSection.css';
import Restaurant_Photo from "../Images/restaurant.jpg"; 

function HeroSection() {
  return (
    <div className="hero">
      <div className="hero-content">
        <h1>Little Lemon</h1>
        <p className="location">Chicago</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <a href="/book" className="btn-book">Book a Table</a>
      </div>
      <img src={Restaurant_Photo} alt="Little Lemon Restaurant" className="hero-image" /> {/* Replace with actual image path */}
    </div>
  );
}

export default HeroSection;
