import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../../api/axiosInstance";
import './ContactManager.css';

const ContactManager = () => {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState("");

  const navigate = useNavigate();

  const fetchContacts = async () => {
    try {
      const response = await axiosInstance.get("/contacts");
      setContacts(response.data);
    } catch (error) {
      setErrorMsg("Failed to load contact messages.");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this message?")) return;

    try {
      await axiosInstance.delete(`/contacts/${id}`);
      setContacts((prev) => prev.filter((contact) => contact._id !== id));
    } catch (error) {
      alert("Failed to delete the contact.");
    }
  };

  const handleLogout = () => {
    // Logout logic here
    navigate("/login");
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  return (
    <div className="admin-dashboard-wrapper">
      <header className="admin-header">
        <div className="admin-title" onClick={() => navigate("/admin")}>Admin Panel - Contacts</div>
        <button className="logout-btn" onClick={handleLogout}>Logout</button>
      </header>

      <main className="contact-main">
        <h1 className="contact-title">Contact Submissions</h1>

        {loading ? (
          <p className="status-message">Loading messages...</p>
        ) : errorMsg ? (
          <p className="error-msg">{errorMsg}</p>
        ) : contacts.length === 0 ? (
          <p className="status-message">No messages yet.</p>
        ) : (
          <div className="contact-grid">
            {contacts.map((contact) => (
              <div key={contact._id} className="contact-card">
                <div className="contact-header">
                  <strong>{contact.name}</strong>
                  <span className="timestamp">
                    {new Date(contact.createdAt).toLocaleString()}
                  </span>
                </div>

                <div className="contact-info">
                  <div><strong>Email:</strong> <a href={`mailto:${contact.email}`}>{contact.email}</a></div>
                  {contact.phone && <div><strong>Phone:</strong> {contact.phone}</div>}
                </div>

                <p className="contact-message">{contact.message}</p>

                <button className="delete-btn" onClick={() => handleDelete(contact._id)}>Delete</button>
              </div>
            ))}
          </div>
        )}
      </main>

      <footer className="admin-footer">
        &copy; {new Date().getFullYear()} Jyotishman Saloi | Admin Panel
      </footer>
    </div>
  );
};

export default ContactManager;
