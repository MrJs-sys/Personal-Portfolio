import React from "react";
import "./ContactSection.css";
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope, FaPhone, FaWhatsapp } from "react-icons/fa";

const contacts = [
  {
    name: "GitHub",
    icon: <FaGithub />,
    url: "https://github.com/MrJs-sys",
  },
  {
    name: "LinkedIn",
    icon: <FaLinkedin />,
    url: "https://www.linkedin.com/in/jyotishman-saloi-030ab8316/",
  },
  {
    name: "Instagram",
    icon: <FaInstagram />,
    url: "https://www.instagram.com/mr_jyotishman",
  },
  {
    name: "Email",
    icon: <FaEnvelope />,
    url: "mailto:jyotishman.saloi.linkdin@gmail.com",
  },
  {
    name: "Phone",
    icon: <FaPhone />,
    url: "tel:+916002064318",
  },
  {
    name: "WhatsApp",
    icon: <FaWhatsapp />,
    url: "https://wa.me/916002064318",
  },
];

const ContactMe = () => {
  return (
    <div className="contact-section" id="contact">
      <h2 className="contact-title">Contact Me</h2>
      <p style={{ color: '#b2bec3', fontSize: '1.2rem', marginTop: '10px', marginBottom: '50px', textAlign: 'center', fontStyle: 'italic' }}>
 "Feel free to reach out for collaborations, inquiries, or just a friendly chat!"
</p>
      <div className="glass-tray">
        {contacts.map((contact, index) => (
          <a
            key={index}
            className="contact-button"
            href={contact.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="icon">{contact.icon}</div>
            <span className="text">{contact.name}</span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default ContactMe;