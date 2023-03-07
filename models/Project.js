const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ProjectSchema = new Schema({
  projectName: String,
  projectURL: String,
  projectIcon: String,
  projectDescription: String,
});

const Project = mongoose.model("Project", ProjectSchema);

module.exports = Project;
