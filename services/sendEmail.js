require("dotenv").config();

const nodemailer = require("nodemailer");

const { EMAIL_USER, EMAIL_PASS } = process.env;

const config = {
  host: "sandbox.smtp.mailtrap.io",
  port: 2525,
  secure: true,
  auth: {
    user: EMAIL_USER,
    pass: EMAIL_PASS,
  },
};

const transporter = nodemailer.createTransport(config);

const sendEmail = async (data) => {
  try {
    const emailData = { ...data, from: EMAIL_USER };

    const response = await transporter.sendMail(emailData);
    console.log(response);
    return true;
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = sendEmail;
