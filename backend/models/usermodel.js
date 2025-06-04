const mongoose=require("mongoose");

// user schema
const userschema= new mongoose.Schema({
    // name:String,
    email:String,
    password:String,
});

// usermodel
const userdata=mongoose.model("usermodel",userschema);

module.exports = userdata