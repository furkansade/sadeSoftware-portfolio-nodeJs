const Certificate = require("../../models/Certificate");
const Project = require("../../models/Project");
const SocialMedia = require("../../models/SocialMedia");
const Skill = require("../../models/Skill");
const Blog = require("../../models/Blog");
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
  const about = await About.findOne({});

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
  const socialMedia = await SocialMedia.findOne({});

  res.status(200).render("admin/socialMedia", {
    pageName: "socialMedia",
    socialMedia,
  });
};

exports.getSkillsPage = async (req, res) => {

  const skills = await Skill.find();
  
  res.status(200).render("admin/skills", {
    pageName: "skills",
    skills
  });
};



exports.getBlogsPage = async (req, res) => {

  const blogs = await Blog.find();

  blogs.forEach((blog) => {
    blog.description = blog.description.substring(0, 100) + "...";
  }
  );

  res.status(200).render("admin/blogs/blogs", {
    pageName: "blogs",
    blogs,
  });
};

exports.getCreateBlogPage = async (req, res) => {
  res.status(200).render("admin/blogs/addBlog",{
    pageName: "addBlog",
  })
};

exports.getUpdateBlogPage = async (req, res) => {
  res.status(200).render("admin/blogs/updateBlog",{
    pageName: "updateBlog",
  })
};



exports.getLoginPage = async (req, res) => {
  res.status(200).render("admin/adminLogin", {
    pageName: "adminLogin",
  });
};
