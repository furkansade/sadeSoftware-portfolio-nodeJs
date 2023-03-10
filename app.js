const express = require("express");
const ejs = require("ejs");
const mongoose = require("mongoose");
const fileUpload = require("express-fileupload");
const methodOverride = require("method-override")

const pageRoute = require("./routes/site/pageRoute");

// ADMIN
const adminPageRoute = require("./routes/admin/pageRoute");
const projectRoute = require("./routes/admin/projectRoute");
const certificateRoute = require("./routes/admin/certificateRoute");
const socialMediaRoute = require("./routes/admin/socialMediaRoute");
const aboutRoute = require("./routes/admin/aboutRoute");
const resumeRoute = require("./routes/admin/resumeRoute");

const SocialMedia = require("./models/SocialMedia")
const About = require("./models/About");


const app = express();

mongoose.connect("mongodb://127.0.0.1/sadeResumeSite").then(() => {
  console.log("connected database!");
});

app.set("view engine", "ejs");

async (req, res) => {
  global.socialMedia = await SocialMedia.findOne({ _id: "6403ba278cc447da9686e347"});
}

async (req, res) => {
  global.about = await About.findOne({ _id: "64045908426259cb539646be"});
}

app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(fileUpload());
app.use(
  methodOverride('_method', {
    methods: ['POST', 'GET'],
  })
);

// SITE
app.use("/", pageRoute);

// ADMIN
app.use("/admin", adminPageRoute);
app.use("/admin/certificate", certificateRoute);
app.use("/admin/project", projectRoute);
app.use("/admin/social-media", socialMediaRoute);
app.use("/admin/about", aboutRoute);
app.use("/admin/resume", resumeRoute);

const PORT = 4000;
app.listen(PORT, () => {
  console.log(`listening port: ${PORT}`);
});
