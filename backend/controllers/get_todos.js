 
const Todo=require("../model/todo")
exports.getTodos=async(req,res)=>{
     try {
          const todos=await Todo.find()
           res.status(201).send(todos)
     } catch (error) {
        console.log("erro in get-todos  route")
        console.log(error)
     }


}