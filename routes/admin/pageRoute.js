const express = require("express");

const pageController = require("../../controllers/admin/pageController");

const router = express.Router();

router.route("/").get(pageController.getHomePage);
router.route("/about").get(pageController.getAboutPage);
router.route("/certificates").get(pageController.getCertificatesPage);
router.route("/projects").get(pageController.getProjectPage);
router.route("/resume").get(pageController.getResumePage);
router.route("/social-media").get(pageController.getSocialMediaPage);

module.exports = router;
