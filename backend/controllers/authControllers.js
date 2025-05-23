const userdata=require("../models/usermodel");

const signup =  async (req, res) => {
    try {
        const data = req.body;
        const newuser=new userdata({
            name:data.name,
            email:data.email,
            password:data.password
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
        if (!validuser) {
            return res.status(400).json("You are not registered, please register first");
        }
        if (validuser.password !== password) {
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