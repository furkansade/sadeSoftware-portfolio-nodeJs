const Project = require("../../models/Project");

exports.createProject = async (req, res) => {
  await Project.create(req.body);

  res.status(201).redirect("/admin/projects")
};

exports.deleteProject = async (req, res) => {
  await Project.findByIdAndRemove({_id: req.params.id})

  res.status(200).redirect("/admin/projects")

}
