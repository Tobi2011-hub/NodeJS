const nodemailer = require('nodemailer');

const EMAIL = 'youremail@gmail.com';        // your Gmail address
const APP_PASSWORD = 'your-app-password';    // Gmail app password, NOT your normal password

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: EMAIL,
    pass: APP_PASSWORD,
  },
});

const mailOptions = {
  from: EMAIL,
  to: EMAIL, // sending to yourself
  subject: 'Sending Email using Node.js',
  text: 'That was easy!',
};

transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.error('Error sending email:', error.message);
  } else {
    console.log('Email sent: ' + info.response);
  }
});