 
const Todo=require("../model/todo")
exports.editTodo=async(req,res)=>{
     try {
        //collect data
          const {name,tasks}=req.body
          //validate
          if(!name){
            res.status(401).send("Please send heading atleast")
          }
          const todo=await Todo.findByIdAndUpdate(req.params.todoId,{name,tasks})
           res.status(201).send(todo)
     } catch (error) {
        console.log("erro in get-todo  route")
        console.log(error)
     }


}