import React from 'react';
import Logo from "../Images/Logo.svg";
import Nav from './Nav.js';
import './Header.css';

function Header() {
    return (
        <header className='header'>
            <img src={Logo} alt="Logo" className="logo" />
            <Nav />
        </header>
    );
}

export default Header;
