import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './login.css';
import logo from '../../assets/2.gif'; // Adjust the path if needed

const Login = () => {
  const [form, setForm] = useState({ username: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      const res = await axios.post('http://localhost:5000/api/auth/login', form);
      localStorage.setItem('token', res.data.token);
      navigate('/admin');
    } catch (err) {
      setError(err.response?.data?.message || 'Login failed');
    }
  };

  return (
    <div className="login-wrapper">
      <header className="login-header">
        <img src={logo} alt="Logo" className="login-logo" />
        <h1 className="login-title">Admin Panel</h1>
      </header>

      <main className="login-main">
        <div className="glass-card">
          <div className="glow-accent"></div>
          <h2>Sign In</h2>
          <form onSubmit={handleSubmit} className="login-form">
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={form.username}
              onChange={handleChange}
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={form.password}
              onChange={handleChange}
              required
            />
            <div className="button-row">
              <button type="submit">Login</button>
              <p className="forgot-password">Forgot password?</p>
            </div>
            {error && <p className="error">{error}</p>}
          </form>
        </div>
      </main>

      <footer className="login-footer">
        <p>&copy; {new Date().getFullYear()} Jyotishman's Portfolio Admin Panel</p>
      </footer>
    </div>
  );
};

export default Login;