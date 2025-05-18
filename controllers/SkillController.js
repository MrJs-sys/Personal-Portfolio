const Skill = require('../models/Skill');

// Create a new skill category and skills
const createSkill = async (req, res) => {
  try {
    const { category, skills } = req.body;
    const newSkill = new Skill({ category, skills });
    await newSkill.save();
    res.status(201).json(newSkill);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Get all skills
const getSkills = async (req, res) => {
  try {
    const skills = await Skill.find();
    res.status(200).json(skills);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Update an existing skill category and skills
const updateSkill = async (req, res) => {
  try {
    const { id } = req.params;
    const { category, skills } = req.body;
    const updatedSkill = await Skill.findByIdAndUpdate(id, { category, skills }, { new: true });
    if (!updatedSkill) {
      return res.status(404).json({ message: 'Skill not found' });
    }
    res.status(200).json(updatedSkill);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Delete a skill category
const deleteSkill = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedSkill = await Skill.findByIdAndDelete(id);
    if (!deletedSkill) {
      return res.status(404).json({ message: 'Skill not found' });
    }
    res.status(200).json({ message: 'Skill deleted' });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = { createSkill, getSkills, updateSkill, deleteSkill };
