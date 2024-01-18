const express = require("express");
const ejs = require("ejs");
const mongoose = require("mongoose");
const fileUpload = require("express-fileupload");
const methodOverride = require("method-override")
const MongoStore = require("connect-mongo");
const session = require("express-session");
const flash = require("connect-flash");

const dotenv = require("dotenv");
const connectToDatabase = require("./db.js");


dotenv.config();
connectToDatabase();


const pageRoute = require("./routes/site/pageRoute");

// ADMIN
const adminPageRoute = require("./routes/admin/pageRoute");
const projectRoute = require("./routes/admin/projectRoute");
const certificateRoute = require("./routes/admin/certificateRoute");
const socialMediaRoute = require("./routes/admin/socialMediaRoute");
const aboutRoute = require("./routes/admin/aboutRoute");
const resumeRoute = require("./routes/admin/resumeRoute");
const authRoute = require("./routes/admin/authRoute");
const skillRoute = require("./routes/admin/skillRoute");
const blogRoute = require("./routes/admin/blogRoute");

const SocialMedia = require("./models/SocialMedia")
const About = require("./models/About");


const app = express();

// mongoose.connect("mongodb://127.0.0.1/sadeResumeSite").then(() => {
//   console.log("connected database!");
// });

app.set("view engine", "ejs");

async (req, res) => {
  global.socialMedia = await SocialMedia.findOne({ _id: "659c1c4c32ccc4411ab441d0"});
}


async (req, res) => {
  global.about = await About.findOne({ _id: "659c1b75c4230050eac89e89"});
}



app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  session({
    secret: "my_keyboard-cat",
    resave: false,
    saveUninitialized: true,
    store: MongoStore.create({
      mongoUrl: process.env.DB_URI,
    }),
  })
);
app.use(flash());
app.use((req, res, next) => {
  res.locals.flashMessages = req.flash();
  next();
});
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
app.use("/admin/auth", authRoute);
app.use("/admin/skills", skillRoute);
app.use("/admin/blogs", blogRoute);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`listening port: ${PORT}`);
});

