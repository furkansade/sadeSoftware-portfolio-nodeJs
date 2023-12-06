const SocialMedia = require("../../models/SocialMedia");

exports.createSocialMedia = async (req, res) => {
  await SocialMedia.create(req.body);

  res.status(201).redirect("/admin/social-media");
};

exports.updateSocialMedia = async (req, res) => {
  const social = await SocialMedia.findOneAndUpdate({
    _id: "6570203a1e74595b30e5c90e",
  });
  social.linkedin = req.body.linkedin;
  social.github = req.body.github;
  social.twitter = req.body.twitter;
  social.youtube = req.body.youtube;
  social.instagram = req.body.instagram;
  social.save();

  res.status(200).redirect("/admin/social-media");
};

exports.deleteSocialMedia = async (req, res) => {
  await SocialMedia.findByIdAndRemove({ _id: req.params.id });

  res.status(200).redirect("/admin/social-media");
};
