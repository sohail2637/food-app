let mongoose = require('mongoose');

let userSchema=mongoose.Schema({
    fname:String,
    lname:String,
    username:String,
    contact:String,
    email:String,
    password:String,
    type:String,
    sellerimage:String,
    deliverycontact:String,
    address:String,
    postalcode:String
});
let Users= mongoose.model('user',userSchema);
module.exports=Users;