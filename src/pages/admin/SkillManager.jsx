import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from '../../api/axiosInstance';
import './SkillManager.css';

const SkillManager = () => {
  const [skills, setSkills] = useState([]);
  const [formData, setFormData] = useState({ category: '', skills: '' });
  const [editingId, setEditingId] = useState(null);
  const navigate = useNavigate();

  const fetchSkills = async () => {
    try {
      const res = await axios.get('/skills');
      setSkills(res.data);
    } catch (err) {
      console.error('Failed to fetch skills:', err.message);
    }
  };

  useEffect(() => {
    fetchSkills();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const skillArray = formData.skills.split(',').map(skill => skill.trim()).filter(Boolean);
    try {
      if (editingId) {
        await axios.put(`/skills/${editingId}`, {
          category: formData.category,
          skills: skillArray,
        });
      } else {
        await axios.post('/skills', {
          category: formData.category,
          skills: skillArray,
        });
      }
      fetchSkills();
      setFormData({ category: '', skills: '' });
      setEditingId(null);
    } catch (err) {
      console.error('Error submitting skill:', err.message);
    }
  };

  const handleEdit = (skill) => {
    setFormData({
      category: skill.category,
      skills: skill.skills.join(', '),
    });
    setEditingId(skill._id);
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this skill category?')) {
      try {
        await axios.delete(`/skills/${id}`);
        fetchSkills();
      } catch (err) {
        console.error('Error deleting skill:', err.message);
      }
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/admin/login');
  };

  return (
    <div className="admin-section">
      <header className="admin-header">
        <h1 onClick={() => navigate('/admin')}>Admin Panel - Skills</h1>
        <button className="logout-button" onClick={handleLogout}>Logout</button>
      </header>

      <main className="admin-main">
        <section className="form-section">
          <h2>{editingId ? 'Edit Skill Category' : 'Add New Skill Category'}</h2>
          <form onSubmit={handleSubmit} className="admin-form">
            <input
              type="text"
              placeholder="Skill Category (e.g. Frontend)"
              value={formData.category}
              onChange={(e) => setFormData({ ...formData, category: e.target.value })}
              required
            />
            <input
              type="text"
              placeholder="Comma-separated skills (e.g. HTML, CSS, JS)"
              value={formData.skills}
              onChange={(e) => setFormData({ ...formData, skills: e.target.value })}
              required
            />
            <button type="submit">{editingId ? 'Update' : 'Add'} Skill</button>
          </form>
        </section>

        <section className="list-section">
          <h2>Skill Categories</h2>
          {skills.length === 0 ? (
            <p>No skills added yet.</p>
          ) : (
            <div className="card-grid">
              {skills.map((skill) => (
                <div key={skill._id} className="admin-card">
                  <h3>{skill.category}</h3>
                  <ul>
                    {skill.skills.map((s, index) => (
                      <li key={index}>{s}</li>
                    ))}
                  </ul>
                  <div className="card-actions">
                    <button className="edit" onClick={() => handleEdit(skill)}>Edit</button>
                    <button className="delete" onClick={() => handleDelete(skill._id)}>Delete</button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>
      </main>

      <footer className="admin-footer">
        <p>© 2025 Jyotishman Saloi | Admin Panel</p>
      </footer>
    </div>
  );
};

export default SkillManager;
