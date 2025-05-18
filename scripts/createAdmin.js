// backend/scripts/createAdmin.js
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Admin = require('../models/Admin');

dotenv.config();

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(async () => {
  const username = 'admin';
  const password = 'yourSecurePassword123';

  const existingAdmin = await Admin.findOne({ username });
  if (existingAdmin) {
    console.log('Admin already exists.');
    return mongoose.disconnect();
  }

  const newAdmin = new Admin({ username, password });
  await newAdmin.save();

  console.log('✅ Admin created successfully');
  mongoose.disconnect();
})
.catch((err) => {
  console.error('❌ Failed to create admin:', err.message);
});
