const express = require("express");

const authController = require("../../controllers/admin/authController");

const router = express.Router();

router.route("/login").post(authController.loginAdmin);
router.route("/logout").get(authController.logoutAdmin);
router.route("/forget-password").post(authController.forgetPassword);
router.route("/change-password/:id").put(authController.changePassword);

module.exports = router;
