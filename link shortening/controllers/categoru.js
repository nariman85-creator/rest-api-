const Category=require('../models/Category');
const Position=require('../models/Position');
const mongoose=require('mongoose');
const errorHandler=require('../utils/error.handler');


module.exports.getAll=async(req,res)=>{
    try {
        const category=await Category.find({user:req.user.id});
        res.status(200).json(category);
    
    } catch (error) {
        errorHandler(res,error);
    }
    
}
module.exports.getById=async(req,res)=>{
    try {
        const category=await Category.findById(req.params.id);
        res.status(200).json(category);
    
    } catch (error) {
        errorHandler(res,error);
    }
    
}


module.exports.remove=async(req,res)=>{
    try {
        const isValid = mongoose.Types.ObjectId.isValid(req.params.id);
        if(isValid){
            await Category.remove({_id:isValid});
            await Position.remove({category:isValid});
            res.status(200).json({
                message:"Категория удалена"
            });
    
        }
          res.status(404).json({
              message:"Что-то пошло не так"
          })
    } catch (error) {
        errorHandler(res,error);
    }
    
}


module.exports.create=async(req,res)=>{
    console.log(req.file);
    res.json(req.file);
    
    const category=new Category({
        name:req.body.name,
        user:req.user.id,
        imageSrc:req.file?req.file.path:""
    });
try {
    category.save();
    res.status(201).json(category);
} catch (error) {
    errorHandler(res,error);
}
}
module.exports.update=(req,res)=>{}