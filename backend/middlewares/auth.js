const {getUser} = require("../utils/auth")

async function handleLoggedinUserOnly(req,res,next) {
    const token = req.cookies?.uuid;
    if (!token) return res.json({"url":"/login"});
    const userdetail = getUser(token);
    if (!userdetail) return res.json({"url":"/login"});
    next();
}

module.exports = {
    handleLoggedinUserOnly,
}