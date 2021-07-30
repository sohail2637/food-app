let mongoose = require('mongoose');

let complainSchema=mongoose.Schema({
   username:String,
   email:String,
   contact:String,
   complainText:String
});
let Complains= mongoose.model('complain',complainSchema);
module.exports=Complains;