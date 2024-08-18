const express = require("express")
const Shorturl = require("../model/url.model")
const {nanoid}= require("nanoid")

const handleUrlShort = async (req,res)=>{
    if (!req.body.redirectedurl) return res.status(401).json({err:"All fields are Required"});
    const nano = nanoid(10);
    // console.log(nano)
    const add = await Shorturl.create({
        shortid:nano,
        redirectedurl: req.body.redirectedurl,
        visitedate:[]
    })
    return res.json(add);
}

const handleRedirect = async (req,res)=>{
    const shortid = req.params.shortid;

    const ur = await Shorturl.findOne({shortid});
    ur.visitedate.push({visitdate:Date.now()})

    const upd = await Shorturl.updateOne({shortid},{
        visitedate: ur.visitedate
    }); 
    if (!ur) return res.status(400).json({"Error":"Bad Request"});
    return res.redirect(ur.redirectedurl);

}
const handleAnalytics = async (req,res)=>{
    const shortid = req.params.shortid;
    const ur = await Shorturl.findOne({shortid});
    if (!ur) return res.status(400).json({"Error":"Enter valid url"})
    return res.json({"TotalVisited":`${ur.visitedate.length}`,"Time":`${ur.visitedate.map((val)=>val.visitdate)}`})

}

module.exports = {handleUrlShort,handleRedirect,handleAnalytics}