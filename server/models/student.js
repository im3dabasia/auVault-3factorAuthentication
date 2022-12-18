const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name:{
    type:String,
    required: true,
  },
  email:{
    type:String
  },
  passWord:{
    type:String,
    required:true,
    min:4,
    max:16 
  },
  audio:String
});

const UserModel = mongoose.model("UserModel", UserSchema);

module.exports =  UserModel;

