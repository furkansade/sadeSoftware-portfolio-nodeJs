const Resume = require("../../models/Resume");

exports.createResume = async (req, res) => {
  await Resume.create(req.body);

  res.status(201).redirect("/admin/resume")
};

exports.deleteResume = async (req, res) => {
  await Resume.findByIdAndRemove({_id: req.params.id})

  res.status(200).redirect("/admin/resume")

}
