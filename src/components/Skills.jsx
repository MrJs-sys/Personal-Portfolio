import React, { useEffect, useState } from "react";
import "./Skills.css";

const Skills = () => {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 300) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div id="skills" className={`skills-section ${scrolling ? "show" : ""}`}>
      <div className="skills-card">
        <h1 className="skills-heading">Skills</h1>
        <p style={{ color: '#b2bec3', fontSize: '1.2rem', marginTop: '10px', marginBottom: '50px', textAlign: 'center', fontStyle: 'italic' }}>
  "A quick overview of the skills and technologies I'm proficient in."
</p>
        <div className="skills-container">
          {/* Basic Technical Skills */}
          <div className="skill-category">
            <h3>🛠️ Basic Technical Skills</h3>
            <ul>
              <li>Programming Concepts (Loops, Functions, Variables)</li>
              <li>HTML5, CSS3 (Flexbox, Grid Layouts)</li>
              <li>JavaScript Basics (DOM, Events)</li>
              <li>Git Version Control</li>
              <li>Basic Databases (MySQL, MongoDB)</li>
              <li>Basic UI/UX Design</li>
              <li>Linux/Unix Terminal Usage</li>
              <li>Responsive Web Design, Cross-Browser Compatibility</li>
              <li>Web Hosting (Netlify, Vercel)</li>
              <li>Basic API Integration (GET/POST requests)</li>
            </ul>
          </div>

          {/* AI/ML Skills */}
          <div className="skill-category">
            <h3>🧠 AI/ML Skills</h3>
            <ul>
              <li>AutoML, Transfer Learning</li>
              <li>Anomaly Detection, Explainable AI</li>
              <li>Reinforcement Learning (Q-Learning, DQN)</li>
              <li>Speech Recognition</li>
              <li>Recommendation Systems</li>
              <li>Hyperparameter Tuning</li>
              <li>Dimensionality Reduction (PCA, t-SNE, UMAP)</li>
              <li>Neural Architecture Search</li>
              <li>Federated Learning</li>
              <li>ML Ops (Model Monitoring & Deployment)</li>
            </ul>
          </div>

          {/* Web Development Skills */}
          <div className="skill-category">
            <h3>💻 Web Development</h3>
            <ul>
              <li>Full Stack Development (React.js, Node.js, React Native)</li>
              <li>Frontend (HTML, CSS, JavaScript)</li>
              <li>Backend (Node.js, PHP)</li>
              <li>RESTful APIs, GraphQL</li>
              <li>Version Control with Git</li>
            </ul>
          </div>

          {/* Cloud & DevOps */}
          <div className="skill-category">
            <h3>☁️ Cloud Technologies & DevOps</h3>
            <ul>
              <li>AWS, Azure, Google Cloud</li>
              <li>Docker, Kubernetes</li>
              <li>CI/CD (Jenkins, GitLab CI)</li>
              <li>Infrastructure as Code (Terraform)</li>
              <li>Serverless Architecture (AWS Lambda)</li>
            </ul>
          </div>

          {/* Database */}
          <div className="skill-category">
            <h3>🗄️ Databases</h3>
            <ul>
              <li>MySQL, MongoDB</li>
              <li>Firebase, DynamoDB, Firestore</li>
              <li>Data Warehousing (BigQuery, Redshift)</li>
              <li>NoSQL (Cassandra, CouchDB)</li>
            </ul>
          </div>

          {/* Mobile App Development */}
          <div className="skill-category">
            <h3>📱 Mobile Development</h3>
            <ul>
              <li>React Native</li>
              <li>Mobile UI/UX Design</li>
              <li>App Deployment</li>
            </ul>
          </div>

          {/* Testing */}
          <div className="skill-category">
            <h3>🧪 Testing</h3>
            <ul>
              <li>Requirement-based, Black-box Testing</li>
              <li>Selenium, Jest, Mocha, Cypress</li>
              <li>Test Automation</li>
            </ul>
          </div>

          {/* Embedded & IoT */}
          <div className="skill-category">
            <h3>🔧 Embedded Systems & IoT</h3>
            <ul>
              <li>Embedded Systems Programming</li>
              <li>TargetLink, Simulink</li>
              <li>IoT Development</li>
            </ul>
          </div>

          {/* Blockchain */}
          <div className="skill-category">
            <h3>⛓️ Blockchain</h3>
            <ul>
              <li>Solidity</li>
              <li>Ethereum Smart Contracts</li>
            </ul>
          </div>

          {/* Miscellaneous */}
          <div className="skill-category">
            <h3>🎨 Miscellaneous</h3>
            <ul>
              <li>UI/UX Design (Figma, Adobe XD)</li>
              <li>Microsoft Office, Advanced Excel</li>
              <li>Documentation Management</li>
            </ul>
          </div>

          {/* Soft Skills */}
          <div className="skill-category">
            <h3>🌟 Soft Skills</h3>
            <ul>
              <li>Problem Solving</li>
              <li>Communication & Collaboration</li>
              <li>Leadership & Mentorship</li>
              <li>Time Management</li>
              <li>Client Interaction</li>
              <li>Adaptability & Flexibility</li>
            </ul>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Skills;
