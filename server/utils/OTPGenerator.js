var nodemailer = require('nodemailer');

let OTP = ""

const OTPGenerator = async (userEmail) => {
    const transporter = nodemailer.createTransport({
        host: 'smtp.zoho.in',
        port: 587,
        auth: {
            user: 'im3dabasia@zohomail.in',
            pass: 'S6PdAKPfVurj'
        }
    });
    OTP = Math.floor(100000 + Math.random() * 900000)
    var mailOptions = {
        from: 'im3dabasia@zohomail.in',
        to: userEmail,
        subject: 'ISP070 CYBERSECURITY OTP',
        text: OTP + ""

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
