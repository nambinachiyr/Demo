const nodemailer = require('nodemailer')
require('dotenv').config()

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GOOGLE_APP_Email,
    pass: process.env.GOOGLE_APP_PW,
  },
});

const sentEmail = async(to,subject,text)=>{
    const mailOptions = {
        from:process.env.GOOGLE_APP_Email,
        to,
        subject,
        text
    }

    const info = await transporter.sendMail(mailOptions)
    console.log("Email ",info.response)
}
module.exports = sentEmail