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
      // Kullanıcı adını özel link yapısı ile birleştir
      this[platform] = `${platforms[platform]}${this[platform]}`;
    }
  });

  next();
});

const SocialMedia = mongoose.model("SocialMedia", SocialMediaSchema);


module.exports = SocialMedia;
