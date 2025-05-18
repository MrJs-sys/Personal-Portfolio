import React, { useEffect } from 'react';
import './HeroSection.css'; 
import ri from '../assets/2.gif'; 

const HeroSection = () => {
  useEffect(() => {
    window.particlesJS('particles-js', {
      particles: {
        number: { value: 80, density: { enable: true, value_area: 800 } },
        shape: { type: 'circle' },
        opacity: { value: 0.5, anim: { enable: true, speed: 1, opacity_min: 0.1 } },
        size: { value: 3, anim: { enable: true, speed: 40, size_min: 0.1 } },
        line_linked: { enable: true, distance: 150, color: '#ffffff', opacity: 0.4, width: 1 },
        move: { enable: true, speed: 6, direction: 'none', random: false, straight: false, out_mode: 'out' }
      },
      interactivity: {
        detect_on: 'canvas',
        events: {
          onhover: { enable: true, mode: 'repulse' },
          onclick: { enable: true, mode: 'push' }
        }
      }
    });
  }, []);

  return (
    <div id="hero-section" style={{ position: 'relative', width: '100%', height: '100vh' }}>
      <div id="particles-js" style={{ position: 'absolute', width: '100%', height: '100%' }}></div>
      
      <div id = "home" className="hero-container">
<div className="hero-left">
          <h1>Hi there! <br/> I'm Jyotishman</h1>
          <p>I specialize in AI/ML solutions, backed by expertise in Cloud Computing and Infosec, to create secure, scalable systems. Additionally, I offer design, development, and social media management services to help businesses grow digitally.</p> <p>Let's collaborate and bring innovative, secure solutions to your project.</p>
          <a href="#contact" className="cta-button">Hire Me!</a>
        </div>

        <div className="hero-right">
          <div className="rotating-circle">
            <img src={ri} alt="Rotating Circle" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
