import React from 'react';
import Logo from "../Images/Logo.svg";
import './Footer.css'; // Import your CSS file

function Footer() {
  return (
    <footer className="footer">
      <img src={Logo} alt="Logo" className="logo" />

      <div className="contact-info">
        <p>Contact us at: <a href="mailto:info@yourwebsite.com">info@yourwebsite.com</a></p>
        <p>Follow us on:
          <a href="#" className="social-links">Facebook</a>
          <a href="#" className="social-links">Twitter</a>
          <a href="#" className="social-links">Instagram</a>
        </p>
      </div>

      <p className="copyright">&copy; 2024 Your Website Name</p>
    </footer>
  );
}

export default Footer;
