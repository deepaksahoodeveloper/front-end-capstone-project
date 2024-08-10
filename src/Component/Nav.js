// src/components/Nav.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

function Nav() {
    return (
        <nav className="nav">
            <Link to="/">Home</Link>
            <Link to="/">About</Link>
            <Link to="/">Menu</Link>
            <Link to="/">Contact</Link>
            <Link to="/book">Booking</Link>
        </nav>
    );
}

export default Nav;