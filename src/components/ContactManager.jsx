import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ContactManager = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/contacts');
        setContacts(response.data);
      } catch (error) {
        console.error('Failed to load contacts:', error);
      }
    };
    fetchContacts();
  }, []);

  return (
    <div>
      <h2>Contact Submissions</h2>
      <ul>
        {contacts.map(contact => (
          <li key={contact._id}>
            <strong>{contact.name}</strong> ({contact.email})<br />
            {contact.message}<br />
            <small>{new Date(contact.createdAt).toLocaleString()}</small>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactManager;