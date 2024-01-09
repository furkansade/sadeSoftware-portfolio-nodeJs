const User = require("../../models/User");
const bcrypt = require("bcrypt");
const crypto = require("crypto");
const sendMail = require("../../utils/sendMail");
const moment = require("moment");


exports.loginAdmin = async (req, res) => {
  try {
    const { email, password } = req.body;

    await User.findOne({ email }).then((user) => {
      if (user) {
        bcrypt.compare(password, user.password, (err, same) => {
          if (same) {
            req.session.userID = user._id;
            res.status(200).redirect("/admin");
          } else {
            req.flash("error", "Email or Password not correct!");
            res.status(400).redirect("/admin/login");
          }
        });
      } else {
        req.flash("error", "Admin not exist!");
        res.status(400).redirect("/admin/login");
      }
    });
  } catch (error) {
    res.status(400).json({
      status: "fail",
      error,
    });
    console.log(error);
  }
};

exports.changePassword = async (req, res) => {
  const user = await User.findOneAndUpdate({ _id: req.params.id });

  user.password = req.body.password;
  user.save();

  res.status(200).redirect("/admin");

}

exports.logoutAdmin = (req, res) => {
  req.session.destroy(() => {
    res.redirect("/");
  });
};

exports.forgetPassword = async (req, res) => {
  try {
    const { email } = req.body;

    const userInfo = await User.findOne({ email }).select("username email");

    if (!userInfo) {
      req.flash("error", "Email not found!");
      return res.status(400).json({
        status: "fail",
        message: "Email not found!",
      });
    }

    console.log("authController ----- >", userInfo, "<----- authController");

    if (!userInfo.email) {
      req.flash("error", "User email is not available!");
      return res.status(400).json({
        status: "fail",
        message: "User email is not available!",
      });
    }

    const resetCodeBuffer = crypto.randomBytes(2); // 3 byte'lık bir rastgele veri oluştur

    // Buffer'ı rakamlara çevir
    const resetCode = parseInt(resetCodeBuffer.toString('hex'), 16);

    // resetCode şu anda bir sayıdır, ihtiyacınıza göre stringe çevirebilirsiniz
    const resetCodeString = resetCode.toString();

    await sendMail({
      from: process.env.EMAIL_USERNAME,
      to: userInfo.email,
      subject: "Reset Password",
      html: `<h1>Reset Password</h1>
        <p>Hi ${userInfo.username}</p>
        <p>Reset code: ${resetCode}</p>
        <p>Thanks</p>
        `,
    });

    await User.findByIdAndUpdate(userInfo._id, {
      reset: {
        code: resetCode,
        time: moment(new Date()).add(15, "minute").format("YYYY-MM-DD HH:mm:ss"),
      },
    });

    return res.status(200).json({
      status: "success",
      message: "Reset code sent to your email!",
    });
  } catch (error) {
    console.error("Forget Password Error:", error);
    res.status(500).json({
      status: "error",
      message: "Internal server error",
    });
  }
};
