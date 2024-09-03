const User = require("../model/user.model")
const {setUser} = require("../utils/auth")

const handleSignup = async (req,res) =>{
    const {username,email,password} = req.body;
    if (!username || !email || !password) return res.status(401).json({"error":"All fields are required"});
    const userdetail = await User.create({username,email,password});
    const token  = setUser(userdetail);
    res.cookie("uuid",token);
    return res.json({"Success":"User created successfully"});
}

const handleLogin = async (req,res) =>{
    const {email,password} = req.body;
    if (!email || !password) return res.status(401).json({"error":"Required"});
    const userdetail = await User.findOne({email,password});
    if (!userdetail) return res.status(401).json({"error":"User not found"});
    const token = setUser("uuid",userdetail);
    res.cookie(token);
    return res.json({"Success":"User created successfully"});   
    
}

module.exports = {
    handleSignup,
    handleLogin,
}