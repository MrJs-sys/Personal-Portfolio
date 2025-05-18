import React, { useEffect, useState } from "react";
import axiosInstance from "../api/axiosInstance";
import "./Skills.css";

const Skills = () => {
  const [skillData, setSkillData] = useState([]);
  const [activeSkill, setActiveSkill] = useState(null);

  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const response = await axiosInstance.get("/skills");
        setSkillData(response.data);
      } catch (error) {
        console.error("Error fetching skills:", error);
      }
    };
    fetchSkills();
  }, []);

  return (
    <section id="skills" className="skills-section">
      <h2 className="skills-heading">My Superpowers "Skills!"</h2>
      <p className="skills-intro">
        "Exploring a wide spectrum of technologies—from cloud platforms and AI/ML to data science and full-stack development—constantly learning and growing to create meaningful and innovative solutions."
      </p>
      <p className="skills-intro">Click to explore the technologies and tools I'm skilled in.</p>

      <div className={`skills-grid ${activeSkill !== null ? "dimmed" : ""}`}>
        {skillData.map((item, index) => (
          <div
            className="skill-button"
            key={index}
            onClick={() => setActiveSkill(index)}
          >
            <span className="skill-button-text">{item.category}</span>
          </div>
        ))}
      </div>

      {activeSkill !== null && (
        <div className="skill-popup-overlay">
          <div className="skill-popup-card">
            <button
              className="skill-popup-close-btn"
              onClick={() => setActiveSkill(null)}
              aria-label="Close skill popup"
            >
              &times;
            </button>
            <h3 className="skill-category">
              {skillData[activeSkill]?.category}
            </h3>
            <div className="skill-tags">
              {skillData[activeSkill]?.skills.map((skill, idx) => (
                <span className="skill-tag" key={idx}>
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Skills;