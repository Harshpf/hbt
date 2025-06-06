const userdata=require("../models/usermodel");
const bcrypt = require("bcryptjs");


const signup =  async (req, res) => {
    try {
        const {name,email,password} = req.body;// data from user

        const isUser = await userdata.findOne({email});  //validation to avoid multiple registration 
        if(isUser){
           return res.status(400).json({msg:"user already register"})
        }

        const salt=10; 
        const hashedPassword = await bcrypt.hash(data.password, salt);

        const newuser = new userdata({
            name: name,
            email:email,
            password: hashedPassword
        });
        newuser.save();
        console.log(data);

        res.status(200).json("signup suucessfully");
    } catch (err) {
        res.status(500).json({  msg: "error from signup", message: err.message });
    }
};


const login = async (req, res) => {
    try {   
        const { email, password } = req.body;
    
        const validuser = await userdata.findOne({ email });
        console.log(validuser)
        if (!validuser) {
            return res.status(400).json("You are not registered, please register first");
        }

        // const hashedPassword = await bcrypt.hash(password,10);
        
        // if (validuser.password !== password) {
        //     return res.status(400).json("Password does not match");
    // }
        const isMatch = await bcrypt.compare(password, validuser.password);  // syntax to cmpare password
        if (!isMatch) {
            return res.status(400).json("Password does not match");
        }
        res.status(200).json("login successful");
    } catch (err) {
        res.status(500).json({ msg: "error from login", message: err.message });
    }
};

module.exports={
    signup,
    login
}