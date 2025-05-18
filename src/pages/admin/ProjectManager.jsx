import React, { useEffect, useState } from 'react';
import axios from '../../api/axiosInstance';
import { useNavigate } from 'react-router-dom';
import './ProjectManager.css';

const ProjectManager = () => {
  const [projects, setProjects] = useState([]);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    techStack: '',
    liveDemoLink: '',
    downloadLink: '',
    imageUrl: ''
  });
  const [editingId, setEditingId] = useState(null);
  const navigate = useNavigate();

  // Fetch all projects from backend
  const fetchProjects = async () => {
    try {
      const res = await axios.get('/projects');
      setProjects(res.data);
    } catch (err) {
      console.error('Error fetching projects:', err.message);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  // Handle form submit for add/edit
  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      ...formData,
      techStack: formData.techStack.split(',').map(s => s.trim())
    };

    try {
      if (editingId) {
        await axios.put(`/projects/${editingId}`, payload);
      } else {
        await axios.post('/projects', payload);
      }
      fetchProjects();
      setFormData({ title: '', description: '', techStack: '', liveDemoLink: '', downloadLink: '', imageUrl: '' });
      setEditingId(null);
    } catch (err) {
      console.error('Error submitting project:', err.message);
    }
  };

  // Populate form for editing
  const handleEdit = (project) => {
    setFormData({
      title: project.title,
      description: project.description,
      techStack: project.techStack.join(', '),
      liveDemoLink: project.liveDemoLink || '',
      downloadLink: project.downloadLink || '',
      imageUrl: project.imageUrl || ''
    });
    setEditingId(project._id);
  };

  // Delete project by id
  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this project?')) {
      try {
        await axios.delete(`/projects/${id}`);
        fetchProjects();
      } catch (err) {
        console.error('Error deleting project:', err.message);
      }
    }
  };

  // Logout handler
  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/admin/login');
  };

  return (
    <div className="project-manager-wrapper">
      <header className="admin-header">
        <h1 onClick={() => navigate('/admin')}>Admin Panel - Projects</h1>
        <button className="logout-button" onClick={handleLogout}>Logout</button>
      </header>

      <main className="project-manager">
        <h2 className="manage-heading">Manage Projects</h2>

        <div className="content-row">
          <form onSubmit={handleSubmit} className="project-form">
            <input
              type="text"
              placeholder="Project Title"
              value={formData.title}
              onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              required
            />
            <textarea
              placeholder="Project Description"
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              required
            />
            <input
              type="text"
              placeholder="Tech Stack (comma separated)"
              value={formData.techStack}
              onChange={(e) => setFormData({ ...formData, techStack: e.target.value })}
            />
            <input
              type="url"
              placeholder="Live Demo URL"
              value={formData.liveDemoLink}
              onChange={(e) => setFormData({ ...formData, liveDemoLink: e.target.value })}
            />
            <input
              type="url"
              placeholder="Download URL"
              value={formData.downloadLink}
              onChange={(e) => setFormData({ ...formData, downloadLink: e.target.value })}
            />
            <input
              type="url"
              placeholder="Image URL"
              value={formData.imageUrl}
              onChange={(e) => setFormData({ ...formData, imageUrl: e.target.value })}
            />
            <button type="submit">{editingId ? 'Update' : 'Add'} Project</button>
          </form>

          <div className="project-list card-grid">
            {projects.length === 0 && <p>No projects found.</p>}
            {projects.map((project) => (
              <div key={project._id} className="project-card">
                <h3>{project.title}</h3>
                {project.imageUrl && <img src={project.imageUrl} alt={project.title} className="project-image" />}
                <p>{project.description}</p>
                <div className="tech-stack">
                  {project.techStack.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
                <div className="links">
                  {project.liveDemoLink && (
                    <a href={project.liveDemoLink} target="_blank" rel="noreferrer" className="btn">
                      Live Demo
                    </a>
                  )}
                  {project.downloadLink && (
                    <a href={project.downloadLink} target="_blank" rel="noreferrer" className="btn">
                      Download
                    </a>
                  )}
                </div>
                <div className="actions">
                  <button className="edit" onClick={() => handleEdit(project)}>Edit</button>
                  <button className="delete" onClick={() => handleDelete(project._id)}>Delete</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <footer className="admin-footer">
        <p>© 2025 Jyotishman Saloi | Admin Panel</p>
      </footer>
    </div>
  );
};

export default ProjectManager;
