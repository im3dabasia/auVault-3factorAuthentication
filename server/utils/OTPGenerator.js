require('dotenv'). config() 
var nodemailer = require('nodemailer');

let OTP = ""

const OTPGenerator = async (userEmail) => {
    const transporter = nodemailer.createTransport({
        host: 'smtp.zoho.in',
        port: 587,
        auth: {
            user: process.env.SENDER_EMAIL,
            pass: process.env.SENDER_PASSWORD
        }
    });
    OTP = Math.floor(100000 + Math.random() * 900000)
    var mailOptions = {
        from: process.env.SENDER_EMAIL,
        to: userEmail,
        subject: 'ISP070 CYBERSECURITY OTP',
        text: "Your OTP for auVault is:" + OTP + "." + "Thanks for logging in with us!"
    };
    
    console.log(mailOptions)
    const sender = await transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        }
        else {
            console.log('Email sent:' + info.response);
        }
    });
    return OTP
}

const getOTP = () =>{
    return OTP + ""
}


module.exports = { OTPGenerator, getOTP};
