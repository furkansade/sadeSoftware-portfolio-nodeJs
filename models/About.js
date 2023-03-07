const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const AboutSchema = new Schema({
  aboutContent: String,
});

const About = mongoose.model("About", AboutSchema);

module.exports = About;
