import React, { useState } from 'react';
import './Navbar.css'; // Import your CSS file
import logo from '../assets/logo.png'; // Path to your logo

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false); // State for mobile menu toggle

  const toggleMenu = () => {
    setMenuOpen(!menuOpen); // Toggle menu visibility
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <a href="#home">
          <img src={logo} alt="Logo" className="navbar-logo-img" />
        </a>
      </div>

      <button className={`navbar-toggle ${menuOpen ? 'active' : ''}`} onClick={toggleMenu}>
        &#9776; {/* Hamburger Icon */}
      </button>

      <ul className={`navbar-links ${menuOpen ? 'active' : ''}`}>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
        <li><button className="hire-button">Hire Me!</button></li>
      </ul>
    </nav>
  );
};

export default Navbar;
