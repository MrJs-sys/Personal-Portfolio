const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  techStack: [String],
  liveDemoLink: String,
  downloadLink: String,
  imageUrl: String
}, { timestamps: true });

module.exports = mongoose.model('Project', projectSchema);