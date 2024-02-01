const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const SocialMediaSchema = new Schema({
  linkedin: String,
  github: String,
  youtube: String,
  instagram: String,
  twitter: String,
});


SocialMediaSchema.pre("save", function (next) {
  const platforms = {
    linkedin: "https://www.linkedin.com/in/",
    github: "https://www.github.com/",
    youtube: "https://www.youtube.com/",
    instagram: "https://www.instagram.com/",
    twitter: "https://www.twitter.com/",
  };

  Object.keys(platforms).forEach(platform => {
    if (this[platform]) {
      // Concatenate username with custom link structure
      this[platform] = `${platforms[platform]}${this[platform]}`;
    }
  });

  next();
});

const SocialMedia = mongoose.model("SocialMedia", SocialMediaSchema);

SocialMedia.findOne({}).then((result) => {
  if (!result) {
    SocialMedia.create({
      linkedin: "linkedin",
      github: "github",
      youtube: "@youtube",
      instagram: "instagram",
      twitter: "twitter",
    });
  }
});


module.exports = SocialMedia;
