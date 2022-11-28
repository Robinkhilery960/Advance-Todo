 
const Todo=require("../model/todo")
const User=require("../model/user")
exports.getTodos=async(req,res)=>{
     try {
          const {userId}=req.user
          const todos=await Todo.find({userId}) 
           res.status(201).send(todos)
     } catch (error) {
        console.log("erro in get-todos  route")
        console.log(error)
     }


}