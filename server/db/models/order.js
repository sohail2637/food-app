let mongoose = require('mongoose');

let OrderSchema=mongoose.Schema({
    sellerId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    productId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'dish'
    },
   name:String,
   email:String,
   address:String,
   contact:String,
   postalCode:String,
   description:String
});
let Orders= mongoose.model('order',OrderSchema);
module.exports=Orders;