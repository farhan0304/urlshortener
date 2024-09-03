const jwt =  require("jsonwebtoken");
const signedKey = "farhan123";

const setUser = (userDetail)=>{
    const detail = {
        username: userDetail.username,
        email: userDetail.email,
        id : userDetail._id
    }
    const token  = jwt.sign(detail,signedKey);
    return token;
}

const getUser = (token) =>{
    const detail = jwt.verify(token,signedKey);
    if (!detail) return null;
    return detail;
}

module.exports = {
    setUser,
    getUser
}