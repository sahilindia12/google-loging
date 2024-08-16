const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
   nam:String,
   email:String,
   clas:Number,
},{timestamps:true});


const add = new mongoose.model("addtask",userSchema);

module.exports = add;