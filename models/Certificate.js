const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const CertificateSchema = new Schema({
  certificateName: String,
  certificateImage: String,
  certificateProvider: String,
  certificateType: String,
});

const Certificate = mongoose.model("Certificate", CertificateSchema);

module.exports = Certificate;
