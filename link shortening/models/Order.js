const mongoose=require('mongoose');



const orderSchema=new mongoose.Schema({
    date:{
        type:Date,
        default:Date.now
        },
        order:{
            type:Number,
            required:true
        },
        list:[
            {
                name:{type:String},
                quantity:{type:Number},
                cost:{type:Number}
            }
        ],
        category:{
            ref:'Categories',
            type:mongoose.Schema.Types.ObjectId
        },
        user:{
            ref:"User",
            type:mongoose.Schema.Types.ObjectId
        }
})
module.exports=mongoose.model('Orders',orderSchema);