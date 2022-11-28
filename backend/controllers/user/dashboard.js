const { findById } = require("../../model/todo")



exports.dashboard=async(req,res)=>{
/* 
 0. auth middelware is called son now my req have req.user which have my user._id  with this id i can call to my databse  
 1. userid from req.user 
 2. make a database call to get user information 
 3. send this to the front end
*/

try {
    // 1. userid from req.user
const {id}=req.user
// 2. make a database call to get user information 
const user=await findById(id)
// user has to be there beacasue we have already checked in auth.js
return res.status(201).json({
    success:true,
    user 
})
} catch (error) {
    
}



console.log(req.user)
return res.send("Welcome to dashboard")
}