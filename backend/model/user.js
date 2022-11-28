
/* 
1. first name-string,required
2.last name- string 
3. email- string, unique,required
4. password- String,
 */


const mongoose=require("mongoose")

 const newUser=new mongoose.Schema({
       firstname:{
        type:String,
        required:true,
       } ,
       lastname:{
        type:String,

       },
       email:{
           type:String, 
           required:true,
           unique:true,
       },
       password:{
        type:String,
        required:[true,"Please enter password"], 
       },
       
 })

 module.exports=mongoose.model("User",newUser)