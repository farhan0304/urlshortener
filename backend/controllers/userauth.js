const User = require("../model/user.model")
const {getUser,setUser} = require("../utils/auth")

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
    if (!userdetail) return res.status(401).json({"url":"/signup"});
    const token = setUser("uuid",userdetail);
    res.cookie("uuid",token);
    return res.json({"Success":"User created successfully"});   
    
}

const handleLogout = (req,res) =>{
    res.clearCookie('uuid');
    return res.json({"url":"/login"})
}
const handleisLoggedIn = (req,res) =>{
    const token = req.cookies?.uuid;
    if (!token) return res.json({"status":"false"});
    const userdetail = getUser(token);
    if (!userdetail) return res.json({"status":"false"});
    return res.json({"islogin":"true"});
    
}
module.exports = {
    handleSignup,
    handleLogin,
    handleLogout,
    handleisLoggedIn
}