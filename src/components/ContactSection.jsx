import React, { useState } from "react";
import axiosInstance from "../api/axiosInstance"; // ✅ Correct axios instance
import "./ContactSection.css";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaEnvelope,
  FaPhone,
  FaWhatsapp,
} from "react-icons/fa";

const contacts = [
  { name: "GitHub", icon: <FaGithub />, url: "https://github.com/MrJs-sys" },
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
  { name: "Phone", icon: <FaPhone />, url: "tel:+916002064318" },
  {
    name: "WhatsApp",
    icon: <FaWhatsapp />,
    url: "https://wa.me/916002064318",
  },
];

const ContactMe = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [statusMessage, setStatusMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axiosInstance.post("/contacts", formData); // ✅ Correct endpoint
      setStatusMessage("Message sent successfully!");
      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch (error) {
      console.error("Contact form error:", error.response?.data || error.message);
      setStatusMessage("Failed to send message. Try email or WhatsApp.");
    }
  };

  return (
    <div className="contact-section" id="contact">
      <h2 className="contact-title">Let's have a coffee "Contact Me!"</h2>
      <p className="contact-intro">
        “Feel free to reach out for collaborations, inquiries, or just a friendly chat!"
      </p>
      <div className="glass-container">
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
        <div className="contact-form">
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              required
            />
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone Number (optional)"
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="8"
              placeholder="Your Message (optional)"
            ></textarea>
            <button type="submit">Send Message</button>
          </form>
          {statusMessage && <p className="form-status">{statusMessage}</p>}
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
