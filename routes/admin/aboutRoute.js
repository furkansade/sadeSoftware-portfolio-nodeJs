const express = require("express");

const aboutController = require("../../controllers/admin/aboutController");

const router = express.Router();

router.route("/").post(aboutController.createAbout);
router.route("/:id").put(aboutController.updateAbout);
router.route("/:id").delete(aboutController.deleteAbout);

module.exports = router;
