import React from "react";
import "./AboutSection.css";
import profile from "../assets/profile.png"; 

const About = () => {
  return (
    <div id="about" className="about-section">
      <div className="about-heading">About Me 👋</div>
      <p style={{ color: '#b2bec3', fontSize: '1.2rem', marginTop: '10px', marginBottom: '50px', textAlign: 'center', fontStyle: 'italic' }}>
      "A brief overview of my journey, showcasing my skills, expertise, and academic achievements."
</p>
      <div className="about-container">
        <div className="about-image">
          <img src= {profile} alt="About" />
        </div>
        <div className="about-content">
          <h3>Who I Am?</h3>
          <p>
            I am a highly skilled and versatile developer with a strong foundation in full-stack web development and embedded systems programming. With hands-on experience in AI/ML development, I have a deep understanding of machine learning algorithms, deep learning architectures, and data preprocessing techniques, enabling me to build predictive models that provide actionable insights.
          </p>
          <p>
            Additionally, my proficiency in cloud computing, particularly with platforms like AWS, Azure, and Google Cloud, combined with knowledge of DevOps tools like Docker and Kubernetes, equips me to implement and optimize cloud-native applications.
          </p>
          <p>
            In the realm of embedded systems, I possess a thorough understanding of low-level programming and integration with sensors and hardware, optimizing performance for resource-constrained environments.
          </p>
          <p>
            My full-stack development experience using React.js, Node.js, and MongoDB allows me to craft seamless, performant, and user-centric web applications.
          </p>
          <br/>
          <h3>Educational Qualifications</h3>
          <ul className="education-list">
            <li>Bachelor of Technology in Computer Science and Engineering (B.Tech CSE)</li>
            <li>Specialized in Cloud Computing and Information Security</li>
            <li>Assam Down Town University (July 2020 - July 2024)</li>
            <li>CGPA of 8.74</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
