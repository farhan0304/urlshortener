const express = require("express");
const {handleSignup,handleLogin,handleLogout,handleisLoggedIn} = require("../controllers/userauth")

const router = express.Router();

router.post('/',handleSignup);
router.post('/login',handleLogin);
router.get('/logout',handleLogout)
router.get('/isSession',handleisLoggedIn)

module.exports = router;