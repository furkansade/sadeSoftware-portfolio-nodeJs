const Certificate = require("../../models/Certificate");
const Project = require("../../models/Project");
const SocialMedia = require("../../models/SocialMedia");
const About = require("../../models/About");
const Resume = require("../../models/Resume");
const User = require("../../models/User");

exports.getHomePage = async (req, res) => {

  const user = await User.findOne({ _id: req.session.userID });


  res.status(200).render("admin/index", {
    pageName: "adminIndex",
    user,
  });
};

exports.getAboutPage = async (req, res) => {
  const about = await About.findOne({ _id: "659c1b75c4230050eac89e89" });

  res.status(200).render("admin/about", {
    pageName: "about",
    about,
  });
};

exports.getCertificatesPage = async (req, res) => {
  const certificates = await Certificate.find();

  res.status(200).render("admin/certificates", {
    pageName: "certificates",
    certificates,
  });
};

exports.getProjectPage = async (req, res) => {
  const projects = await Project.find();

  res.status(200).render("admin/projects", {
    pageName: "projects",
    projects,
  });
};

exports.getResumePage = async (req, res) => {
  const resumes = await Resume.find()

  res.status(200).render("admin/resume", {
    pageName: "resume",
    resumes
  });
};

exports.getSocialMediaPage = async (req, res) => {
  const socialMedia = await SocialMedia.findOne({
    _id: "659c1c4c32ccc4411ab441d0",
  });

  res.status(200).render("admin/socialMedia", {
    pageName: "socialMedia",
    socialMedia,
  });
};

exports.getSkillsPage = async (req, res) => {
  
  res.status(200).render("admin/skills", {
    pageName: "skills",
  });
}

exports.getLoginPage = async (req, res) => {
  res.status(200).render("admin/adminLogin", {
    pageName: "adminLogin",
  });
};
