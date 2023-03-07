const express = require("express")

const certificateController = require("../../controllers/admin/certificateController")

const router = express.Router();

router.route("/").post(certificateController.createCertificate)
router.route("/:id").delete(certificateController.deleteCertificate)

module.exports = router;
