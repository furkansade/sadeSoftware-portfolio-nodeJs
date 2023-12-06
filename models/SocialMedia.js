const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const SocialMediaSchema = new Schema({
  linkedin: String,
  github: String,
  youtube: String,
  instagram: String,
  twitter: String,
});

const SocialMedia = mongoose.model("SocialMedia", SocialMediaSchema);


module.exports = SocialMedia;
