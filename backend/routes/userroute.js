const express = require("express");
const {handleSignup,handleLogin} = require("../controllers/userauth")

const router = express.Router();

router.post('/',handleSignup);
router.post('/login',handleLogin);

module.exports = router;