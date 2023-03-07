const Certificate = require("../../models/Certificate");
const Project = require("../../models/Project");
const SocialMedia = require("../../models/SocialMedia");
const About = require("../../models/About");
const Resume = require("../../models/Resume");

exports.getHomePage = async (req, res) => {
  res.status(200).render("admin/index", {
    pageName: "adminIndex",
  });
};

exports.getAboutPage = async (req, res) => {
  const about = await About.findOne({ _id: "64045908426259cb539646be" });

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
    _id: "6403ba278cc447da9686e347",
  });

  res.status(200).render("admin/socialMedia", {
    pageName: "socialMedia",
    socialMedia,
  });
};
