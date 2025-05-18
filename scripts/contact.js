// Load environment variables from .env
require('dotenv').config();

const axios = require('../../frontend/src/api/axiosInstance');

// Sample contact form data
const contactData = {
  name: 'Jyotishman Tester',
  email: 'jyotishman.test@gmail.com',
  phone: '6002064318',
  message: 'Hey there! This is a backend test of the contact form.',
};

// Function to test contact form submission
async function testContactSubmission() {
  try {
    const response = await axios.post('http://localhost:5000/api/contact', contactData);
    console.log('✅ Contact form submitted successfully:');
    console.log(response.data);
  } catch (error) {
    console.error('❌ Failed to submit contact form:');
    if (error.response) {
      console.error('Status:', error.response.status);
      console.error('Response:', error.response.data);
    } else {
      console.error('Error:', error.message);
    }
  }
}

// Run the test
testContactSubmission();