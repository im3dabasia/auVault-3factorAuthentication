const express = require('express')
const connectDB = require("./config/db");
const userRouter = require("./routes/userRoute")

// Connect to local DB
connectDB();

// App setup
const app = express();

// Communicate with backend
const cors=require("cors");
const corsOptions ={
    origin:'*', 
    credentials:true,
    optionSuccessStatus:200,
}

// Middlewares
app.use(cors(corsOptions))
app.use(express.json())

// Subrouters
app.use("/api", userRouter);

// Listening to port
app.listen(5000, () => {
    console.log(`Server is running on port ${"5000"}`); 
});

