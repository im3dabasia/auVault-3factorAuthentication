const UserModel = require("../models/student.js");
require("dotenv").config();
var nodemailer = require('nodemailer');
const bcrypt = require("bcryptjs");

const {  OTPGenerator , getOTP } = require('../utils/OTPGenerator')

// global variables
let userEmail = ""

const registerUser = async (req, res) => {
    console.log("inside register")
    try {
        let { email, userName, passWord } = await req.body;
        userEmail = email
        console.log(req.body)
        const userCheck = await UserModel.findOne({ email });
        console.log(userCheck)
        if (userCheck) {
            console.log("inside only")
            return res.json({
                msg: "User already exist, please try to login.",
                status: false,
            });
        }
        console.log("hello")
        const salt = await bcrypt.genSaltSync(10);
        //   const salt = process.env.BCRYPT_SALT;
        const encryptedPassword = await bcrypt.hashSync(passWord, salt);
        console.log(encryptedPassword)
        const newUser = await UserModel.create({
            email: email,
            name: userName,
            passWord: encryptedPassword,
            audio: ""
        });
        console.log(newUser)
        console.log("bye")

        delete newUser.passWord;
        return res.status(201).json({ status: true, newUser });
    } catch (err) {
        res.status(400).json({
            msg: "error occurs please try again",
            error: err,
            status: false,
        });
    }
};

const loginUser = async (req, res) => {
    let { email, passWord } = await req.body;
    userEmail = email
    const userData = await UserModel.findOne({ email });
    if (!userData) {
        return res.json({ msg: "User does not exist", status: false });
    } else {
        const isPassCorrect = bcrypt.compareSync(passWord, userData.passWord);
        if (!isPassCorrect) {
            return res.json({ msg: "Wrong password or email address", status: false });
        } else {
            return res.json({
                msg: "Thanks for logging in with us.",
                status: true,
                userData,
            });
        }
    }
};

const generateOTP = async (req, res) => {
    let { email } = await req.body;
    console.log(req.body)
    const userData = await UserModel.findOne({ userEmail });
    if (!userData) {
        return res.json({ msg: "User does not exist", status: false });
    } else {
        let ans = await OTPGenerator(userEmail)
        console.log(ans)
        return res.json({ status: true, msg: "OTP Has been Generated" });
    }
};
const verifyOTP = async (req, res) => {
    let { otp } = await req.body;
    const otpSent = getOTP()
    const otpRecieved = otp
    console.log(typeof(otpSent) , "---" , typeof(otpRecieved))
    console.log(req.body)
    if (otpRecieved.localeCompare(otpSent)) {
        return res.json({ msg: "Wrong OTP    Try Again", status: false });
    } else {
        return res.json({ status: true, msg: "OTP Entered is Correct" });
    }
};

module.exports = { registerUser, loginUser, userEmail, generateOTP, verifyOTP };


