const nodemailer = require('nodemailer')
require('dotenv').config()

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "nambi2731@gmail.com",
    pass: process.env.GOOGLE_APP_PW,
  },
});

const sentEmail = async(to,subject,text)=>{
    const mailOptions = {
        from:"nambi2713@gmail.com",
        to,
        subject,
        text
    }

    const info = await transporter.sendMail(mailOptions)
    console.log("Email ",info.response)
}
module.exports = sentEmail