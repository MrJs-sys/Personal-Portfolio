const Contact = require('../models/Contact');

// Create a new contact message
const createContact = async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;
    if (!name || !email) {
      return res.status(400).json({ message: 'Name and email are required.' });
    }

    const newContact = new Contact({ name, email, phone, message });
    await newContact.save();

    res.status(201).json({ message: 'Message received. Thank you!', contact: newContact });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get all contact messages (Admin protected)
const getContacts = async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.status(200).json(contacts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete a contact message by ID (Admin protected)
const deleteContact = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedContact = await Contact.findByIdAndDelete(id);

    if (!deletedContact) {
      return res.status(404).json({ message: 'Contact message not found' });
    }

    res.status(200).json({ message: 'Contact message deleted' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createContact,
  getContacts,
  deleteContact,
};