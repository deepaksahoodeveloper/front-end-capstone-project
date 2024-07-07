import React from 'react';
import './Highlights.css';

import greek_salad from "../Images/greek_salad.jpg";
import bruschetta from "../Images/bruchetta.svg";
import lemon_dessert from "../Images/lemon_dessert.jpg";

const specials = [
  {
    name: 'Greek Salad',
    description: 'The famous greek salad of crispy lettuce, peppers, olives, and our Chicago-style feta cheese, garnished with crunchy garlic and rosemary croutons.',
    price: '$12.99',
    image: greek_salad // Replace with actual image path
  },
  {
    name: 'Bruschetta',
    description: 'Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.',
    price: '$7.99',
    image: bruschetta // Replace with actual image path
  },
  {
    name: 'Lemon Dessert',
    description: 'This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.',
    price: '$5.00',
    image: lemon_dessert // Replace with actual image path
  },
  // Add more specials as needed
];

function Highlights() {
  return (
    <div className="highlights">
      <h2 className="highlights-title">Specials</h2>
      <div className="highlights-container">
        {specials.map((special, index) => (
          <div key={index} className="highlight-item" onClick={() => window.location.href = '/specials'}>
            <img src={special.image} alt={special.name} />
            <div className="dish-name">{special.name}</div>
            <div className="dish-description">{special.description}</div>
            <div className="dish-price">{special.price}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Highlights;
