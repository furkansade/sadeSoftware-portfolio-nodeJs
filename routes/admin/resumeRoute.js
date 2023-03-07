const express = require("express");

const resumeController = require("../../controllers/admin/resumeController");

const router = express.Router();

router.route("/").post(resumeController.createResume);
router.route("/:id").delete(resumeController.deleteResume);

module.exports = router;
