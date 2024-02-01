const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const AboutSchema = new Schema({
  aboutContent: String,
});

const About = mongoose.model("About", AboutSchema);

About.findOne({}).then((result) => {
  if (!result) {
    About.create({
      aboutContent: "<span>This is about content.</span>",
    });
  }
});

module.exports = About;
