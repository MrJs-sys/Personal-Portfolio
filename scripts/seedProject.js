// Load environment variables from .env file (one level up)
require('dotenv').config({ path: '../.env' });

const mongoose = require('mongoose');

// Make sure this path matches your actual Project model location
const Project = require('../models/Project');

const projectsData = [
  {
    title: 'Personal Portfolio',
    description: 'A fully responsive personal portfolio website built with React and Node.js.',
    technologies: ['React', 'Node.js', 'Express', 'MongoDB'],
    liveDemoUrl: 'https://yourportfolio.com',
    downloadUrl: 'https://github.com/yourusername/portfolio',
  },
  {
    title: 'Hospital Management System',
    description: 'An application to manage hospital operations including appointments and patient records.',
    technologies: ['PHP', 'MySQL', 'Bootstrap'],
    liveDemoUrl: 'https://hospitalapp.com',
    downloadUrl: 'https://github.com/yourusername/hospital-management',
  },
  {
    title: 'Cafe Management System',
    description: 'A POS and inventory management system for cafes with real-time reporting.',
    technologies: ['Java', 'Spring Boot', 'MySQL'],
    liveDemoUrl: 'https://cafemanagement.com',
    downloadUrl: 'https://github.com/yourusername/cafe-management',
  },
];

async function seedProjects() {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected');

    // Clear existing projects
    await Project.deleteMany({});
    console.log('Existing projects deleted');

    // Insert new projects
    await Project.insertMany(projectsData);
    console.log('Projects seeded successfully');

    mongoose.connection.close();
  } catch (error) {
    console.error('Failed to seed projects:', error.message);
    mongoose.connection.close();
  }
}

seedProjects();