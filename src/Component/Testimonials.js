import React from 'react';
import './Testimonials.css';

const testimonials = [
  {
    name: 'John Doe',
    title: 'CEO, Company A',
    image: 'https://via.placeholder.com/60', // Replace with actual image URL
    rating: 5,
    text: 'This is a wonderful service! I am extremely satisfied with the quality and support provided.',
  },
  {
    name: 'Jane Smith',
    title: 'Marketing Manager, Company B',
    image: 'https://via.placeholder.com/60', // Replace with actual image URL
    rating: 4,
    text: 'Great experience overall. I would highly recommend this to my colleagues and friends.',
  },
  // Add more testimonials as needed
];

function StarRating({ rating }) {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    stars.push(<i key={i} className={i <= rating ? 'fas fa-star' : 'far fa-star'}></i>);
  }
  return <div className="star-rating">{stars}</div>;
}

function Testimonial({ name, title, image, rating, text }) {
  return (
    <div className="testimonial">
      <div className="customer-info">
        <img src={image} alt={`${name}'s profile`} />
        <div className="customer-details">
          <span className="customer-name">{name}</span>
          <span className="customer-title">{title}</span>
        </div>
      </div>
      <StarRating rating={rating} />
      <p className="testimonial-text">{text}</p>
    </div>
  );
}

function CustomersSay() {
  return (
    <div className="customers-say">
      <h2>What Our Customers Say</h2>
      {testimonials.map((testimonial, index) => (
        <Testimonial key={index} {...testimonial} />
      ))}
    </div>
  );
}

export default CustomersSay;
