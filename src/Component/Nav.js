import React from "react";
import Logo from "../Images/Logo.svg"

function Nav() {
    return (
        <nav>
            <img src={Logo} alt="Logo" />
            <ul>
                <li><a href="/">Home</a></li> 
                <li><a href="/about">About</a></li> 
                <li><a href="/contact">Contact</a></li> 
            </ul>
        </nav>
    );
};

export default Nav;
