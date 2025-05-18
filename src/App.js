import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import Skills from './components/Skills';
import Projects from './components/Projects';
import ContactSection from './components/ContactSection';
import Footer from './components/FooterSection';

import Login from './pages/admin/login';
import AdminDashboard from './pages/admin/AdminDashboard';
import SkillManager from './pages/admin/SkillManager';
import ProjectManager from './pages/admin/ProjectManager';
import ContactManager from './pages/admin/ContactManager';

import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <Router>
      <Routes>

        {/* Public Portfolio Route */}
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <HeroSection />      
              <Skills />
              <Projects />
              <AboutSection />
              <ContactSection />
              <Footer />
            </>
          }
        />

        {/* Admin Login (public) */}
        <Route path="/admin/login" element={<Login />} />

        {/* Admin Dashboard (protected) */}
        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <AdminDashboard />
            </ProtectedRoute>
          }
        />

        {/* Skill Manager (protected) */}
        <Route
          path="/admin/skills"
          element={
            <ProtectedRoute>
              <SkillManager />
            </ProtectedRoute>
          }
        />

        {/* Skill Manager (protected) */}
        <Route
          path="/admin/projects"
          element={
            <ProtectedRoute>
              <ProjectManager />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/contacts"
          element={
            <ProtectedRoute>
              <ContactManager />
            </ProtectedRoute>
          }
        />


        {/* Add more protected admin routes here if needed */}

      </Routes>
    </Router>
  );
}

export default App;