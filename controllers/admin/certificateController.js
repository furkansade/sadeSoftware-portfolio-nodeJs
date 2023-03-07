const Certificate = require("../../models/Certificate");
const fs = require("fs");

exports.createCertificate = async (req, res) => {
  try {

    let uploadImage = req.files.certificateImage;
    let uploadPath =
      __dirname + "/../../public/site/img/uploadCertificates/" + uploadImage.name;

    uploadImage.mv(uploadPath, async () => {
      await Certificate.create({
        ...req.body,
        certificateImage: "/site/img/uploadCertificates/" + uploadImage.name,
      });
  
      res.status(201).redirect("/admin/certificates");
    });
  } catch (error) {
    res.status(400).redirect("/admin/certificates");
    console.log(error);
  }
};

exports.deleteCertificate = async (req, res) => {
  await Certificate.findByIdAndRemove({ _id: req.params.id });

  res.status(200).redirect("/admin/certificates");
};
