const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const skillRoutes = require('./routes/skillRoutes');
const authRoutes = require('./routes/authRoutes');
const projectRoutes = require('./routes/projectRoutes');
const contactRoutes = require('./routes/contactRoutes');


const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// API Routes
app.use('/api/skills', skillRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/projects', projectRoutes);
app.use('/api/contacts', contactRoutes);


// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('✅ Connected to MongoDB');
  app.listen(5000, () => {
    console.log('🚀 Server running on http://localhost:5000');
  });
})
.catch((err) => {
  console.error('❌ Failed to connect to MongoDB:', err.message);
});