const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const ResumeSchema = new Schema({
  school: String,
  faculty: String,
  eduStartedYear: String,
  eduEndYear: String,
  country: String,
  jobTitle: String,
  company: String,
  expStartedYear: String,
  expEndYear: String,
  language: String,
  description: String,
});

const Resume = mongoose.model("Resume", ResumeSchema);

module.exports = Resume;
