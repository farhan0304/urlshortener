const express = require("express");
const {handleUrlShort,handleRedirect,handleAnalytics} = require("../controllers")

const router = express.Router();

router.post('/',handleUrlShort)

// router.get('/:shortid',handleRedirect)

router.get('/analytic/:shortid',handleAnalytics)

module.exports = {router};