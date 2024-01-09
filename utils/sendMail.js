const nodemailer = require('nodemailer');

const sendMail = async (options) => {
    const transporter = nodemailer.createTransport({
        host: "smtp-mail.hotmail.com",
        port: 587,
        secure: false,
        auth: {
            user: process.env.EMAIL_USERNAME,
            pass: process.env.EMAIL_PASSWORD
        }
    });

    transporter.sendMail(options, (err, info) => {
        if (err) {
            console.log(err);
        }
        console.log("sendMail --------->", info, "<--------- sendMail");
        return true;
    });
}

module.exports = sendMail;