import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import Skills from './components/Skills';
import Projects from './components/Projects';
import ContactSection from './components/ContactSection';
import Footer from './components/FooterSection';
function App() {
  return(
    <div>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <Skills />
      <Projects />
      <ContactSection />
      <Footer />
    </div>
  )
}
export default App;
