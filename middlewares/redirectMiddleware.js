exports.redirectUser = (req, res, next) => {
    if (req.session.userID) {
      return res.redirect("/admin");
    }
    next();
  };