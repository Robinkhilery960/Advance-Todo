const mongoose=require("mongoose")

 const todoSchema=new mongoose.Schema({
      name:{
        type:String,
        require:[true,"Please enter Heading"]
      },
      tasks:[String] 
 })

 module.exports=mongoose.model("todo",todoSchema)