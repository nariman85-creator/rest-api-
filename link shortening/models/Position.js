const mongoose=require('mongoose');



const positonSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
        },
        cost:{
            type:Number,
            required:true
        },
        category:{
            ref:'Categories',
            type:mongoose.Schema.Types.ObjectId
        },
        user:{
            ref:"User",
            type:mongoose.Schema.Types.ObjectId
        }
})
module.exports=mongoose.model('Positions',positonSchema);