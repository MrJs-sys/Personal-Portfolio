import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from '../../api/axiosInstance';
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, Legend,
} from 'recharts';
import './AdminDashboard.css';

const AdminDashboard = () => {
  const navigate = useNavigate();

  const [stats, setStats] = useState({ skills: 0, projects: 0, messages: 0 });
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState('');
  const [lastUpdate, setLastUpdate] = useState('');
  const [page, setPage] = useState(1);
  const rowsPerPage = 5;

  // Fetch stats and messages
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const [skillsRes, projectsRes, messagesRes] = await Promise.all([
          axios.get('/skills'),
          axios.get('/projects'),
          axios.get('/contacts'),
        ]);

        setStats({
          skills: skillsRes.data.length,
          projects: projectsRes.data.length,
          messages: messagesRes.data.length,
        });

        setMessages(messagesRes.data);
        setErrorMsg('');
        setLastUpdate(new Date().toLocaleTimeString());
      } catch (err) {
        setErrorMsg('Failed to load data.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // Pagination for messages table
  const paginatedMessages = messages.slice((page - 1) * rowsPerPage, page * rowsPerPage);
  const totalPages = Math.ceil(messages.length / rowsPerPage);

  // Delete message handler
  const handleDelete = async (id) => {
    if (!window.confirm('Delete this message?')) return;

    try {
      await axios.delete(`/contacts/${id}`);
      setMessages((prev) => prev.filter((msg) => msg._id !== id));
      setStats((prev) => ({ ...prev, messages: prev.messages - 1 }));
    } catch (err) {
      alert('Failed to delete message.');
      console.error(err);
    }
  };

  // Chart data for skills and projects
  const chartData = [
    { name: 'Skills', count: stats.skills },
    { name: 'Projects', count: stats.projects },
    { name: 'Messages', count: stats.messages },
  ];

  // Mapping summary card keys to routes
  const routeMap = {
    skills: '/admin/skills',
    projects: '/admin/projects',
    messages: '/admin/contacts',
  };

  return (
    <div className="admin-dashboard-wrapper">
      <header className="admin-header">
        <h2>Admin Panel</h2>
        <button className="logout-btn" onClick={() => { localStorage.clear(); navigate('/admin/login'); }}>
          Logout
        </button>
      </header>

      <main className="admin-dashboard">
        <h1>Dashboard Overview</h1>
        <p className="update-info">Last updated: {lastUpdate}</p>

        {loading ? (
          <p>Loading data...</p>
        ) : errorMsg ? (
          <p className="error-msg">{errorMsg}</p>
        ) : (
          <>
            {/* Summary Cards */}
            <section className="summary-cards">
              {['skills', 'projects', 'messages'].map((key) => (
                <div
                  key={key}
                  className="summary-card"
                  style={{ cursor: 'pointer' }}
                  onClick={() => navigate(routeMap[key])}
                  title={`Go to Manage ${key.charAt(0).toUpperCase() + key.slice(1)}`}
                >
                  <h3>{key.charAt(0).toUpperCase() + key.slice(1)}</h3>
                  <p>{stats[key]}</p>
                </div>
              ))}
            </section>

            {/* Bar Chart Section */}
            <section className="chart-section">
              <h2>Summary Chart</h2>
              <ResponsiveContainer width="100%" height={250}>
                <BarChart data={chartData} margin={{ top: 20, right: 30, left: 0, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis allowDecimals={false} />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="count" fill="#7c45c1" />
                </BarChart>
              </ResponsiveContainer>
            </section>

            {/* Messages Table Section */}
            <section className="table-section">
              <h2>Messages</h2>
              {messages.length === 0 ? (
                <p>No messages available.</p>
              ) : (
                <>
                  <table className="messages-table">
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Message</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {paginatedMessages.map(({ _id, name, email, message }) => (
                        <tr key={_id}>
                          <td>{name}</td>
                          <td>{email}</td>
                          <td title={message}>{message.length > 50 ? `${message.slice(0, 50)}...` : message || '(No content)'}</td>
                          <td>
                            <button
                              className="view-btn"
                              onClick={() =>
                                alert(`From: ${name} (${email})\n\nMessage:\n${message || '(No message content)'}`)
                              }
                            >
                              View
                            </button>
                            <button className="delete-btn" onClick={() => handleDelete(_id)}>
                              Delete
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>

                  {/* Pagination Controls */}
                  <div className="pagination">
                    <button disabled={page === 1} onClick={() => setPage(page - 1)}>
                      Prev
                    </button>
                    <span>
                      Page {page} of {totalPages}
                    </span>
                    <button disabled={page === totalPages} onClick={() => setPage(page + 1)}>
                      Next
                    </button>
                  </div>
                </>
              )}
            </section>

            {/* Navigation Buttons */}
            <section className="management-buttons">
              <button onClick={() => navigate('/admin/skills')}>Manage Skills</button>
              <button onClick={() => navigate('/admin/projects')}>Manage Projects</button>
              <button onClick={() => navigate('/admin/contacts')}>Manage Contacts</button>
            </section>
          </>
        )}
      </main>

      <footer className="admin-footer">
        &copy; {new Date().getFullYear()} Your Name | Admin Dashboard
      </footer>
    </div>
  );
};

export default AdminDashboard;
