 
const Todo=require("../model/todo")
exports.getTodo=async(req,res)=>{
     try {
          const todo=await Todo.findById(req.params.todoId)
           res.status(201).send(todo)
     } catch (error) {
        console.log("erro in get-todo  route")
        console.log(error)
     }


}