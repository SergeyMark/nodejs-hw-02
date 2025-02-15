const nodemailer = require("nodemailer");
const {UKR_NET_EMAIL, UKR_NET_PASS} = require('../config.js');

const nodemailerConfig = {
    host: "smtp.ukr.net",
    post: 465,
    secure: true,
    auth: {
        user: UKR_NET_EMAIL,
        pass: UKR_NET_PASS,
    }
}

const transport = nodemailer.createTransport(nodemailerConfig);

const sendEmail = async(data) => {
    const email = {from: UKR_NET_EMAIL, ...data};
    await transport.sendMail(email);
    return true;
}

module.exports = sendEmail;