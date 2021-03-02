const nodemailer = require('nodemailer');

const sendEmail = async (options) => {
  // 1- Create a transporter
  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    // there was an error with both these ports: 25 and 2525 they were close
    // I figured this out using the command: telnet smtp.mailtrap.io 25 
    port: process.env.EMAIL_PORT,
    auth: {
      user: process.env.EMAIL_USERNAME,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  // 2- Define the email options
  const mailOptions = {
    from: '"Bassant" <bassant_abdelgawad@hotmail.com>',
    to: options.email,
    subject: options.subject,
    text: options.message,
    //html:
  };

  // 3- Send the email
  await transporter.sendMail(mailOptions);
};

module.exports = sendEmail;
