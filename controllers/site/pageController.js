const SocialMedia = require("../../models/SocialMedia");
const Project = require("../../models/Project");
const Certificate = require("../../models/Certificate");
const About = require("../../models/About");
const Resume = require("../../models/Resume");
const Skiil = require("../../models/Skill");

exports.getHomePage = async (req, res) => {
  const socialMedia = await SocialMedia.findOne({});
  const projects = await Project.find();
  const certificates = await Certificate.find();
  const about = await About.findOne({});
  const resumes = await Resume.find();
  const skills = await Skiil.find();

  res.status(200).render("site/index", {
    pageName: "index",
    socialMedia,
    projects,
    certificates,
    about,
    resumes,
    skills,
  });
};
