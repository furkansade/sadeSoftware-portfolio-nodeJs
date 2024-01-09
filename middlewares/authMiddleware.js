const User = require("../models/User");

exports.authUser = (req, res, next) => {
  User.findById(req.session.userID).then((user) => {
    if (!user) return res.redirect("/admin/login");
    next();
  });
};