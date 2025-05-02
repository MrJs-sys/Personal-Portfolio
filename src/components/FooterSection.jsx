import React from "react";
import { FaGithub, FaLinkedin, FaInstagram, FaWhatsapp } from "react-icons/fa";
import "./FooterSection.css"; 

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-text">
          <p>&copy; 2025 | All Rights Reserved</p>
          <p>Designed by Jyotishman Saloi</p>
        </div>
        <div className="footer-socials">
          <a href="https://github.com/MrJs-sys" target="_blank" rel="noopener noreferrer">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/jyotishman-saloi-030ab8316/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin />
          </a>
          <a href="https://www.instagram.com/mr_jyotishman/" target="_blank" rel="noopener noreferrer">
            <FaInstagram />
          </a>
          <a href="https://wa.me/916002064318" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
