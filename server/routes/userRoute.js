const express = require("express")
const { loginUser,
        registerUser,
        generateOTP,
        verifyOTP} = require("../controllers/userController");

const userRouter = express.Router();

userRouter.post("/register", registerUser);
userRouter.post("/login", loginUser);
userRouter.post("/generateotp", generateOTP);
userRouter.post("/verify", verifyOTP);



module.exports = userRouter;

