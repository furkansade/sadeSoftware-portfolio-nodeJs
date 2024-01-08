const SocialMedia = require("../../models/SocialMedia");
const Project = require("../../models/Project");
const Certificate = require("../../models/Certificate");
const About = require("../../models/About");
const Resume = require("../../models/Resume");

exports.getHomePage = async (req, res) => {
  const socialMedia = await SocialMedia.findOne({
    _id: "659c1c4c32ccc4411ab441d0",
  });
  const projects = await Project.find();
  const certificates = await Certificate.find();
  const about = await About.findOne({ _id: "659c1b75c4230050eac89e89" });
  const resumes = await Resume.find();

  res.status(200).render("site/index", {
    pageName: "index",
    socialMedia,
    projects,
    certificates,
    about,
    resumes,
  });
};
