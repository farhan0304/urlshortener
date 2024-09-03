const mongoose = require("mongoose");

// const visitSchema = new mongoose.Schema({
//     visitdate:{
//         type:Number
//     }
// })
const urlSchema = new mongoose.Schema({
    shortid:{
        type: String,
        required:true,
        unique:true
    },
    redirectedurl:{
        type: String,
        required:true,
        unique:false
    },
    visitedate:[{visitdate:{type:Number}},]
},{timestamps:true});

const Shorturl = mongoose.model("Shorturl",urlSchema);
module.exports=Shorturl;