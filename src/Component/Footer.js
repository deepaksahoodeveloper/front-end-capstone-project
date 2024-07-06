import React from 'react';
import Logo from "../Images/Logo.svg"

function Footer() {
  return (
    <footer style={{ backgroundColor: '#f2f2f2', padding: '20px' }}> 
      <img src={Logo} alt="Logo" style={{ width: '100px', marginBottom: '10px' }} />

      <nav>
        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
          <li style={{ display: 'inline', marginRight: '20px' }}><a href="/">Home</a></li>
          <li style={{ display: 'inline', marginRight: '20px' }}><a href="/about">About</a></li>
          <li style={{ display: 'inline' }}><a href="/contact">Contact</a></li>
        </ul>
      </nav>

      <div style={{ marginTop: '20px' }}>
        <p>Contact us at: <a href="mailto:info@yourwebsite.com">info@yourwebsite.com</a></p>
        <p>Follow us on: 
          <a href="#" style={{ marginLeft: '10px' }}>Facebook</a> 
          <a href="#" style={{ marginLeft: '10px' }}>Twitter</a> 
          <a href="#" style={{ marginLeft: '10px' }}>Instagram</a>
        </p>
      </div>

      <p style={{ marginTop: '20px', fontSize: '12px' }}>&copy; 2024 Your Website Name</p>
    </footer>
  );
}

export default Footer;
