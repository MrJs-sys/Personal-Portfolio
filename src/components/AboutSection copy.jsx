import React, { useEffect, useState } from "react";
import "./AboutSection.css";

const About = () => {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 200) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div id="about" className={`about-section ${scrolling ? "show" : ""}`}>
      <div className="about-card">
        <div className="about-heading">About</div>
        <div className="about-content">
          <div className="about-description">
            <h3>Who I Am</h3>
            <p>
              I am a highly skilled and versatile developer with a strong
              foundation in full-stack web development and embedded systems
              programming. With hands-on experience in AI/ML development, I have
              a deep understanding of machine learning algorithms, deep learning
              architectures, and data preprocessing techniques, enabling me to
              build predictive models that provide actionable insights.
            </p>
            <p>
              Additionally, my proficiency in cloud computing, particularly with
              platforms like AWS, Azure, and Google Cloud, combined with knowledge
              of DevOps tools like Docker and Kubernetes, equips me to implement
              and optimize cloud-native applications.
            </p>
            <p>
              In the realm of embedded systems, I possess a thorough
              understanding of low-level programming and integration with sensors
              and hardware, optimizing performance for resource-constrained
              environments.
            </p>
            <p>
              My full-stack development experience using React.js, Node.js, and
              MongoDB allows me to craft seamless, performant, and user-centric
              web applications.
            </p>
          </div>
          <div className="about-education">
            <h3>Educational Qualifications</h3>
            <p>
              <ul> <h3>Undergraduate</h3>
              <li>Bachelor of Technology in Computer Science and Engineering (B.Tech CSE)</li>
              <li>specialized in Cloud Computing and Information Security</li>  <li>Assam
              Down Town University (July 2020 - July 2024)</li>
              <li>CGPA of 8.74.</li>
              </ul>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
