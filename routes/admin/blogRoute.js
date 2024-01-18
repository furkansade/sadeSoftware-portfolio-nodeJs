const express = require("express");
const blogController = require("../../controllers/admin/blogController");

const router = express.Router();

router.route("/create").post(blogController.createBlog);
router.route("/:id").delete(blogController.deleteBlog);
router.route("/:id").post(blogController.updateBlog);

module.exports = router;