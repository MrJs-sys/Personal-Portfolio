import React, { useEffect } from 'react';
import './HeroSection.css'; 

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
      
      <div className="hero-content" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center', color: 'white' }}>
        <h1 style={{ fontSize: '3rem', marginBottom: '20px' }}>Welcome to My Portfolio</h1>
        <p style={{ fontSize: '1.2rem', marginBottom: '30px' }}>I'm a passionate developer with skills in web and app development.</p>
        <a href="#contact" className="cta-button" style={{ padding: '15px 30px', backgroundColor: '#F72585', color: 'white', textDecoration: 'none', fontSize: '1rem', borderRadius: '30px' }}>
          Hire Me
        </a>
      </div>
    </div>
  );
};

export default HeroSection;
