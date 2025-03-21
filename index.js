const nodemailer= require('nodemailer')
const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "muzaffarbekmustafayev@gmail.com", // O‘z emailingizni yozing
      pass: "xpvv ddvw akrt ywmj",  // App Password kiritiladi
    },
  });
  
  const mailOptions = {
    from: "muzaffarbekmustafayev@gmail.com",
    to: "allamurodhakimov@gmail.com",
    subject: "Hello from Nodemailer!",
    text: "This is a test email sent using Nodemailer.",
  };
  
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log("Error:", error);
    } else {
      console.log("Email sent:", info.response);
    }
  });
  