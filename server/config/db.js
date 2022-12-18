const mongoose = require('mongoose')
require("dotenv").config() 

const connectToDataBase = () => {
    mongoose
        .connect("mongodb+srv://1m3d:m2CeEsiAvAruXhf@cluster0.5yreirl.mongodb.net/ISP070?retryWrites=true&w=majority", {
            useNewUrlParser: true,
            useUnifiedTopology: true,

        })
        .then(() => {
            console.log("Connected with Database");
            
        });
};

module.exports = connectToDataBase;