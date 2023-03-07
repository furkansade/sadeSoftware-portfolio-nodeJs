const express = require("express");

const socialMediaController = require("../../controllers/admin/socialMediaController");

const router = express.Router();

router.route("/").post(socialMediaController.createSocialMedia);
router.route("/:id").put(socialMediaController.updateSocialMedia);
router.route("/:id").delete(socialMediaController.deleteSocialMedia);

module.exports = router;
