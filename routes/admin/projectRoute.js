const express = require("express");

const projectController = require("../../controllers/admin/projectController");

const router = express.Router();

router.route("/").post(projectController.createProject);
router.route("/:id").delete(projectController.deleteProject);

module.exports = router;
