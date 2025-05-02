import React from "react";
import "./Projects.css";
import cosmic from "../assets/project1.png";
import bot from "../assets/project2.png";
import con from "../assets/project3.png";
import ecom from "../assets/project4.png";
import stock from "../assets/project5.png";
import wea from "../assets/project6.png";
import fit from "../assets/project7.png";
import mus from "../assets/project8.png";


const projectData = [
  {
    title: "Cosmic Portfolio",
    description: "A personal portfolio built with React and animated backgrounds.",
    img: cosmic,
    liveDemo: "#",
    downloadLink: "#",
  },
  {
    title: "AI Chatbot",
    description: "An intelligent chatbot built with Dialogflow and Node.js backend.",
    img: bot,
    liveDemo: "#",
    downloadLink: "#",
  },
  {
    title: "Smart Home Controller",
    description: "IoT-based smart home automation using embedded C and cloud APIs.",
    img: con,
    liveDemo: "#",
    downloadLink: "#",
  },
  {
    title: "E-Commerce Site",
    description: "A full-stack shopping site with MERN stack and Stripe payment integration.",
    img: ecom,
    liveDemo: "#",
    downloadLink: "#",
  },
  {
    title: "Stock Prediction AI",
    description: "A machine learning model predicting stock market trends.",
    img: stock,
    liveDemo: "#",
    downloadLink: "#",
  },
  {
    title: "Weather App",
    description: "Real-time weather forecasting app using OpenWeather API.",
    img: wea,
    liveDemo: "#",
    downloadLink: "#",
  },
  {
    title: "Fitness Tracker",
    description: "Mobile app to monitor fitness activities and health vitals.",
    img: fit,
    liveDemo: "#",
    downloadLink: "#",
  },
  {
    title: "Music Streaming App",
    description: "A beautiful UI/UX music streaming service with offline download option.",
    img: mus,
    liveDemo: "#",
    downloadLink: "#",
  }
];

const Projects = () => {
  return (
    <div id="projects" className="projects-section">
      <div className="projects-heading">Projects</div>

      <p style={{ color: '#b2bec3', fontSize: '1.2rem', marginTop: '10px', marginBottom: '50px', textAlign: 'center', fontStyle: 'italic' }}>
 "Explore some of the projects I've worked on, showcasing my capabilities and creativity."
</p>

      <div className="projects-grid">
        {projectData.map((project, index) => (
          <div className="project-card" key={index}>
            <div className="project-image">
              <img src={project.img} alt={project.title} />
              <div className="image-overlay">
                <a href={project.liveDemo} target="_blank" rel="noopener noreferrer" className="btn">Live Demo</a>
                <a href={project.downloadLink} download className="btn">Download</a>
              </div>
            </div>
            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;