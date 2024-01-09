const express = require("express");

const pageController = require("../../controllers/admin/pageController");
const authMiddleware = require("../../middlewares/authMiddleware");
const redirectMiddleware = require("../../middlewares/redirectMiddleware");

const router = express.Router();

const authCheck = authMiddleware.authUser;

router.route("/").get(authCheck, pageController.getHomePage);
router.route("/about").get(authCheck, pageController.getAboutPage);
router.route("/certificates").get(authCheck, pageController.getCertificatesPage);
router.route("/projects").get(authCheck, pageController.getProjectPage);
router.route("/resume").get(authCheck, pageController.getResumePage);
router.route("/social-media").get(authCheck, pageController.getSocialMediaPage);
router.route("/login").get(redirectMiddleware.redirectUser, pageController.getLoginPage);

module.exports = router;
