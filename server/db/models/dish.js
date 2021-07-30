let mongoose = require('mongoose');

let DishSchema=mongoose.Schema({
    referenceId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    dishImage:String,
    dishName:String,
    dishCategory:String,
    dishPrize:Number,
    dishQuantity:String,
    dishdescription:String
});
let Dishes= mongoose.model('dish',DishSchema);
module.exports=Dishes;