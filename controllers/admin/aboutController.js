const About = require("../../models/About");

exports.createAbout = async (req, res) => {
  await About.create(req.body);

  res.status(201).redirect("/admin/about");
};

exports.updateAbout = async (req, res) => {
  const about = await About.findOneAndUpdate({}, { new: true });
  
  about.aboutContent = req.body.aboutContent;
  about.save();

  res.status(200).redirect("/admin/about");
};

exports.deleteAbout = async (req, res) => {
  await About.findByIdAndRemove({ _id: req.params.id });

  res.status(200).redirect("/admin/about");
};
