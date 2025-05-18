import React, { useEffect, useState } from 'react';
import axios from '../api/axiosInstance';
import './Projects.css';

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await axios.get('/projects');
        setProjects(res.data);
      } catch (err) {
        console.error('Error loading projects:', err.message);
      }
    };
    fetchProjects();
  }, []);

  return (
    <section id="projects" className="projects-section">
      <h2 className="projects-title">What I've Built "Projects!"</h2>
      <p className="projects-intro">
        "Explore a selection of my recent work, showcasing my skills and creativity through real-world projects. Each project highlights unique challenges, technologies used, and the impact delivered."
      </p>
      {projects.length === 0 ? (
        <p className="no-projects">No projects to display.</p>
      ) : (
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div className="project-glass-card" key={index}>
              {project.imageUrl && (
                <img src={project.imageUrl} alt={project.title} className="project-image" />
              )}
              <h3 className="project-name">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <ul className="tech-stack">
                {project.techStack.map((tech, idx) => (
                  <li key={idx}>{tech}</li>
                ))}
              </ul>
              <div className="project-buttons">
                {project.liveDemoLink && (
                  <a href={project.liveDemoLink} target="_blank" rel="noopener noreferrer" className="btn live">
                    Live Demo
                  </a>
                )}
                {project.downloadLink && (
                  <a href={project.downloadLink} target="_blank" rel="noopener noreferrer" className="btn download">
                    Download
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default Projects;