const express = require("express")
const { loginUser,
        registerUser,
        generateOTP,
        verifyOTP,
        getUserDetails } = require("../controllers/userController");

const userRouter = express.Router();

userRouter.post("/register", registerUser);
userRouter.post("/login", loginUser);
userRouter.post("/generateotp", generateOTP);
userRouter.post("/verify", verifyOTP);
userRouter.get("/getuserdetails", getUserDetails);

module.exports = userRouter;

