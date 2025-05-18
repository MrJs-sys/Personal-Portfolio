import React from 'react'
import './AboutSection.css'
import profile from '../assets/profile.png'

const About = () => {
  return (
    <div id='about' className='about-section'>
      <div className='about-heading'>Hi there! "About Me!"</div>
      <p className='about-subheading'>
        “A concise overview of who I am — highlighting my technical skills,
        academic accomplishments, and the values that shape my work ethic. This
        section reflects my commitment to growth, adaptability, and purposeful
        contributions across various domains."
      </p>
      <div className='about-container'>
        <div className='about-image'>
          <img src={profile} alt='About' />  
        </div>
        <div className='about-content'>
          <h3>Who I Am?</h3>
          <p>
                  I’m a highly skilled developer with expertise in full-stack web
            development, embedded systems, and AI/ML. I build predictive models
            using advanced machine learning and deep learning techniques, and
            I’m experienced in data preprocessing.
          </p>
          <p>
                  Proficient in cloud platforms like AWS, Azure, and GCP, I also
            leverage DevOps tools such as Docker and Kubernetes to deploy
            scalable, cloud-native apps.
          </p>
          <p>
                  With strong low-level programming skills, I optimize embedded
            systems, and my full-stack work with React.js, Node.js, and MongoDB
            delivers performant, user-focused web solutions.
          </p>
          <br />
          <h3>Educational Qualifications</h3>
          <ul className='education-list'>
              <p>Bachelor of Technology in Computer Science and Engineering</p>
            <li>Assam Down Town University (July 2020 - July 2024)</li>
             <li>Specialized in Cloud Computing and Information Security</li>
            <li>CGPA of 8.74</li>
            <p>Masters of Technology in Computer Science and Engineering</p>
            <li>Don Bosco University (July 2025 - July 2027)</li>
            <li>Specialized in Data Science</li>
            <li>CGPA of 9.74</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default About
