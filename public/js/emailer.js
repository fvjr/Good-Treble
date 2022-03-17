const path = require('path');
const express = require('express');
// const helpers = require('./utils/helpers');

const app = express();

// Set up Handlebars.js engine with custom helpers

// Inform Express.js on which template engine to use

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

//emailer

const nodemailer = require('nodemailer');
let mailOptions = {
  from: 'goodtreble@gmail.com',
  to: 'vasquezjrf@gmail.com',
  subject: 'Nodemailer Project',
  text: 'Successfull test message yay',
};

// async..await is not allowed in global scope, must use a wrapper
async function mailer() {
  // Generate test SMTP service account from ethereal.email
  // Only needed if you don't have a real mail account for testing

  // create reusable transporter object using the default SMTP transport
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      type: 'OAuth2',
      user: process.env.MAIL_USERNAME,
      pass: process.env.MAIL_PASSWORD,
      clientId: process.env.OAUTH_CLIENTID,
      clientSecret: process.env.OAUTH_CLIENT_SECRET,
      refreshToken: process.env.OAUTH_REFRESH_TOKEN,
    },
  });

  // send mail with defined transport object

  transporter.sendMail(mailOptions, function (err, data) {
    if (err) {
      console.log('Error ' + err);
    } else {
      console.log('Successfull test message yay!!!');
    }
  });
}
module.exports = mailer;
