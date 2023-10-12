const mongoose=require('mongoose')


const Schema=mongoose.Schema;
const userSchema=new Schema({
   
   Name:{
    type:String,
    required:true
   },
   posts:{
    type:Number,
    requires:true
   }
     


})



module.exports=mongoose.model('User',userSchema)